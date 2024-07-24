import React from 'react'
import Header from './_components/Menu/Header'
import Footer from './_components/Footer'

interface RoutesLayoutProps{
    children: React.ReactNode
}

const RoutesLayout = ({children}:RoutesLayoutProps) => {
  return (

    <>
    <Header/>

<div className='min-h-screen'>
{children}
</div>
 

    <Footer/>
    
    </>
    
  )
}

export default RoutesLayout