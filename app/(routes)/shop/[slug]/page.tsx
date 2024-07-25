import { categories } from '@/constans'
import React from 'react'

interface ShopDetailPageProps{
    params: {
        slug:string
    }
}

export async function generateMetadata({ params }: ShopDetailPageProps) {
  const project = categories.find(product => product.href.includes(params.slug))

  if (!project) {
      return <div>project not found</div>
  }

  return {
      title: project.title,
      description: project.description,
  }
}

const ShopDetailPage = ({params}:ShopDetailPageProps) => {

 

  return (
    <div>
     
      
      {params.slug}</div>
  )
}

export default ShopDetailPage