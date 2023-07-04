// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from "@keystone-6/core";
import { allowAll, denyAll, allOperations } from "@keystone-6/core/access";

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  password,
  timestamp,
  checkbox,
  calendarDay,
  image,
  select,
  multiselect,
} from "@keystone-6/core/fields";

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from ".keystone/types";

export type Session = {
  itemId: string;
  data: {
    name: string;
    email: string;
    isAdmin: boolean;
  };
};

function hasSession({ session }: { session?: Session }) {
  return Boolean(session);
}

function isAdmin({ session }: { session?: Session }) {
  // you need to have a session to do this
  if (!session) return false;

  // admins can do anything
  if (session.data.isAdmin) return true;

  // otherwise, no
  return false;
}

function isAdminOrSameUser({
  session,
  item,
}: {
  session?: Session;
  item: Lists.User.Item;
}) {
  // you need to have a session to do this
  if (!session) return false;

  // admins can do anything
  if (session.data.isAdmin) return true;

  // the authenticated user needs to be equal to the user we are updating
  return session.itemId === item.id;
}
function isAdminOrSameUserFilter({ session }: { session?: Session }) {
  // you need to have a session to do this
  if (!session) return false;

  // admins can see everything
  if (session.data?.isAdmin) return {};

  // the authenticated user can only see themselves
  return {
    id: {
      equals: session.itemId,
    },
  };
}

export const lists: Lists = {
  User: list({
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: hasSession,
      },
      filter: {
        query: isAdminOrSameUserFilter,
      },
    },
    fields: {
      name: text(),
      email: text({ isIndexed: "unique" }),
      password: password({
        access: {
          read: denyAll, // TODO: is this required?
          update: isAdminOrSameUser,
        },
        validation: {
          isRequired: true,
        },
        ui: {
          itemView: {
            // don't show this field if it isn't relevant
            fieldMode: (args) => (isAdminOrSameUser(args) ? "edit" : "hidden"),
          },
          listView: {
            fieldMode: "hidden", // TODO: is this required?
          },
        },
      }),
      isAdmin: checkbox({
        access: {
          // only the respective user, or an admin can read this field
          read: isAdminOrSameUser,

          // only admins can create, or update this field
          create: isAdmin,
          update: isAdmin,
        },
        defaultValue: false,
        ui: {
          // only admins can edit this field
          createView: {
            fieldMode: (args) => (isAdmin(args) ? "edit" : "hidden"),
          },
          itemView: {
            fieldMode: (args) => (isAdmin(args) ? "edit" : "read"),
          },
        },
      }),
      createdAt: timestamp({
        ui: {
          createView: {
            fieldMode: "hidden",
          },
        },
        defaultValue: { kind: "now" },
      }),
    },
  }),
  Event: list({
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: allowAll,
      },
      filter: {},
    },
    fields: {
      cover: image({ storage: "events" }),
      name: text({ validation: { isRequired: true } }),
      date: calendarDay({
        validation: { isRequired: true },
      }),
      description: text({
        validation: { isRequired: false, length: { max: 280 } },
      }),
      eventWebsite: text({ validation: { isRequired: false } }),
      featured: checkbox({
        defaultValue: true,
        graphql: {
          isNonNull: {
            read: true,
            create: true,
          },
        },
      }),
      createdAt: timestamp({
        ui: {
          createView: {
            fieldMode: "hidden",
          },
        },
        defaultValue: { kind: "now" },
      }),
    },
  }),
  Location: list({
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: allowAll,
      },
      filter: {},
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text({ validation: { isRequired: true } }),
      zip: text({ validation: { isRequired: true } }),
      city: text({ validation: { isRequired: true } }),
      country: select({
        defaultValue: "pt",
        options: [{ label: "Portugal", value: "pt" }],
        validation: { isRequired: true },
      }),
      amenities: multiselect({
        type: "enum",
        options: [
          { label: "Parking", value: "parking" },
          { label: "Restaurants", value: "restaurants" },
          { label: "Gym", value: "gym" },
          { label: "Beach", value: "beach" },
        ],
      }),
    },
  }),
  Testimonial: list({
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: allowAll,
      },
      filter: {},
    },
    fields: {
      avatar: image({ storage: "testimonials" }),
      name: text({ validation: { isRequired: true } }),
      message: text({ validation: { isRequired: true } }),
      twitter: text({ validation: { isRequired: false } }),
      linkedin: text({ validation: { isRequired: false } }),
      createdAt: timestamp({
        ui: {
          createView: {
            fieldMode: "hidden",
          },
        },
        defaultValue: { kind: "now" },
      }),
    },
  }),
  // this last list is our Tag list, it only has a name field for now
  Type: list({
    access: allowAll,
    ui: {
      isHidden: true,
    },
    // this is the fields for our Tag list
    fields: {
      name: text(),
      // this can be helpful to find out all the Posts associated with a Tag
      // events: relationship({ ref: "Event.types", many: true }),
    },
  }),
};
