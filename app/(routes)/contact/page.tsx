import React from 'react'
import AccordionExample from '../_components/AccordionExample'
import AlertDialogExmple from '../_components/AlertDialogExmple'

const ContactPage = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className='flex flex-row items-center justify-center'>
        <div className='w-full md:w-1/2'>
     <AlertDialogExmple/>
        </div>


        <div className='w-full md:w-1/2'>
        <AccordionExample/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage