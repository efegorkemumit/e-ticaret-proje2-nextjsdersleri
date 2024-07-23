import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { categories } from '@/constans'
import Link from 'next/link'

const MobileMenu = () => {
    return (
        <div className='flex md:hidden'>
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className=' '>
                <div className='flex flex-col mt-8 space-y-6'>

                {categories.map((component) => (
                    <Link
                        key={component.title}
                        href={component.href}
                    >
                        {component.title}
                    </Link>
                ))}
                </div>
            </SheetContent>
        </Sheet>
        </div>
    )
}

export default MobileMenu