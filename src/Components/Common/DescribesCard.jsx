import React, { useState } from 'react'
import { Container } from './Container' 
import { descData } from '../lib/db/descData'


export const DescribesCard = () => {
    const [activeIndex , setactiveIndex] = useState(null)
  return (
    <section className='mt-5'>
        <Container className="max-w-[800px]">
            <div className="grid grid-cols-4 gap-[11px]" >
                {descData.map((data , i) =>(
                    <div style={{backgroundColor: activeIndex === i ? "#F26922" : "#F4F4F5", color:activeIndex === i ? "white" : "black"}} className=' border-1 border-[#E4E4E7] flex items-center justify-center gap-[10px] w-[190px] h-[69px] py-[22px] px-5 rounded-[6px]' onClick={() => setactiveIndex(i)} key={i}>
                        <img className='h-[25px] w-25px' src={data.img} alt="" />
                        <p className='text-[14px] font-normal'>{data.p}</p>                        

                    </div>
                ))}

                <img src="describes1" alt="" />
            </div>
        </Container>
    </section>
  )
}
