import React, { useState } from 'react';
import { Container } from './Common/Container'; 
import { cn } from './lib/utils';
import { navData } from './lib/db';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [Active, setActive] = useState(0);

    return (
        <section className="bg-primary relative">
            <Container className="max-w-[1269px]">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="img/logo.png" alt="Logo" />
                    </div>
                    <div className="relative">
                        <ul className="flex items-center justify-center gap-[35px] text-[14px] font-normal">
                            {navData.map((data, i) => (
                                <li key={i} onClick={() => setActive(i)}>
                                    <NavLink to={data.path} className={cn('text-gray', Active === i && "font-bold text-[#09090B]")}>
                                        {data.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="w-[574px] rounded-[50px] h-1 flex justify-center gap-[30px] items-center absolute bottom-[-25px] z-50">
                            {[...Array(6).keys()].map((el) => (
                                <div key={el} className={cn('w-[110px] h-[3px] rounded-[50px] bg-transparent', Active === el && "bg-[#09090B]")}></div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <div className="bg-[#FAFAFA] h-10 w-10 rounded-full flex items-center justify-center relative">
                            <div className="h-2.5 w-2.5 bg-[#4ADE80] absolute top-0 right-0 rounded-full"></div>
                            <img src="img/ball.svg" alt="Ball" />
                        </div>
                        <div>
                            <img src="img/profile.png" alt="Profile" />
                        </div>
                        <div className="text-gray">
                            <h2 className="text-4 font-semibold">Usman Zafar</h2>
                            <p className="text-[14px] font-normal">usmanzafar@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 bg-[#E4E4E7] top-16 right-0 h-[3px] w-full"></div> 
            </Container>
        </section>
    );
};
