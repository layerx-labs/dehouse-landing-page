import { gql } from '@apollo/client'

export const FEATURED_EVENTS_QUERY = gql`
  query EVENTS_QUERY($orderBy: [EventOrderByInput!]!, $where: EventWhereInput!, $take: Int) {
    events(orderBy: $orderBy, where: $where, take: $take) {
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
`

export const ALL_EVENTS_QUERY = gql`
  query EVENTS_QUERY($orderBy: [EventOrderByInput!]!, $skip: Int!, $where: EventWhereInput!) {
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
`