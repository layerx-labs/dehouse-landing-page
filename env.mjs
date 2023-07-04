import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

import 'dotenv/config'

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    KEYSTONE_API_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    KEYSTONE_API_URL: process.env.KEYSTONE_API_URL,
  },
})
