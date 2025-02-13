'use client'
import { useClerk } from '@clerk/nextjs'
import { MinimalTemplate } from '@payloadcms/next/templates'
import { useEffect } from 'react'

export const CustomLogoutView: React.FC = () => {
  const { signOut } = useClerk()
  const logout = async () => {
    await signOut({ redirectUrl: '/' })
  }

  useEffect(() => {
    logout()
  })

  return (
    <MinimalTemplate>
      <p>Logging Out...</p>
    </MinimalTemplate>
  )
}
