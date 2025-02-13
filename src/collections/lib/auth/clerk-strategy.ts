import { auth, currentUser } from '@clerk/nextjs/server'
import {
  AuthStrategy,
  AuthStrategyFunctionArgs,
  AuthStrategyResult,
  type Payload,
  User,
} from 'payload'

export async function getUser({ payload }: { payload: Payload }): Promise<User | null> {
  const { userId }: { userId: string | null } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    return null
  }

  const email = user.emailAddresses[0].emailAddress
  let loggedUser

  const findUserQuery = await payload.find({
    collection: 'users',
    where: {
      clerkuserId: {
        equals: userId,
      },
    },
  })

  if (findUserQuery.docs.length === 0) {
    loggedUser = await payload.create({
      collection: 'users',
      data: {
        clerkuserId: userId,
        email: email,
      },
    })
  } else {
    loggedUser = findUserQuery?.docs[0]
  }

  return {
    collection: 'users',
    ...loggedUser,
  }
}

async function authenticate({ payload }: AuthStrategyFunctionArgs): Promise<AuthStrategyResult> {
  const user = await getUser({ payload })

  console.log('Authenticating New user.', user)

  if (!user) {
    return { user: null }
  }

  return {
    user,
  }
}

export const ClerkAuthStrategy: AuthStrategy = {
  name: 'clerk-auth-strategy',
  authenticate,
}
