import { cn } from "../lib/utils"
export const Button = ({className , children }) => {
  return (
    <button className={cn('py-[8px] px-[25px] rounded-[6px] bg-orange',className)}>{children}</button>
  )
}
