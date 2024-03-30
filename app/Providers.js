"use client"

import { sessionProvider } from 'next-auth/react';

export const AuthProvider = ({ children }) => {
    return <sessionProvider>{children}</sessionProvider>
}