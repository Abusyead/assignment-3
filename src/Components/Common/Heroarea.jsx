import React from 'react'
import { Dashdata } from '../lib/db'

function Heroarea() {
  return (
    <div className='grid grid-cols-4 gap-[25px] mt-4'>
        {Dashdata.map((data , i) => (
            <div key={i}>
            <div className='relative'>
                <img src={data.img} alt="" />
                <div className="absolute top-2.5 right-2.5 bg-white flex p-2.5 gap-[5px] rounded-[40px]">
                <img className='h-4 w-4' src={data.btnImg} alt="" />
                <h4 className='text-bold text-[12px]'>{data.btnText}</h4>
                </div>
            </div>
            <div className="space-y-1 mt-2">
                <h2 className='text-bla font-bold text-[16px]'>{data.title}</h2>
                <p className="text-accent font-normal text-[14px]">{data.para}</p>
                <h3 className='text-bla font-bold text-[16px]'>{data.taka}</h3>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Heroarea