import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Menu from '../components/Menu'
import { SplitText } from 'gsap/all'
import { useNavigate } from 'react-router-dom'

const Works = () => {

    useGSAP(() => {
        let ttl = gsap.timeline();

        let hdtxt = SplitText.create(".Head_txt",{
            type: "chars"
        })

        ttl.from(hdtxt.chars,{
            y: 100,
            delay:1.2,
            stagger: 0.04,
            ease: "power1.inOut"
        })

        ttl.from(".work1",{
            height: "400px",
            scrollTrigger: {
                trigger: ".all_work",
                start: "-9% 10%",
                end: "top 10%",
                scrub: 2,
                markers: false,
            }
        }).from(".work2",{
            height: "70px",
            scrollTrigger: {
                trigger: ".all_work",
                start: "-3% 10%",
                end: "25% 10%",
                scrub: 2,
                markers: false,
            }
        }).from(".work3",{
            height: "0px",
            scrollTrigger: {
                trigger: ".all_work",
                start: "0% 10%",
                end: "30% 10%",
                scrub: 2,
                markers: false,
            }
        }).from(".work4",{
            height: "0px",
            scrollTrigger: {
                trigger: ".all_work",
                start: "25% 10%",
                end: "55% 10%",
                scrub: 2,
                markers: false,
            }
        }).from(".work5",{
            height: "0px",
            scrollTrigger: {
                trigger: ".all_work",
                start: "40% 10%",
                end: "70% 10%",
                scrub: 2,
                markers: false,
            }
        })
    }, [])

  return (
    <div>
      <div className="work">
        <div className="logo md:text-6xl text-3xl font-bold 
        absolute left-3 top-3">
            <h1>K72</h1>
        </div>
        <Menu/>
        <div className="projects overflow-hidden">
            <h1 className='Head_txt lg:text-9xl md:text-7xl text-4xl
            absolute lg:top-1/3 md:top-[30%] top-[44%] left-3 font-bold overflow-hidden'>WORKS<span className='text-[30px]'>10</span></h1>
            <div className='all_work w-full md:h-[3600px] h-[2070px] absolute
            lg:top-103 md:top-90 top-120 left-0 px-3 flex flex-col gap-3'>
                <div className='r1 flex gap-3'>
                    <div className="work1 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w1.jpg" alt="" />
                    </div>
                    <div className="work1 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w2.jpg" alt="" />
                    </div>
                </div>
                <div className='r2 flex gap-3'>
                    <div className="work2 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w3.jpg" alt="" />
                    </div>
                    <div className="work2 w-1/2 sm:h-[600px] 
                    h-[300px] 
                    overflow-hidden justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w4.jpg" alt="" />
                    </div>
                </div>
                <div className='r3 flex gap-3'>
                    <div className="work3 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w5.jpg" alt="" />
                    </div>
                    <div className="work3 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w6.jpg" alt="" />
                    </div>
                </div>
                <div className='r4 flex gap-3'>
                    <div className="work4 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w7.jpg" alt="" />
                    </div>
                    <div className="work4 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w8.jpg" alt="" />
                    </div>
                </div>
                <div className='r5 flex gap-3'>
                    <div className="work5 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w9.jpg" alt="" />
                    </div>
                    <div className="work5 w-1/2 sm:h-[600px] 
                    h-[300px] overflow-hidden
                    justify-center items-center flex relative
                    group hover:cursor-pointer">
                        <h1 className='absolute text-white
                        font-black lg:text-6xl md:text-4xl text-3xl
                        border-2 border-white pt-4 px-7
                        rounded-full 
                        opacity-0 
                        group-hover:opacity-100
                        transition-opacity'>VIEW PROJECT</h1>
                        <img className='object-cover w-full h-full' 
                        src="/w10.jpg" alt="" />
                    </div>
                    <div className="foot absolute left-0 bottom-0 bg-black text-white
                        w-full h-[540px] flex items-center
                        justify-center">
                        <h1 className='text-[170px] sm:text-[370px] leading-0'>K72</h1>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Works
