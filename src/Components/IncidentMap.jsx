import React from 'react'
import { Container } from './Common/Container'
import Incidenthead from './Common/incidenthead'
import { ImproveBar } from './Common/ImproveBar'
import WhiteBtn from './Common/WhiteBtn'
import { Button } from './Common/Button'


export const IncidentMap = () => {
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
                     
                    <Button className="px-5 py-2 font-normal">Finished</Button>
                </div>
               </div>         
            </Container>
        </div>
        <div className="max-w-[752px] mx-auto mt-10"> 
              <h1 className="text-[26px] font-bold mb-[5px]">Where’s the incident?</h1>
              <p className="mb-5 text-[14px] font-normal text-accent">Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
              <div className="w-full h-[490px] overflow-hidden bg-red-400">
                    <iframe className='w-full h-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35667.54204857928!2d90.37571997329377!3d24.748522316278706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e1!3m2!1sen!2sbd!4v1749102136715!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
        </div>
      </section>  
  )
}
