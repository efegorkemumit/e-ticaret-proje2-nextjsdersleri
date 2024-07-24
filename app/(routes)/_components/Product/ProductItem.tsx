import { ProductType } from '@/constans'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProductItemProps {
    product: ProductType
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                alt={product.title}
                className='w-full h-56 object-cover mb-4 rounded-xl'
                width={500}
                height={500}
                src={product.image}
                />
                <div className='flex justify-between items-center'>
                    <span>${product.price}</span>
                    <span className='line-through'>${product.mrp}</span>

                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
            <Button variant="destructive">Detail</Button>
            <Button variant="default">Add To Cart</Button>

            </CardFooter>
        </Card>
    )
}

export default ProductItem