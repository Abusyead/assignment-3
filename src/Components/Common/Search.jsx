import React from 'react'

export const Search = () => {
  return (
    <div className='flex items-center bg-white justify-start gap-2 rounded-[6px] py-4 px-2.5'>
        <img src="img/search.svg" alt="Search Icon" />
        <input type="text" className='text-[12px] font-normal text-[#71717A] ' placeholder="Search incident" />
    </div>
  )
}
