import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const navigate = useNavigate();

    useGSAP(() => {
        let txt1 = SplitText.create(".first",{
            type: "chars",
        });

        let txt2 = SplitText.create(".vd_head h1",{
            type: "chars",
        });

        let txt3 = SplitText.create(".last",{
            type: "chars",
        });

        let tl = gsap.timeline();

        tl.from(txt1.chars,{
            y: 100,
            delay: 1.3,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power1.inOut",
        }).from(txt2.chars,{
            y: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power1.inOut",
        },"-=0.6").from(txt3.chars,{
            y: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 0.5,
            ease: "power1.inOut",
        },"-=0.6")
    })

    useEffect(() => {
        let ttl = gsap.timeline();
        if(isOpen){
            ttl.to(".main_menu",{
                width: "140px",
                height: "6%",
                duration: 0.7,
                ease: "power1.inOut",
            })
        }else{
            ttl.to(".main_menu",{
                width: "100%",
                height: "100%",
                duration: 0.5,
                ease: "power1.inOut",
            })
        }

        if(isActive){
            gsap.to(".menu_bg",{
                width: "100%",
                duration: 0.5,
                ease: "power1.inOut",
            })
            gsap.from(".slide",{
                y: 20,
                opacity: 0,
                ease: "power1.in",
                duration: 0.5,
            })
        }else{
            gsap.to(".menu_bg",{
                width: "0%",
                duration: 0.5,
                ease: "power1.inOut", 
            })
        }

        gsap.to(".slide",{
            xPercent: -137.3,
            duration: 5,
            repeat: -1,
            ease: "linear",
        })

        if(isActive1){
            gsap.to(".menu_bg2",{
                width: "100%",
                duration: 0.5,
                ease: "power1.inOut",
            })
            gsap.from(".slide2",{
                y: 20,
                opacity: 0,
                ease: "power1.in",
                duration: 0.5,
            })
        }else{
            gsap.to(".menu_bg2",{
                width: "0%",
                duration: 0.5,
                ease: "power1.inOut", 
            })
        }

        gsap.to(".slide2",{
            xPercent: -137.3,
            duration: 5,
            repeat: -1,
            ease: "linear",
        })

        if(isActive2){
            gsap.to(".menu_bg3",{
                width: "100%",
                duration: 0.5,
                ease: "power1.inOut",
            })
            gsap.from(".slide3",{
                y: 20,
                opacity: 0,
                ease: "power1.in",
                duration: 0.5,
            })
        }else{
            gsap.to(".menu_bg3",{
                width: "0%",
                duration: 0.5,
                ease: "power1.inOut", 
            })
        }

        gsap.to(".slide3",{
            xPercent: -137.3,
            duration: 5,
            repeat: -1,
            ease: "linear",
        })
    }, [isOpen,isActive,isActive1,isActive2])

    return (
    <div>
      <div className='w-full h-screen'>
        <div className="logo md:text-6xl text-3xl font-bold 
        text-white absolute">
            <h1>K72</h1>
        </div>
        <div className="main_menu absolute right-0 top-0
        overflow-hidden 
        bg-black z-20">
            <h3 onClick={() => setIsOpen(!isOpen)} className='cursor-pointer 
            text-white md:text-3xl
            text-4xl
            absolute right-5 top-3'>MENU</h3>
            {!isOpen &&  (
                <div className='menu_items absolute
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-col gap-1.5 items-center'>
                    <div className='w-screen h-[1px] bg-white'></div>
                    <div onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    onClick={() => navigate('./works')}
                     className='text-white'>
                        {isActive && (
                            <div className='slide absolute 
                        h-24 w-screen left-0 z-30 flex items-center
                        gap-3 pt-4'>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                        </div>
                        )}
                        <div className='menu_bg bg-lime-500 w-0 h-24 
                        absolute left-1/2 transform -translate-x-1/2'></div>
                        <h1 className='md:text-8xl text-5xl 
                        cursor-pointer'>WORKS</h1>
                    </div>
                    <div className='w-screen h-[1px] bg-white'></div>
                    <div onMouseEnter={() => setIsActive1(true)}
                    onMouseLeave={() => setIsActive1(false)}
                    onClick={() => navigate('./agency')} 
                    className='text-white'>
                        {isActive1 && (
                            <div className='slide2 absolute 
                        h-24 w-screen left-0 z-30 flex items-center
                        gap-3 pt-4'>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                        </div>
                        )}
                        <div className='menu_bg2 bg-lime-500 w-0 h-24 
                        absolute left-1/2 transform -translate-x-1/2'></div>
                        <h1 className='md:text-8xl text-5xl 
                        cursor-pointer'>AGENCY</h1>
                    </div>
                    <div className='w-screen h-[1px] bg-white'></div>
                    <div onMouseEnter={() => setIsActive2(true)}
                    onMouseLeave={() => setIsActive2(false)}
                    className='text-white'>
                        {isActive2 && (
                            <div className='slide3 absolute 
                        h-24 w-screen left-0 z-30 flex items-center
                        gap-3 pt-4'>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                            <h1 className='text-white text-8xl'>SEE</h1>
                            <h1 className='text-white text-8xl'>EVERYTHING</h1>
                        </div>
                        )}
                        <div className='menu_bg3 bg-lime-500 w-0 h-24 
                        absolute left-1/2 transform -translate-x-1/2'></div>
                        <h1 className='md:text-8xl text-5xl 
                        cursor-pointer'>BLOG</h1>
                    </div>
                    <div className='w-screen h-[1px] bg-white'></div>
                </div>
            )}
        </div>
        <div className="head absolute w-full text-white
        font-bold md:text-7xl lg:text-9xl text-4xl
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        flex flex-col gap-1 md:gap-2 items-center">
            <h1 className='first h-full overflow-hidden'>THE SPARK FOR</h1>
            <div className='vd_head flex gap-3 items-center'>
                <h1 className='h-full overflow-hidden'>ALL</h1>
                <video src="/video.mp4" autoPlay loop muted className='object-cover 
                md:w-[150px] md:h-[60px] lg:w-[250px] lg:h-[100px] 
                w-[100px] h-[40px]
                rounded-3xl lg:rounded-full'></video>
                <h1 className='h-full overflow-hidden'>THINGS</h1>
            </div>
            <h1 className='last h-full overflow-hidden'>CREATIVE.</h1>
        </div>
        <div className="abt text-white absolute sm:w-1/3 
        lg:w-1/4 bottom-10 left-4 md:right-3 
        md:bottom-20">
            <h3>K72 is an agency that builds brands from every 
                angle. Today, tomorrow and years from now. We 
                think the best sparks fly when comfort zones get 
                left behind and friction infuses our strategies, 
                brands and communications with real feeling. We’re 
                transparent, honest and say what we mean, and when 
                we believe in something, we’re all in.</h3>
        </div>
        <div className="pages absolute flex md:flex-col gap-3
        lg:flex-row lg:gap-5 z-10
        md:right-5 md:bottom-5 right-17 bottom-60">
            <h1 className='text-white lg:text-8xl 
            md:text-6xl text-3xl border-2
            pb-0 p-4 border-white rounded-full
            hover:text-lime-300
            hover:border-lime-300
            transition-all cursor-pointer
            '
            onClick={() => navigate('./works')}
            >WORKS</h1>
            <h1 className='text-white lg:text-8xl 
            md:text-6xl text-3xl border-2
            pb-0 p-4 border-white rounded-full
            hover:text-lime-300
            hover:border-lime-300
            transition-all cursor-pointer
            '
            onClick={() => navigate('./agency')}>ABOUT</h1>
        </div>
        <video src="/video.mp4" autoPlay loop muted className='w-full h-full object-cover'></video>
      </div>
    </div>
  )
}

export default Hero
