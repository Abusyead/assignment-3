import { useState } from 'react';
import { Container } from './Common/Container';
import DashMessage from './Common/DashMessage';
import Heroarea from './Common/Heroarea';
import { NavTitle } from './Common/NavTitle';
import { Navdis } from './Common/navdis';
import { Search } from './Common/Search';
import WhiteBtn from './Common/WhiteBtn';
import { Button } from './Common/Button';

function Dashboard() {
  const [ismessage, setIsMessage] = useState(false);
  const toggleMenu = () => setIsMessage((prev) => !prev);

  return (
    <section>
    <div className='bg-[#E4E4E780]'>
      <div className='max-w-[1300px] mx-auto px-2 py-5'>
          <div className='flex items-center justify-between'>
            <div>
              <Navdis>Welcome back</Navdis>
              <NavTitle>Dashboard</NavTitle>
              
            </div>
            <div className='flex justify-center items-center gap-[14px]'>
              <Search></Search>
              <WhiteBtn>Sort By: Date modified</WhiteBtn>
              <Button>Cypher AI</Button>

            </div>
          </div>
          
      </div>
    </div>
      <Container className="max-w-[1300px] h-[110vh] relative">
        <Heroarea />
        <div className="absolute bottom-25 right-0 flex flex-col gap-5 items-end">
          {ismessage && <DashMessage />}

            {!ismessage ? (
              <button
                className="font-bebas text-[55.2px] font-normal h-[77px] w-[77px] bg-orange flex items-center justify-center text-white cursor-pointer rounded-full"
                onClick={toggleMenu}
              >
                C
              </button>
            ) : (
              <button
                className="font-bebas text-[55.2px] cursor-pointer font-normal h-[77px] w-[77px] bg-orange flex items-center justify-center text-white rounded-full"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                &times;
              </button>
            )}
        </div>
      </Container>
    </section>
  );
}

export default Dashboard;
