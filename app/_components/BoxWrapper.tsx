import React from 'react'
import Box from './Box'

function BoxWrapper({arr , heading} : {
    arr : string[],
    heading : string
}) {
    
  return (
    <div className=' rounded-md p-4 gap-4 w-full flex flex-col justify-center items-start'>
        <h1 className='text-lg text-text2 font-bold'>{heading}</h1>
        <Box arr={arr}/>
      </div>
  )
}

export default BoxWrapper
