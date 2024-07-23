import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ShoppingBagIcon } from 'lucide-react'
import { categories } from '@/constans'
import Link from 'next/link'


const CartMenu = () => {
  return (
    <Sheet>
    <SheetTrigger>
        <ShoppingBagIcon />
    </SheetTrigger>
    <SheetContent className=' '>
        <div className='flex flex-col mt-8 space-y-6'>

        Empty Cart
        </div>
    </SheetContent>
</Sheet>
  )
}

export default CartMenu