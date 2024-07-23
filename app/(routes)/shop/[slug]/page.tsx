import React from 'react'

interface ShopDetailPageProps{
    params: {
        slug:string
    }
}

const ShopDetailPage = ({params}:ShopDetailPageProps) => {
  return (
    <div>{params.slug}</div>
  )
}

export default ShopDetailPage