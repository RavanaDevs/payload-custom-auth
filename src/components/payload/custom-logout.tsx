'use client'

import { useClerk } from '@clerk/nextjs'

export const CustomLogout: React.FC = () => {
  const { signOut } = useClerk()
  const logout = async () => {
    await signOut()
  }
  return <button onClick={logout}>Logout</button>
}
