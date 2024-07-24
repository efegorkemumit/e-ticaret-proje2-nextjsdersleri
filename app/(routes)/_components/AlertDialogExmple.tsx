'use client'

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'

  
const AlertDialogExmple = () => {

    const handleBildirim =()=>{
        console.log("Bildirim");
    }
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild> 
        <Button variant={'greenBtn'}><Bell/></Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Bildirimler </AlertDialogTitle>
        <AlertDialogDescription>
        Bildirimleri Açmak İstiyor musunuz
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleBildirim}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default AlertDialogExmple