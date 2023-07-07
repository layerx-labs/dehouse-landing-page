import { gql } from "@apollo/client";

export const FEATURED_EVENTS_QUERY = gql`
  query FEATURED_EVENTS_QUERY(
    $orderBy: [EventOrderByInput!]!
    $where: EventWhereInput!
  ) {
    events(orderBy: $orderBy, where: $where) {
      id
      cover {
        id
        url
        width
        height
      }
      name
      date
      description
      eventWebsite
    }
  }
`;

export const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY(
    $orderBy: [EventOrderByInput!]!
    $skip: Int!
    $where: EventWhereInput!
  ) {
    events(orderBy: $orderBy, skip: $skip, where: $where) {
      id
      cover {
        id
        url
        width
        height
      }
      name
      date
      description
      eventWebsite
    }
  }
`;

export const CITIES_QUERY = gql`
  query CITIES_QUERY {
    locations {
      city
    }
  }
`;

export const LOCATIONS_QUERY = gql`
  query LOCATIONS_QUERY {
    locations {
      id
      cover {
        id
        url
        width
        height
      }
      name
      address
      zip
      city
      country
      description
      amenities
    }
  }
`;

export const TESTIMONIALS_QUERY = gql`
  query TESTIMONIALS_QUERY {
    testimonials {
      id
      avatar {
        url
      }
      name
      message
      twitter
      linkedin
    }
  }
`;
