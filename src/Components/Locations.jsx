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
            <div className="flex justify-between ">
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
                        <div className='flex flex-col gap-[20px]'>
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
                        <div className='flex flex-col gap-[20px]'>
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
                <div className='w-[526px] h-[503px]'>
                    <h3 className='font-normal text-[14px] text-accent mb-[10px] '>Incident Map</h3>
                    <div className='w-full h-[100%]'>
                        <iframe className='w-full h-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142519.2633769426!2d90.31391879495162!3d24.74846222288074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e1!3m2!1sen!2sbd!4v1749138095444!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <h3 className='font-normal mt-[10px] text-[14px] text-accent'>Start 19.1232, -118.233     End 19.3245, -119.2323</h3>
                </div>
            </div>
        </Container>
        
    </section>
  )
}

export default Locations