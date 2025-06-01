import { cn } from '../lib/utils'


export const Container = ({className , children}) => {
  return (
    <div className={cn("max-w-[1300px] p-2.5 mx-auto w-full font-onest",className)}>
      {children}
    </div>
  )
}
