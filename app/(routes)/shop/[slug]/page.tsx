import { categories } from '@/constans'
import React from 'react'

interface ShopDetailPageProps{
    params: {
        slug:string
    }
}

export async function generateMetadata({ params }: ProjectPageDetailProps) {
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

  const project = categories.find(product => product.href.includes(params.slug))

    if (!project) {
        return <div>project not found</div>
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': project.title,
        'image': project.image,
        'description': project.description,
        'datePublished': project.publishedAt,
        'dateModified': project.updatedAt,
        'author': {
            '@type': 'Person',
            'name': project.author
        },
        'offers': {
            '@type': 'Offer',
            'url': project.href,
            'price': '0.00',
            'priceCurrency': 'USD',
            'itemCondition': 'https://schema.org/NewCondition',
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '120'
        },
    };

  return (
    <div>
         <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
      
      {params.slug}</div>
  )
}

export default ShopDetailPage