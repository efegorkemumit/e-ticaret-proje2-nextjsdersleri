'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

const SearchPage = () => {

    const searchParams = useSearchParams();

    
  return (
    <div>
        {searchParams.get("query")}
    </div>
  )
}

export default SearchPage