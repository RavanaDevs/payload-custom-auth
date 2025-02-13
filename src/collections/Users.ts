import type { CollectionConfig } from 'payload'
import { ClerkAuthStrategy } from './lib/auth/clerk-strategy'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    disableLocalStrategy: true,
    strategies: [ClerkAuthStrategy],
  },
  fields: [
    {
      name: 'clerkuserId',
      type: 'text',
      unique: true,
      required: true,
      index: true,
    },
    {
      name: 'email',
      type: 'text',
      unique: true,
      required: true,
    },
  ],
}
