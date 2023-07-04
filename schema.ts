// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { list } from '@keystone-6/core';
import { allowAll, denyAll, allOperations } from '@keystone-6/core/access';

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
  calendarDay,
  image,
} from '@keystone-6/core/fields';

import { statelessSessions, } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import type { Lists } from '.keystone/types';

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

function isAdminOrSameUser({ session, item }: { session?: Session; item: Lists.User.Item }) {
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
      email: text({ isIndexed: 'unique'}),
      password:  password({
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
            fieldMode: args => (isAdminOrSameUser(args) ? 'edit' : 'hidden'),
          },
          listView: {
            fieldMode: 'hidden', // TODO: is this required?
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
            fieldMode: args => (isAdmin(args) ? 'edit' : 'hidden'),
          },
          itemView: {
            fieldMode: args => (isAdmin(args) ? 'edit' : 'read'),
          },
        },
      }),
      createdAt: timestamp({
        ui:{
          createView: {
            fieldMode: 'hidden',
          }
        } ,
        defaultValue: { kind: "now" }
      } )
    },
  }),
  Event: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: {
      operation: {
        ...allOperations(isAdmin),
        query: allowAll,
      },
      filter: {},
    },

    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      cover: image({ storage: 'my_local_images' }),
      name: text({ validation: { isRequired: true } }),
      // slug: text({
      //   isIndexed: "unique",
      //   validation: { isRequired: true , }
      // }),
      date: calendarDay({
        validation: { isRequired: true },
      }),
      description: text({ validation: { isRequired: false, length: { max: 280 } } }),
      eventWebsite: text({ validation: { isRequired: false } }),
      // types: relationship({
      //   // we could have used 'Tag', but then the relationship would only be 1-way
      //   ref: "Type.events",

      //   // a Post can have many Tags, not just one
      //   many: true,

      //   // this is some customisations for changing how this will look in the AdminUI
      //   ui: {
      //     displayMode: "cards",
      //     cardFields: ["name"],
      //     inlineEdit: { fields: ["name"] },
      //     linkToItem: true,
      //     inlineConnect: true,
      //     inlineCreate: { fields: ["name"] },
      //   },
      // }),

      createdAt: timestamp({
        ui:{
          createView: {
            fieldMode: 'hidden',
          }
        } ,
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" },
      }),
    },
  }),
   // this last list is our Tag list, it only has a name field for now
   Type: list({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,

    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
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
