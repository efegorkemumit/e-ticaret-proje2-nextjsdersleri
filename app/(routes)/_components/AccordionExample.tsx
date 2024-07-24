import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { sssList } from '@/constans'


const AccordionExample = () => {
  return (
    <Accordion type="single" collapsible className="w-full">

        {sssList.map((item, index)=>(
 <AccordionItem value={item.id} key={index}>
 <AccordionTrigger>{item.title}</AccordionTrigger>
 <AccordionContent>
 {item.description}
 </AccordionContent>
</AccordionItem>

        ))}
     
    </Accordion>
  )
}

export default AccordionExample