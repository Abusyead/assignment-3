import React from 'react'
import { cn } from '../lib/utils'

export const Navdis = ({className , children}) => {
  return (
    <h1 className={cn('text-[12px] font-normal text-[#71717A]', className)} >{children}</h1>
  )
}
