 import WhiteBtn from './Common/WhiteBtn'
import { Button } from './Common/Button'
import { Link } from 'react-router-dom'
import { Navdis } from './Common/navdis'
import { NavTitle } from './Common/NavTitle'
import { Search } from './Common/Search'

function Locations() {
  return (
    <section>
        <div className='bg-[#E4E4E780]'>
           <div className='max-w-[1300px] mx-auto px-2 py-5'>
                <div className='flex items-center justify-between'>
                    <div>
                    <Navdis>Incidents - DR-4699 March 2023 Severe Storms </Navdis>
                    <NavTitle>DR-4699 March 2023 Severe Storms</NavTitle> 
                    </div>
                    <div className='flex justify-center items-center gap-[14px]'>
                        <Search></Search>
                        <WhiteBtn>Sort By: Date modified</WhiteBtn>
                        <Link to="NewIncident"><Button className="flex items-center justify-center gap-1 py-[10px]"><span className='text-[20px]'>+</span> New Location</Button></Link>
                    </div>
                </div>
           </div>
        </div>
        
    </section>
  )
}

export default Locations