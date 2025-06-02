import React, { useState } from 'react';
import { Container } from './Common/Container';
import { navData } from './lib/db';
import { cn } from './lib/utils';
import { NavLink } from 'react-router-dom';
import { Button } from './Common/Button';

export const Navbar = () => {
    const [Active, setActive] = useState(0); // Defaulting to first index to prevent errors
    const activeSearch = navData[Active] ?? {}; // Safely accessing data

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
                        <div className="w-[574px] rounded-[50px] h-1 flex justify-center gap-[30px] items-center absolute bottom-[-22px] z-50">
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

                <div className="absolute left-0 bg-[#E4E4E7] top-18 right-0 h-[3px] w-full"></div>

                <div className="mt-10 flex justify-between items-center">
                    <div>
                        <h4 className="text-[12px] font-normal text-[#71717A]">{activeSearch?.navSearch?.title ?? ""}</h4>
                        <h2 className="text-[26px] font-bold text-[#09090B]">{activeSearch?.navSearch?.navNam ?? ""}</h2>
                    </div>

                    <div className='flex justify-center items-center gap-[14px] '>
                        {activeSearch?.navSearch?.search && (
                            <div className='flex items-center bg-white justify-start gap-5 rounded-[6px] py-4 px-2.5'>
                                <img src="img/search.svg" alt="Search Icon" />
                                <input type="text" className='text-[12px] font-normal text-[#71717A]' placeholder={activeSearch.navSearch.search} />
                            </div>
                        )}
                        {activeSearch?.navSearch?.sort && <button className='px-2.5 py-4 bg-white text-[12px] font-normal rounded-[6px] text-[#71717A] cursor-pointer'>{activeSearch.navSearch.sort}</button>}
                        {activeSearch?.navSearch?.btn && <Button className="py-[11px] text-white cursor-pointer">{activeSearch.navSearch.btn}</Button>}
                    </div>
                </div>
            </Container>
        </section>
    );
};
