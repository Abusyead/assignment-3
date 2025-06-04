import React from 'react'

function Incidenthead() {
  return (
    <div className='flex gap-[12px] items-center'>
        <div className='h-[41px] w-[41px] flex justify-center items-center bg-[#FAFAFA] rounded-full border-[1px] border-[#E4E4E7]'>
            <h1 className='text-[25px]'>&times;</h1>
        </div>
        <div>
            <p className='text-[12px] font-normal text-[#71717A]'>Home - Incidents - New Incident</p>
            <h2 className='text-[#030712] font-bold text-[26px]'>New Incident</h2>
        </div>
    </div>
  )
}

export default Incidenthead