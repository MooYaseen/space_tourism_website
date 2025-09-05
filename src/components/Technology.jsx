import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Technology = ({ allData }) => {

  useEffect(() => {
    document.body.className = 'technology'

    return () => {
      document.body.className = ''
    }
  }, [])


  const techData = allData.technology


  const [current, setCurrent] = useState(0)
  const [currentTech, setCurrentTech] = useState(techData[current])

  console.log(currentTech)

  useEffect(() => {

    setCurrentTech(techData[current])

  }, [current, techData])



  return (
    <main className='container grow mx-auto py-4 flex flex-col'>
      <div className="title text-2xl barlow-co tracking-wider text-white flex
       gap-2.5 font-light md:ml-10 md:justify-start justify-center mb-4">
        <span className='text-white opacity-50 font-semibold'>03</span>
        SPACE LAUNCH 101
      </div>

      <div className="content lg:pl-4 flex flex-col justify-evenly lg:flex-row-reverse grow items-center md:gap-4">

        <img className='tech-img lg:w-1/3 w-full md:h-[unset] h-[200px] lg:hidden'
          src={currentTech.images.landscape} alt={currentTech.name}
        />
        <img className='tech-img lg:w-1/3 w-full md:h-[unset] h-[200px] hidden lg:block'
          src={currentTech.images.portrait} alt={currentTech.name}
        />

        <ul className=' basis-1/ lg:order-3 flex flex-row lg:flex-col justify-center gap-5 lg:mr-5'>
          {techData.map((tech, indx) => {
            const IsActive = indx === current
            return (
              <li key={indx}>
                <Link key={indx} className={`${IsActive ? 'tech-active' : ''}
                tech-link
                before:absolute before:-z-10  bafore:content[""] before:w-9 lg:before:w-13 before:h-9 lg:before:h-13 
                     before:animate-[ping_2.5s_infinite] before:rounded-full before:bg-white 
                
                `}
                  onClick={() => {
                    setCurrent(indx)
                  }}

                >{indx + 1}</Link>
              </li>
            )
          })}
        </ul>

        <div className="info  text-white p-3 lg:px-7 text-xl flex flex-col 
        justify-center items-center gap-4 basis-1/2 md:basis-[unset]">
          <div className="title name text-xl lg:text-2xl bellefair uppercase text-white/50 ">
            THE TERMINOLOGY…</div>
          <div className="nam name text-2xl lg:text-5xl bellefair uppercase ">
            {currentTech.name}
          </div>
          <div className="desc barlow text-lg barlow text-center grow md:grow-0 text-indigo-200 lg:pr-10 lg:h-40 ">
            {currentTech.description}
          </div>

        </div>


      </div>

    </main>

  )
}

export default Technology