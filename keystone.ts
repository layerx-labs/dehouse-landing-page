// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core'
// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { session, withAuth } from './auth'
// to keep this file tidy, we define our schema in a different file
import { lists } from './schema'

import 'dotenv/config'

const {
  ASSET_BASE_URL: baseUrl = 'http://localhost:3000',
  DATABASE_URL:
    databaseUrl = 'postgresql://henrique@localhost:5433/henrique?schema=dehouse-cms',
  KEYSTONE_PORT: serverPort = '40000'
} = process.env

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: databaseUrl,
      onConnect: async (context) => {
        /* ... */
      },
      // Optional advanced configuration
      enableLogging: true,
      idField: { kind: 'uuid' },
    },
    lists,
    session,
    ui: {
      // only admins can view the AdminUI
      isAccessAllowed: ({ session }) => {
        return session?.data?.isAdmin ?? false
      },
    },
    server: {
      cors: {
        origin: "*",
        credentials: true,
      },
      port: parseInt(serverPort),
    },
    graphql: {
      debug: true,
      apolloConfig: {
           formatError: (err: any) => {
             console.error(err);
             delete err.extensions?.errors;
             delete err.extensions?.exception?.errors;
             delete err.extensions?.exception?.stacktrace;
             return err;
           },
      },
    },
    storage: {
      events: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `${baseUrl}/images/events/${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images/events'
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: 'public/images/events'
      },
      testimonials: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `${baseUrl}/images/testimonials/${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images/testimonials'
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: 'public/images/testimonials'
      },
      locations: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: (path) => `${baseUrl}/images/locations/${path}`,
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images/locations'
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: 'public/images/locations'
      }
    }
  })
)
