"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    let barWrapper = useRef(null);
    let contentWrapper = useRef(null);
    let bar = useRef(null);
    let main = useRef(null);
    let textBlock = useRef(null);
  
    useEffect(() => {
        
        gsap.from(main.current, {
            autoAlpha: 0,
            duration: 1,
            immediateRender:false
        })

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: main.current,
                start: 'top top',
                end:'+=3000',
                // toggleActions: 'play none none reverse',
                // markers: true,
                scrub: 1,
                pin: true,
            },
            
        });

        tl.to(barWrapper.current, {
            rotation:180*3,
            duration: 3,
        })
        .to(bar.current, {
            width: "50vw",
            // borderRadius: 0,
            duration: 2,
        })
        .to(contentWrapper.current, {
            autoAlpha: 0,
        })
        .to(bar.current, {
            scale: 50,
            duration: 4,
            ease: "none",
        })
        // .to('.hero', {
        //     backgroundColor: "#EEEEEE",
        // })
        .to(bar.current, {
            backgroundColor: "#EEEEEE",
            duration: 1,
            ease: "none",
        })
        .to(bar.current, {
            scaleY: 1,
            scaleX: 1,
            duration: 0.1,
        })

        gsap.from(textBlock.current, {
            scrollTrigger: {
                trigger: barWrapper.current,
                start: "top +=200",
                scrub: 0.5,
            },
            autoAlpha: 0,
            x: 200,
            duration: 2,
            // delay: 1,
        })
        
    }, [])

    return (
        <section className="hero min-h-screen w-full relative" ref={main}>
            <div className="section-wrapper">
                <div className="bar-wrapper" ref={barWrapper}>
                    <div className="bar" ref={bar}></div>
                </div>

                <div className="content-wrapper" ref={contentWrapper}>
                    <div className="title-wrapper">
                        <h2 className='text-xl'>we are CNFLNC</h2>
                    </div>
                    <div className="text-wrapper" ref={textBlock}>
                        <p className="font-thin text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore amet, porro assumenda est eligendi ipsum a dignissimos repellat cupiditate.</p>
                    </div>
                </div>
                {/* <div className="dot"></div> */}
            </div>
        </section>
    )
}

export default Hero;