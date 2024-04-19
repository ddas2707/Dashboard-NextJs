import React from 'react'
import PricingCard from '@/app/components/PricingCard'
const Pricing = () => {
  return (
    <>
      <div className='w-[20%] my-4 py-2  border-l-2 bg-[#462B0A] rounded-xl text-[#D8C2A7] flex justify-center items-center'>
        Filter
      </div>
      <div className='grid grid-cols-2 px-6w' >
        {new Array(6).fill(0).map((element, index) => {
          return <PricingCard key={index} />
        })}
      </div>
    </>
  )
}

export default Pricing