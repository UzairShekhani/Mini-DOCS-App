import React, { useRef, useState } from 'react'
import Cards from './cards'


function foreground() {

    const ref = useRef(null)

    const data = [
        {
         desc: "this is the background color of the card that will be displayed."
        ,filesize: ".9mb"
        , close: false
        , Tag: {isOpen: true, tagTittle: "Download Now", tagColor: "green"}
        },
        {
            desc: "this is the background color of the card that will be displayed."
           ,filesize: ".9mb"
           , close: false
           , Tag: {isOpen: true, tagTittle: "Download Now", tagColor: "blue"}
           },
           {
            desc: "this is the background color of the card that will be displayed."
           ,filesize: ".9mb"
           , close: false
           , Tag: {isOpen: true, tagTittle: "upload", tagColor: "blue"}
           },
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default foreground