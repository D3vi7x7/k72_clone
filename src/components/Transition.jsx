import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Transition = (props) => {

    const transref = useRef(null);
    const pageRef = useRef(null);

    const currentPath = useLocation().pathname;
    console.log(currentPath);
    
    useGSAP(() => {
        let tl = gsap.timeline();
        
        tl.to(transref.current,{
            display: "block",
        })
        tl.from(".stair > div",{
            height: "0%",
            ease: "power1.in",
            stagger:{
                amount: 0.3,
            },
        })
        tl.to(".stair > div",{
            y: "100%",
            ease: "power1.out",
            stagger:{
                amount: 0.3,
            },
        })
        tl.to(transref.current,{
            display: "none",
        })
        tl.to(".stair > div",{
            y: "0%"
        })
        gsap.from(pageRef.current,{
            opacity: 0,
            delay: 1.2,
        })
    },[currentPath])


  return (
    <div>
        <div ref={transref} className='transition fixed top-0 left-0 w-screen h-screen z-50'>
        <div className='stair h-screen w-screen flex'>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
            <div className='bg-black w-60 h-full'></div>
        </div>
        </div>
        <div ref={pageRef}>
            {props.children}
        </div>
    </div>
  )
}

export default Transition
