import { cn } from "../lib/utils"
export const Button = ({className , children }) => {
  return (
    <button className={cn('text-white cursor-pointer py-[14px] px-[25px] font-bold text-[12px] rounded-[6px] bg-orange',className)}>{children}</button>
  )
}
