import React from 'react'
import { cn } from '../lib/utils'

function WhiteBtn({className , children}) {
  return (
    <button className={cn('px-2.5 py-4 bg-white text-[12px] font-normal rounded-[6px] text-[#71717A] cursor-pointer',className)}>{children}</button>
  )
}

export default WhiteBtn