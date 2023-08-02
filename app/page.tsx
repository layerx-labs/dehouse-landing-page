import { headers } from "next/headers";
import { Metadata } from 'next'
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Benefits from "@/components/benefits";
import Locations from "@/components/locations";
import Events from "@/components/events";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import { getClient } from "@/lib/client";
import {
  FEATURED_EVENTS_QUERY,
  CITIES_QUERY,
  LOCATIONS_QUERY,
  TESTIMONIALS_QUERY,
} from "@/graphql/queries";

const title = "DeHouse - Decentralized Coworking Spaces";
const description = "Embrace the future of work with our decentralized co-working spaces, exclusively designed for tech companies in Porto and Braga";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    type: 'website',
    locale: 'en-US',
    url: "https://dehouse.org",
    description,
    siteName: title,
    images: [
      {
        url: "https://dehouse.org/dehouse-og.jpg",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    title,    
    card: 'summary_large_image',
    description: description,
    images: ["https://dehouse.org/dehouse-og.jpg"],
    creator: "https://twitter.com/DeHouseDAO",
    site: '@DeHouseDAO'
  },
  robots: {
    index: true
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg" }],
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: 'DeHouse', url: 'https://dehouse.org' }],
  manifest: 'https://dehouse.org/manifest.webmanifest'
}

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

  const cities = await getClient().query({
    query: CITIES_QUERY,
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
    variables: {
      where: {
        featured: {
          equals: true,
        },
      },
      orderBy: [{ createdAt: "asc" }],
    },
  });

  return {
    events: featuredEvents.data.events,
    cities: cities.data.locations,
    locations: locations.data.locations,
    testimonials: testimonials.data.testimonials,
  };
}





export default async function Home() {
  const headersList = headers();
  const data = await getData();
  const referer = headersList.get("referer");

  return (
    <main>
      <Nav />
      <Hero cities={data.cities} />
      <Services />
      <Benefits />
      <Locations locations={data.locations} />
      <Events events={data.events} />
      <Partners />
      <Testimonials testimonials={data.testimonials} />
      <Footer />
    </main>
  );
}
