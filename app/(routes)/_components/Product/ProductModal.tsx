'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { ProductType } from '@/constans'
import { Input } from '@/components/ui/input'

interface ProductModalProps {
    product: ProductType;
}


const ProductModal = ({ product }: ProductModalProps) => {

    const [quantity, setQuantity] = useState(1);

    const handleInc=()=>{
        setQuantity(quantity+1)

    }

    const handleDec=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
        
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Detail</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[900px]'>
                <div className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className=''>
                            <Image
                                alt={product.title}
                                className='w-full h-96 object-cover mb-4 rounded-xl'
                                width={500}
                                height={500}
                                src={product.image}
                            />

                        </div>
                        <div className='p-4'>
                            <h2 className='text-4xl font-semibold'>{product.title}</h2>
                            <p className='mt-5 font-light'>{product.description}

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque eos ullam laudantium? Enim exercitationem officia voluptatem asperiores delectus, accusamus ex minus expedita et aliquid.

                            </p>

                            <div className='flex mt-8 justify-between items-center'>
                                <span>${product.price}</span>
                                <span className='line-through'>${product.mrp}</span>

                            </div>

                            <div className='mt-8'>
                            <div className='flex flex-row items-center gap-4'>
                                <Button onClick={handleDec} variant={'destructive'} size={'icon'}>-</Button>
                                {quantity}
                                <Button onClick={handleInc} variant={'destructive'} size={'icon'}>+</Button>

                            </div>
                        </div>



                        </div>

                       
                    </div>




                </div>

                <DialogFooter >

                    <Button type="submit">Add To Cart</Button>
                </DialogFooter>
            </DialogContent>


        </Dialog>

    )
}

export default ProductModal