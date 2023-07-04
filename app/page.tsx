import {
  FEATURED_EVENTS_QUERY,
  LOCATIONS_QUERY,
  TESTIMONIALS_QUERY,
} from "@/graphql/queries";
import { getClient } from "@/lib/client";

async function getData() {
  const featuredEvents = await getClient().query({
    query: FEATURED_EVENTS_QUERY,
    variables: {
      where: {
        featured: {
          equals: true,
        },
      },
      orderBy: [{ date: "asc" }],
    },
  });

  const locations = await getClient().query({
    query: LOCATIONS_QUERY,
    variables: {
      where: {
        featured: {
          equals: true,
        },
      },
      orderBy: [{ date: "asc" }],
    },
  });

  const testimonials = await getClient().query({
    query: TESTIMONIALS_QUERY,
  });

  return {
    events: featuredEvents.data.events,
    locations: locations.data.locations,
    testimonials: testimonials.data.testimonials,
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <div>
        <h1>Events</h1>
        <ul>
          {data.events.map((event: any, index: number) => (
            <li key={index}>
              {event.name} - {event.cover.url}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Locations</h1>
        <ul>
          {data.locations.map((location: any, index: number) => (
            <li key={index}>
              {location.name} - {location.city}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Testimonials</h1>
        <ul>
          {data.testimonials.map((testimonial: any, index: number) => (
            <li key={index}>
              {testimonial.name} - {testimonial.message}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
