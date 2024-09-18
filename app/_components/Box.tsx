import React from 'react'

function Box({arr} : {
    arr : string[]
}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'> 
        {arr.map((str) => (
            <div className='bg-tertiary/30 text-text grid place-items-center py-4 px-1 lg:py-4  lg:text-base lg:hover:text-2xl lg:hover:font-bold lg:transition-all text-sm rounded-md cursor-default'>{str}</div>
        ))}
        </div>
  )
}

export default Box
