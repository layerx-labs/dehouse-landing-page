import { FEATURED_EVENTS_QUERY } from "@/graphql/queries";
import { getClient } from "@/lib/client";

async function getData() {
  const res = await getClient().query({
    query: FEATURED_EVENTS_QUERY,
    variables: {
      where: {},
      orderBy: [{ date: "desc" }],
      take: 2,
    },
  });

  return res.data.events;
}

export default async function Home() {
  const events = await getData();
  console.log(events);

  return (
    <main>
      <div>
        <h1>Events</h1>
        <ul>
          {events.map((event: any, index: number) => (
            <li key={index}>
              {event.name} - {event.cover.url}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
