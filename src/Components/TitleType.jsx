import React from 'react' 
import { Container } from './Common/Container'
import Incidenthead from './Common/incidenthead'
import { ImproveBar } from './Common/ImproveBar'
import WhiteBtn from './Common/WhiteBtn'
import { Button } from './Common/Button'
import { Link } from 'react-router-dom'; 

function TitleType() {
  return (
    <section>
        <div className='bg-[#E4E4E780]'>
            <Container className="py-7">
               <div className='flex items-center justify-between'>
                <Incidenthead />
                <div className='flex items-center justify-center bg-red-300'>
                    <ImproveBar />
                </div>
                
                <div className='flex items-center justify-center gap-2'>
                    <WhiteBtn className="px-7 py-2 font-normal">Back</WhiteBtn>
                     
                    <Link to="IncidentMap">
                        <Button className="px-5 py-2 font-normal">Next step</Button>
                    </Link>
                    
                </div>
               </div>         
            </Container>
        </div>
        <div className="max-w-[752px] mx-auto mt-7">
            <div>
                <h1 className="text-[26px] font-bold mb-[5px]">Let’s give the incident a title?</h1>
                <p className="mb-5 text-[14px] font-normal text-accent">Make a title that will easily identify the incidents</p>
                <input className="w-full bg-[#F4F4F5] h-[50px] px-4 font-normal text-[12px] rounded-[6px]" type="text" placeholder="Add title here" />
                <h1 className="text-[26px] font-bold mb-[5px] mt-10">Describe what happened during the incident?</h1>
                <p className="mb-5 text-[14px] font-normal text-[#71717A]">Share some information about the incident. The when, where, how.</p>
                <textarea className="w-full h-[127px] bg-[#F4F4F5] px-4 py-4 font-normal text-[12px] rounded-[6px] text-accent">Type here</textarea>
                
            </div>
        </div>
    </section>
  )
}

export default TitleType