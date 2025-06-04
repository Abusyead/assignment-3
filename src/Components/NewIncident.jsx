import React from 'react'
import { Container } from './Common/Container' 
import { startData } from './lib/db'
import { Button } from './Common/Button'
import { Link } from 'react-router-dom'

function NewIncident() {
  return (
    <section>
        <div className='h-5 bg-[#E4E4E780]'></div>
        <Container className="max-w-[1300px] h-[669px]  flex items-center justify-center mt-20">
            <div className="flex items-center justify-center flex-col">
                <h1 className='text-[32px] font-bold text-[#09090B]'>Let’s get started</h1>
                <p className='text-[16px] font-normal mt-3 max-w-[468px] text-accent'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
                <div className='w-[598px] h-[3px] bg-[#E4E4E7] mt-10 flex justify-between items-center'>

                    {Array.from(Array(3).keys()).map((el) =>(
                        <div className='w-[29px] h-[29px] rounded-full bg-[#E4E4E7]'></div>
                    ))}
                </div>
                <div className="flex justify-between mt-12  gap-[55px]">
                    {startData.map((data , i) => (
                        <div key={i} className="max-w-[235px] rounded-[10px] py-[25px] px-5 bg-[#F4F4F5]">
                            <div className='mb-[68px]'>
                                <img src={data.img} alt="" />
                            </div>
                            
                            <div>
                                <h2 className='font-bold text-[20px] text-[#09090B] mb-1'>{data.h2}</h2>
                                <p className='font-normal text-[14px] text-[#71717A]'>{data.p}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="Describes">
                    <Button className="font-normal mt-25 px-8">Get started</Button> 
                </Link>
                 
            </div>
        </Container>
    </section>
  )
}

export default NewIncident