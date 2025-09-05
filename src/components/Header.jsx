import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {

    const navLinks = [
        {
            name: "home",
            number: "00",
            to: '/'
        },
        {
            name: "destination",
            number: "01",
            to: '/destination'
        },
        {
            name: "crew",
            number: "02",
            to: '/crew'
        },
        {
            name: "technology",
            number: "03",
            to: '/technology'
        }
    ]


    const [navOpened, setNavOpened] = useState(false)


    return (
        <nav className='relative flex flex-row justify-between items-center 
        md:p-0
        p-6 lg:pl-12 lg:pt-10'>
            <div className="icon grow flex flex-row lg:gap-18 items-center
            md:h-full md:flex md:justify-center
            ">
                <NavLink to='/'>
                    <img src="assets/shared/logo.svg" alt="" className='w-10 lg:w-14' />
                </NavLink>
                <div className="line h-px hidden lg:block lg:grow bg-white translate-x-6 relative z-10"></div>
            </div>
            <div className="list-btn md:hidden"
                onClick={() => {
                    setNavOpened(prev => prev === false ? true : false)
                }}
            >
                <img src="assets/shared/icon-hamburger.svg" alt="" className='w-8'
                />
            </div>
            <ul id='nav' className={`text-white ${navOpened ? 'right-[0%]' : '-right-full'}
            transition-[right] duration-300 bg-gray-900/85
            absolute flex items-start z-[999] top-0
            h-dvh flex-col w-4/5 gap-8 backdrop-blur-lg
            md:static md:gap-4 md:px-0
            md:flex md:flex-row lg:gap-14 md:pr-4 md:pl-8 md:items-center md:justify-between md:w-10/12 md:h-24
            lg:pl-24 lg:pr-16 lg:w-[unset]
            md:bg-white/5 md:backdrop-blur-md
              
              `}



            >
                <li className="close w-full flex justify-end p-6 md:hidden">
                    <img src="assets/shared/icon-close.svg" alt=""
                        className='w-8 md:hidden'
                        onClick={() => {
                            setNavOpened(false)
                        }}
                    />
                </li>
                {navLinks.map((link, indx) => {
                    return (
                        <li className='lg:h-full px-8 py-2 w-full md:w-[unset] select-none
                        md:px-2 md:py-0 md:h-full
                        ' key={indx}>
                            <NavLink to={link.to}
                                className='relative barlow-co text-lg uppercase font-light 
                                tracking-widest h-full flex justify-start items-center'
                                onClick={() => {
                                    setNavOpened(false)
                                }}

                            >
                                <span className='mx-2 barlow-co font-semibold'>{link.number}</span>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>



        </nav>
    )
}

export default Header