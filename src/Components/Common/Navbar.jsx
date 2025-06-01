import React, { useState } from 'react'
import { Container } from './Container'
import { navData } from '../lib/db'
import { cn } from '../lib/utils'

export const Navbar = () => {
    const [Active , setActive] = useState(1)
  return (
    <section className="bg-primary relative">
        <Container className="max-w-[1269px]">
        <div className='flex justify-between items-center'>
            <div>
                <img src="img/logo.png" alt="" />
            </div>
            <div className="relative">
                <div className="flex items-center justify-center gap-[35px] text-[14px] font-normal">
                    {navData.map((data ,i )=>(
                        <a  key={i} onClick={() => setActive(i)} href={data.link}>
                            <p className={cn('text-gray' , Active == i && "font-bold text-[#09090B]")}>{data.nav}</p>
                        </a>
                    ))}
                </div>
                <div className='w-[574px]   rounded-[50px] h-1 flex justify-center gap-[30px] items-center absolute bottom-[-22px] z-50'>
                    {
                        Array.from(Array(6).keys()).map((el) =>(
                           <div className={cn(' w-[110px] h-[3px] rounded-[50px] bg-transparent' , Active == el && "bg-[#09090B] ")}></div>
                        ))}
                </div>
            </div>
            
            
            <div className='flex justify-center items-center gap-3'>
                <div className='bg-[#FAFAFA] h-10 w-10 rounded-full flex items-center justify-center relative'>
                    <div className='h-2.5 w-2.5 bg-[#4ADE80] absolute top-0 right-0 rounded-full'></div>
                    <img src="img/ball.svg" alt="" />
                </div>
                <div>
                    <img src="img/profile.png" alt="" />
                </div>
                <div className='text-gray'>
                    <h2 className=" text-4 font-semibold">Usman Zafar</h2>
                    <p className='text-[14px] font-normal'>usmanzafar@gmail.com</p>
                </div>
            </div>
        </div>
        </Container>
        <div className="absolute left-0 bg-[#E4E4E7] bottom-0 right-0 h-[3px] w-full"></div>
    </section>
  )
}
