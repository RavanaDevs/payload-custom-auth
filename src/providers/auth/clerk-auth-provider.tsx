'use client'

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

export const ClerkAuthProvider: React.FC = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}
