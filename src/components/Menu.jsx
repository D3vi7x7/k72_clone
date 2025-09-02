import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.from(".mm > div",{
            y: -200,
            delay: 1.3,
            stagger:0.25,
            ease: "power1.inOut",
        })
    })

  return (
    <div>
      <div className='mm absolute right-0 top-0 flex'>
        <div className='m1 bg-black text-white lg:w-[300px] sm:w-[220px] h-[60px] hover:cursor-pointer
        w-[100px] hover:bg-lime-500 hover:text-black transition-colors duration-200'
        onClick={() => navigate('/')}>
            <h1 className='py-8 px-2 font-bold sm:text-xl text-[15px]'>HOME</h1>
        </div>
        <div className='mm2 bg-black text-white lg:w-[300px] sm:w-[220px] h-[100px] hover:cursor-pointer
        w-[100px] hover:bg-lime-500 hover:text-black transition-colors duration-200'
        onClick={() => navigate('/agency')}>
            <h1 className='py-17 px-2 font-bold sm:text-xl text-[15px]'>AGENCY</h1>
        </div>
        <div className='mm3 bg-black text-white lg:w-[300px] sm:w-[220px] h-[140px] hover:cursor-pointer
        w-[100px] hover:bg-lime-500 hover:text-black transition-colors duration-200'>
            <h1 className='py-27 px-2 font-bold sm:text-xl text-[15px]'>WORKS</h1>
        </div>
      </div>
    </div>
  )
}

export default Menu
