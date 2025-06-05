 import WhiteBtn from './Common/WhiteBtn'
import { Button } from './Common/Button'
import { Link } from 'react-router-dom'
import { Navdis } from './Common/navdis'
import { NavTitle } from './Common/NavTitle'
import { Search } from './Common/Search'
import { Container } from './Common/Container'
import { locaCardData, LocationData } from './lib/db'
import { LocationActivitiesData } from './lib/db'

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
        <Container className="mt-7">
            <div className="flex justify-between">
                <div className='max-w-[680px] w-full'>
                    <div className='flex  flex-col gap-4 mb-10'>
                        {LocationData.map((data , i)=>(
                            <div className='flex items-center gap-5' key={i}>
                                <div className='h-[37px] w-[37px] bg-[#F4F4F5] flex justify-center items-center rounded-full' >
                                    <img className="h-[19] w-[19]" src={data.img} alt="" />
                                </div>
                                
                                <div className=''>
                                    <p className='font-normal text-[14px] text-[#6B7280]'>{data.p}</p>
                                    <h2 className='font-bold text-[20px]'>{data.h2}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='py-10 border-t-[1px] border-b-[1px] border-[#E4E4E7]'>
                        <h2 className='text-[14px] font-bold'>Description</h2>
                        <p className='text-[15px] text-[#71717A] font-normal '>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                    </div>
                    <div className='grid grid-cols-3 gap-[19.5px] mb-10'>
                        {locaCardData.map((data , i) => (
                            <div key={i}>
                            <div className='relative'>
                                <img src={data.img} alt="" />
                                <div className="absolute top-2.5 right-3 bg-white flex p-2.5 gap-[5px] rounded-[40px]">
                                <img className='h-4 w-4' src={data.btnImg} alt="" />
                                <h4 className='text-bold text-[12px]'>{data.btnText}</h4>
                                </div>
                            </div>
                            <div className="space-y-1 mt-2">
                                <h2 className='text-bla font-bold text-[16px]'>{data.title}</h2>
                                <p className="text-accent font-normal text-[14px]">{data.para}</p>
                                <h3 className='text-bla font-bold text-[16px]'>{data.taka}</h3>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className='border-y-[1px] py-10 border-[#E4E4E7]'>
                        <div className='flex justify-between items-center mb-[15px]'>
                            <h2 className='font-bold text-[14px]'>Activites</h2>
                            <p className='font-normal text-[14px]   border-b-[1px] border-[#0A0A0A]'>see all</p>
                        </div>
                        <div className='flex flex-col'>
                            {LocationActivitiesData.map((data , i) => (
                                <div className="flex items-center justify-start px-[10px] w-full h-[108px] bg-[#F4F4F5] py-[15px] gap-[17px] rounded-[10px]" key={i}>
                                    <img className="size-[78px] rounded-[10px]" src={data.img} alt="" />
                                    <div className='flex items-start justify-center gap-[5px] flex-col'>
                                        <h2 className='font-bold text-[16px] text-[#09090B]'>{data.h2}</h2>
                                        <p className='font-normal text-[14px] text-accent'>{data.p}</p>
                                        <h2 className='font-bold text-[16px] text-[#09090B]'>{data.h1}</h2>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                    <div className='border-t-[1px] py-10 border-[#E4E4E7]'>
                        <div className='flex justify-between items-center mb-[15px]'>
                            <h2 className='font-bold text-[14px]'>Documents</h2>
                            <p className='font-normal text-[14px]   border-b-[1px] border-[#0A0A0A]'>see all</p>
                        </div>
                        <div className='flex flex-col'>
                            {LocationActivitiesData.map((data , i) => (
                                <div className="flex items-center justify-start px-[10px] w-full h-[108px] bg-[#F4F4F5] py-[15px] gap-[17px] rounded-[10px]" key={i}>
                                    <img className="size-[78px] rounded-[10px]" src={data.img} alt="" />
                                    <div className='flex items-start justify-center gap-[5px] flex-col'>
                                        <h2 className='font-bold text-[16px] text-[#09090B]'>{data.h2}</h2>
                                        <p className='font-normal text-[14px] text-accent'>{data.p}</p>
                                        <h2 className='font-bold text-[16px] text-[#09090B]'>{data.h1}</h2>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </Container>
        
    </section>
  )
}

export default Locations