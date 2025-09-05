import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Crew = ({ allData }) => {

    useEffect(() => {
        document.body.className = 'crew'

        return () => {
            document.body.className = ''
        }
    }, [])




    const crewData = allData.crew

    const [current, setCurrent] = useState(0)

    const [currentCrew, setCurrentCrew] = useState(crewData[current])


    //todo> بعدين وقت الانيميشن
    // useEffect(() => {
    //     setCurrentCrew(crewData[current])
    // }, [current, crewData]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent(prev =>
    //             prev === crewData.length - 1 ? 0 : prev + 1
    //         );
    //     }, 2000);

    //     return () => clearInterval(interval); // cleanup
    // }, [crewData.length]);






    return (
        <main className='container grow mx-auto py-4 md:pb-0 flex flex-col'>
            <div className="title text-2xl barlow-co tracking-wider text-white 
            flex gap-2.5 font-light md:ml-4 md:justify-start justify-center mb-4">
                <span className='text-white opacity-50 font-semibold'>02</span>
                PICK YOUR CREW
            </div>

            <div className="box mt-4 flex flex-col-reverse
                            md:justify-end h-full
                            lg:flex-row-reverse items-center md:h-11/12 lg:h-[unset] lg:grow">
                <div className="image basis-1/2
                md:basis-3/4
                lg:basis-1/2
                flex justify-center items-end w-64">
                    <img key={currentCrew.name} id='crew-img' className='max-w-full w-64
                    mask-b-from-85% mask-b-to-100%
                        md:w-[200px] lg:w-[unset]
                    ' src={currentCrew.images.png} alt={`crew${current}`} />
                </div>
                <div className="basis-1/2 md:basis-1/4 lg:basis-1/2">
                    <div className="info text-white h-full justify-center px-3 lg:px-7
                     text-xl flex flex-col items-center gap-4
                     lg:gap-8 lg:items-start
                     ">

                        <div className="name text-xl lg:text-2xl bellefair uppercase text-white/50">
                            {currentCrew.role}
                        </div>
                        <div className="name lg:text-5xl text-3xl bellefair uppercase">
                            {currentCrew.name}
                        </div>
                        <p className='barlow text-lg barlow text-indigo-200 text-center lg:pr-10 h-40
                        md:min-h-[84px] md:h-[unset] lg:text-start
                        '>
                            {currentCrew.bio}
                        </p>

                        <ul className='flex gap-8 lg:gap-12'>
                            {crewData.map((mem, indx) => {
                                return (
                                    <li key={mem.name} className={`rounded-full ${indx === current ? 'bg-white ' : 'bg-white/30'}`} >
                                        <Link className='block w-5 h-5 md:w-3 md:h-3 cursor-pointer'
                                            onClick={() => {
                                                setCurrent(indx)
                                                setCurrentCrew(crewData[indx])
                                            }}
                                        >
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>

                    </div>
                </div >
            </div>



        </main >
    )
}

export default Crew