import React, { useState } from 'react'
import Menu from '../components/Menu'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

const Agency = () => {


  const navigate = useNavigate();

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.to(".images > div",{
            y:370,
            stagger: 0.4,
            scrollTrigger:{
                trigger: ".images",
                start: "top 20%",
                end: "bottom -120%",
                scrub: 1.2,
                pin:true,
                markers:false
            },
            ease:"power1.inOut"
        })

        gsap.to(".agency",{
          backgroundColor: "black",
          color: "white",
          scrollTrigger:{
            trigger:".founders",
            start: "top 40%",
            end: "top 30%",
            scrub: 1.3,
          }
        })

        tl.to(".front img",{
          y:900,
          scrollTrigger:{
            trigger: ".hero_img",
            start: "top 10%",
            end: "50% 10%",
            scrub: 3,
            pin:true,
            markers:false
          },
          ease: "power1.inOut"
        })
        gsap.from(".rt",{
          x: -50,
          opacity:1,
          scrollTrigger:{
            trigger: ".hero_img",
            start: "top 10%",
            end: "50% 10%",
            scrub: 3,
            markers:false
          }
        })
        gsap.from(".lft",{
          x: 50,
          opacity:1,
          scrollTrigger:{
            trigger: ".hero_img",
            start: "top 10%",
            end: "50% 10%",
            scrub: 3,
            markers:false
          }
        })
    })

  return (
    <div className='agency sm:h-[5000px] h-[4250px]'>
      <div className='md:text-6xl text-3xl absolute left-3 top-3'>
        <h1>K72</h1>
      </div>
      <Menu/>
      <div className='hero_head font-black lg:text-[320px] 
      sm:text-[190px] text-[80px] absolute 
      sm:left-1/2 top-1/2 sm:-translate-x-1/2 left-4 lg:leading-70 
      sm:leading-40 z-40'>
        <h1>SEVEN7Y <br />TWO</h1>
      </div>
      <div className='hero_head font-black lg:text-[60px] 
      sm:text-[40px] text-[20px] absolute 
      right-10 sm:top-6/5 top-[90%] z-40'>
        <h1>We're inquisitive and open - <br />minded, and we make sure creativity
        <br />crowds out ego from every corner. A <br /> <mark>Brand</mark> is a living thing, 
        with values, a <br />personality and a story.</h1>
      </div>
      <div className='images sm:w-[250px] sm:h-[330px]
      w-[150px] h-[200px] rounded-2xl
      absolute sm:left-150 top-50 left-7 overflow-hidden'>
        <div className='img1 absolute z-100'>
            <img src="/members/mb1.jpg" alt="" />
        </div>
        <div className='img2 absolute z-150'>
            <img src="/members/mb2.jpg" alt="" />
        </div>
        <div className='img1 absolute z-80'>
            <img src="/members/mb3.jpg" alt="" />
        </div>
        <div className='img2 absolute z-70'>
            <img src="/members/mb4.jpg" alt="" />
        </div>
        <div className='img1 absolute z-60'>
            <img src="/members/mb5.jpg" alt="" />
        </div>
        <div className='img2 absolute z-50'>
            <img src="/members/mb6.jpg" alt="" />
        </div>
        <div className='img1 absolute z-40'>
            <img src="/members/mb7.jpg" alt="" />
        </div>
        <div className='img2 absolute z-30'>
            <img src="/members/mb8.jpg" alt="" />
        </div>
        <img src="/members/mb9.jpg" alt="" />
      </div>
      <div className="expert text-3xl absolute sm:top-[200%] lg:left-100 
      sm:left-20 top-[150%] left-20 flex lg:gap-150 sm:gap-50 gap-5">
        <h1>Expertise</h1>
        <div>
          <h1>Strategy</h1>
          <h1>Branding</h1>
          <h1>Content</h1>
          <h1>Design</h1>
        </div>
      </div>
      <div className="goal lg:text-xl
      sm:text-[20px] absolute sm:top-[250%] top-[213%] lg:left-24 
      sm:px-5 sm:flex gap-10 px-5 
      lg:gap-10 sm:gap-5">
        <h1>Our Work Born in curiosity, raised by dedication <br /> 
        and fed with a steady diet of creativity.</h1>
        <h1>Our Creative Simmering in an environment where <br />
        talent can come to a full boil. Encouraged to become <br />
        the best versions of ourselves.</h1>
        <h1>Our Culture We’re open to each other. Period. <br />
        The team works together to create a space that <br />
        makes us proud.</h1>
      </div>
      <div className="founders absolute sm:top-[280%] top-[250%] w-full">
        <div className='hero_img absolute lg:left-[35%]
        sm:left-[25%] left-[13%] sm:w-[500px] sm:h-[700px]
        w-[300px] h-[350px]
        bg-lime-500 rounded-3xl overflow-hidden'>
          <div className='front'>
            <img className='scale-120 absolute z-20' src="/members/mb9.jpg" alt="" />
          </div>
          <img className='scale-120 absolute z-10' src="/members/mb10.jpg" alt="" />
        </div>
        <div className='foundertxt absolute font-black 
        z-100 text-lime-500 lg:text-[180px] flex gap-30 lg:left-70
        sm:text-[90px] text-[34px] sm:top-150 top-100 sm:left-27 left-6'>
            <h1 className='lft'>THE</h1>
            <h1 className='rt'>FOUNDERS</h1>
        </div>
      </div>
      <div className="roles w-full absolute top-[330%] sm:top-[430%] flex flex-col">
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-y-2 py-3 '>
            <h1 className='text-2xl'>Business Lead</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>CARL GODBOUT</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb2.jpg" className='im1 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-b-2 py-3 '>
            <h1 className='text-2xl'>Branding Lead</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>CAMILLE MIERE</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb7.jpg" className='im2 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-b-2 py-3 '>
            <h1 className='text-2xl'>Design Lead</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>ARNOUD DOYON</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb5.jpg" className='im1 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-b-2 py-3 '>
            <h1 className='text-2xl'>Content Lead</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>MEGGIE LAVOUIE</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb1.jpg" className='im1 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-b-2 py-3 '>
            <h1 className='text-2xl'>Finance Head</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>CATHERINE Max</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb6.jpg" className='im1 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
        <div className='group'>
          <div className='bg-lime-500 absolute w-full h-0 group-hover:h-[67px]
          transition-all duration-500 ease-in-out'></div>
          <div className='flex relative z-20 text-white justify-between items-center 
          px-5 border-b-2 py-3 '>
            <h1 className='text-2xl'>Relationship Head</h1>
            <h1 className='sm:text-4xl text-2xl font-black'>Violet Smith</h1>
          </div>
          <div className='flex overflow-hidden absolute z-30
             h-[500px] -top-20 lg:left-150 sm:left-70 rounded-3xl'>
            <img src="/members/mb10.jpg" className='im1 overflow-hidden relative -left-100
            group-hover:left-0 transition-all duration-1000 ease-in-out rounded-3xl' alt="" />
          </div>
        </div>
      </div>
      <div className='footer w-full absolute bottom-0 sm:top-[490%] top-[400%] pt-40 sm:flex
      sm:gap-0 gap-20 sm:pl-0 pl-10 items-center sm:justify-between'>
        <h1 className='text-white font-black sm:text-[370px] text-[170px] 
        leading-0'>K72</h1>
        <div className='relative sm:pt-0 pt-30'>
          <h1 className='text-3xl hover:cursor-pointer'
          onClick={() => navigate('/works')}><u>See all works..</u></h1>
          <img className='w-[300px] h-[200px] pr-5' src="/w1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Agency
