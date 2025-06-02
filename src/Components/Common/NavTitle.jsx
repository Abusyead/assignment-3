import { cn } from "../lib/utils"
export const NavTitle = ({className , children}) => {
  return (
      
        <h2 className={cn("text-[26px] font-bold text-[#09090B]", className)}>{children}</h2>
     
  )
}
