import React from 'react'
import { Container } from './Common/Container'
import Incidenthead from './Common/incidenthead'
import { ImproveBar } from './Common/ImproveBar'
import WhiteBtn from './Common/WhiteBtn'
import { Button } from './Common/Button'
import { DescribesCard } from './Common/DescribesCard'

function Describes() {
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
                    <Button className="px-5 py-2 font-normal">Next step</Button>
                </div>
            </div>         
         </Container>   
      </div>
      <DescribesCard></DescribesCard>
    </section>
  )
}

export default Describes