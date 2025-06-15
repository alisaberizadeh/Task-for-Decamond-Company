"use client"
import React, { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AuthProvider } from '@/context/AuthContext';


function MainLayout(props: { children: React.ReactNode }) {

 
  return (

      <AuthProvider>
        {props.children}
      </AuthProvider>

  )
}

export default MainLayout