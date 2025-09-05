import React, { useEffect, useState } from 'react'
import allData from '../data/data.json'
import { Link, useParams } from 'react-router-dom'

const Destination = () => {



  useEffect(() => {
    document.body.className = 'destination'

    return () => {
      document.body.className = ''
    }
  }, [])






  const destinationData = allData.destinations


  const planets = destinationData.map(el => el.name.toLocaleLowerCase())



  const { planetName } = useParams();
  const currentPlanet = destinationData.find(plnt => plnt.name.toLocaleLowerCase() === planetName)


  const [displayedDesc, setDisplayedDesc] = useState('');




  useEffect(() => {
    if (!currentPlanet) return;

    // start from null-zero letters
    setDisplayedDesc('');

    //array from current name
    // example........... MARS // M , R , A , S
    const descArr = currentPlanet.description.split("");
    const timeouts = [];


    // take each letter
    descArr.forEach((word, index) => {

      // apply timeout func for each letter - step
      const timeout = setTimeout(() => {

        // set the new value = old value + current letter
        setDisplayedDesc(prev => prev + word);
      }, index * 30);

      // each time out pushed into timeouts array
      timeouts.push(timeout);

    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [currentPlanet]);




  return (
    <main className='container flex flex-col grow mx-auto py-4'>
      <div className="title text-2xl barlow-co tracking-wider text-white flex 
      gap-2.5 font-light md:ml-4 md:justify-start justify-center mb-4">
        <span className='text-white opacity-50 font-semibold'>01</span>
        PICK YOUR DESTINATION
      </div>

      <div className="box flex flex-col lg:flex-row items-center justify-end grow">
        <div className="image lg:basis-1/2 flex justify-center overflow-hidden">
          <img key={currentPlanet.name} className='planet-image lg:max-w-96 lg:max-h-96 h-40 w-40 lg:w-96 lg:h-96 aspect-square' src={currentPlanet?.images?.webp} alt="" />
        </div>
        <div className=" basis-1/2 px-4 w-full">
          <div className="info text-white lg:px-7 px-2 items-center lg:items-start text-xl flex flex-col gap-4 mt-8 w-full">

            <ul id='desti-nav' className='flex flex-row gap-8 uppercase barlow-co text-indigo-200'>
              {planets.map((plnt) => {
                return (
                  <li key={plnt}>
                    <Link
                      to={`/destination/${plnt}`}
                      className={
                        plnt === currentPlanet.name.toLocaleLowerCase() ? 'active block py-5 uppercase relative' : 'block py-5 uppercase relative'
                      }
                    >
                      {plnt}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="name text-6xl lg:text-8xl bellefair uppercase overflow-hidden">
              <span key={currentPlanet.name} className='current-name block'>
                {currentPlanet.name}
              </span>
            </div>
            <p className='barlow text-lg barlow text-indigo-200 lg:pr-10 h-40 text-center
            md:h-[unset] min-h-[84px] lg:min-h-[140px] lg:text-start
            '>

              {displayedDesc}

            </p>

            <div className="line h-px bg-indigo-200 min-w-full lg:w-5/6"></div>

            <div className="dis-time flex flex-col items-center text-center pt-4 gap-4 uppercase
            md:flex-row w-full md:pt-0 lg:text-start
            ">
              <div key={currentPlanet.distance} className="dis basis-1/2 overflow-hidden">
                <div className='dis-time-title animate-titlemove barlow-co text-sm lg:text-lg text-indigo-200 font-light tracking-widest'>AVG. DISTANCE</div>
                <div className='bellefair text-2xl lg:text-3xl mt-3'>{currentPlanet.distance}</div>
              </div>
              <div key={currentPlanet.travel} className="time basis-1/2 overflow-hidden">
                <div className='dis-time-title animate-titlemove barlow-co text-sm lg:text-lg text-indigo-200 font-light tracking-widest'>Est. travel time</div>
                <div className='bellefair text-2xl lg:text-3xl mt-3'>{currentPlanet.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </main >
  )
}

export default Destination