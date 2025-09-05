import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {

    const paragraph = 'Let’s face it; if you want to go to space,you might as well genuinely go to outer space and not hover kind ofon the edge of it.Well sit back,and relax because we’ll give you a truly out of this world experience!'
    const [par, Setpar] = useState('')
    const parArr = paragraph.split('')

    useEffect(() => {
        Setpar('')
        const timeouts = []

        parArr.forEach((letter, indx) => {
            const timeout = setTimeout(() => {
                Setpar(prev => prev + letter)
            }, indx * 20);
            timeouts.push(timeout)
        })

        return () => timeouts.forEach(t => clearTimeout(t))
    }, [])


    return (
        <main className='overflow-hidden lg:container mx-auto px-4 lg:px-20 flex  lg:items-center justify-center grow'>
            <div className='home-container flex flex-col lg:flex-row items-center justify-start mt-16 lg:items-end grow
                            lg:justify-between
            '>
                <div className='space items-center flex flex-col gap-10 basis-2/4 lg:items-start'>
                    <p className='text-blue-200 text-2xl lg:text-2xl barlow-co tracking-wider '>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className='text-white text-8xl lg:text-9xl bellefair text-shadow-lg/75 text-shadow-sky-950 '>SPACE</h1>
                    <p className='text-blue-200 text-lg barlow min-h-[112px] text-center lg:text-start'>
                        {par}
                    </p>

                </div>
                <div className="explore flex grow lg:grow-0 justify-center items-center p-5">
                    <Link to='/destination' className=' h-20 w-20 p-20
                    lg:w-32 lg:h-32 lg:p-32 
                    text-gray-950 bg-white rounded-full uppercase 
                      text-xl lg:text-4xl bellefair flex justify-center items-center
                    hover:ring-white/15 hover:ring-[20px] hover:text-gray-600
                    active:scale-95 hover:before:animate-none
                    transition-all duration-300 relative
                     before:absolute before:-z-10  bafore:content[""] 
                     before:w-32 before:h-32 
                     lg:before:w-42 lg:before:h-42 
                     before:animate-[ping_2.5s_infinite] before:rounded-full before:bg-white
                    '>
                        explore
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home