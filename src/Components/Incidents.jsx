import React from 'react'
import { Container } from './Common/Container'
import Heroarea from './Common/Heroarea'

import { NavTitle } from './Common/NavTitle';
import { Navdis } from './Common/navdis';
import { Search } from './Common/Search';
import WhiteBtn from './Common/WhiteBtn';
import { Button } from './Common/Button';
import { NavLink } from 'react-router-dom';

function Incidents() {
  return (
    <section>
        <div className='bg-[#E4E4E780]'>
          <div className='max-w-[1300px] mx-auto px-2 py-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <Navdis>Home - Incidents</Navdis>
                  <NavTitle>Incidents</NavTitle>
                  
                </div>
                <div className='flex justify-center items-center gap-[14px]'>
                  <Search></Search>
                  <WhiteBtn>Sort By: Date modified</WhiteBtn>
                   <NavLink to="NewIncident"><Button className="flex items-center justify-center gap-1 py-[10px]"><span className='text-[20px]'>+</span> New Incident</Button></NavLink>

                </div>
              </div>
              
          </div>
        </div>
        <Container className="max-w-[1300px]">
            <Heroarea />
        </Container>
    </section>
  )
}

export default Incidents