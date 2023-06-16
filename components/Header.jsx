"use client";

import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import { useState, useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from '../public/assets/images/logo.png'

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

    const [isMenuActive, setMenuActive] = useState(false)
    
    let headerRef = useRef(null);

    const menuTriggerRef = useRef(null);
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)

    useEffect(() => {
        gsap.from(headerRef.current, {
            // scrollTrigger: {
            //     trigger: "body",
            //     start: "+=3500",
            //     scrub: 0.5,
            //     toggleActions: "play reverse play reverse",
            // },
            y: "+=100",
            opacity: 0,
            duration: 1,
            ease: "none",
            delay: 1,
        })
    }, [])

    useEffect(() => {

        // const tl = gsap.timeline({ease: "power2.out"});
        
        if(isMenuActive) {
            gsap.to(".menu-link", {
                width: "auto",
                duration: 0.5,
                ease: "power2.out",
            })
            gsap.to(".menu-container", {
                gap: "4px",
                delay: 0.6,
                ease: "power2.out",
            })
            gsap.to(".menu-link", {
                autoAlpha: 1,
                duration: 0.4,
                stagger: 0.1,
                delay: 0.2,
            })
            // gsap.to(".menu-trigger",{
            //     backgroundColor: "#1A1A1A",
            // })
        } else {
            gsap.to(".menu-link", {
                autoAlpha: 0,
                duration: 0.1,
            })
            gsap.to(".menu-container", {
                gap: "0em",
                delay: 0,
            })
            gsap.to(".menu-link", {
                width: 0,
                duration: 0.5,
                delay: 0.3,
                ease: "power2.out",
            })
        }
        

        // return () => {
        //     menuToggle.kill();
        // }
    }, [isMenuActive])

    const handleMenu = () => {setMenuActive(!isMenuActive)};

    return (
        <header className="" ref={headerRef}>
            <div className="flex justify-between">
                <div className="logo-container bg-neutral-700">
                    <Link href="/" className="text-white relative h-full w-full">
                        <Image src={logo}  fill={true} alt="CNFLNC Media" className="object-contain"/>
                    </Link>
                </div>

                <div className="menu-container bg-neutral-700">
                    <div ref={menuTriggerRef} className="menu-trigger" onClick={handleMenu}>
                        <div className="icon-lines relative">
                            <div ref={line1Ref} className="line-1"></div>
                            <div ref={line2Ref} className="line-2"></div>
                        </div>
                    </div>
                    <Link href="/#work" className="menu-link">work</Link>
                    <Link href="/about" className="menu-link">about</Link>
                    <Link href="/contact" className="menu-link">contact</Link>
                    <div className="menu-link"><DarkModeToggle /></div>
                    
                </div>
            </div>
        </header>
  )
}

export default Header