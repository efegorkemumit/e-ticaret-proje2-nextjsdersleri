import React from 'react'

interface RoutesLayoutProps{
    children: React.ReactNode
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (

    <>
    Header

    {children}

    Footer
    
    </>
    
  )
}

export default RoutesLayout