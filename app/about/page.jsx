"use client"

import { useRef, useEffect } from 'react';

import '@styles/globals.css';
import Image from 'next/image';

import bannerImage from '../../public/assets/images/sam-mcghee-KieCLNzKoBo-unsplash 1.png';
import iconScroll from '../../public/assets/icons/icon-scroll.svg';
import blurImage from '../../public/assets/images/blurImage.png'

import { team } from '@data';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const About = () => {

  return (

    <div className="main-wrapper">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="section-container mx-8 md:mx-16 flex flex-col justify-between items-end md:flex-row pt-40 pb-24">

            <div className="page-title">
                <h1 className="font-semibold text-6xl md:text-8xl text-black uppercase">About <br/>CNFLNC Media</h1>
            </div>
            <div className="scroll-btn text-black pt-4 self-start md:self-end flex items-center gap-3">Scroll to Explore <Image src={iconScroll} width={16} height={30} alt='Scroll Down'></Image></div>

        </div>

        <Image src={bannerImage} width="100vw" height="70vh" alt='About Hero' className='w-screen about-banner object-cover'></Image>

      </section>

      {/* Expertise Section */}
      <section className="expertise">

        <div className="section-container mx-8 md:mx-16 pt-32 flex items-center gap-5">

          <div className="flex-col flex-1">

            <div className="flex items-center gap-4">
              <span className='h-8 aspect-square border border-black rounded-full grid place-items-center text-black'>1</span>
              <span className='uppercase text-xl text-black'>Expertise</span>
            </div>

            <p className="text-black text-3xl font-medium pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae velit dolorem ullam rem? Cum quidem neque doloribus, aspernatur saepe voluptate dignissimos nam corporis facilis consequuntur. Cupiditate odit ipsum voluptatem vero animi, quisquam corporis illo laborum minima quas voluptates a unde assumenda perspiciatis laboriosam aspernatur amet veritatis magnam placeat exercitationem.</p>

          </div>

          <div className="flex-col flex-1">

            <div className="flex items-center gap-4">
              <span className='h-8 aspect-square border border-black rounded-full grid place-items-center text-black'>2</span>
              <span className='uppercase text-xl text-black'>Mission</span>
            </div>

            <p className="text-black text-3xl font-medium pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae velit dolorem ullam rem? Cum quidem neque doloribus, aspernatur saepe voluptate dignissimos nam corporis facilis consequuntur. Cupiditate odit ipsum voluptatem vero animi, quisquam corporis illo laborum minima quas voluptates a unde assumenda perspiciatis laboriosam aspernatur amet veritatis magnam placeat exercitationem.</p>

          </div>

          <div className="flex-col flex-1">

            <div className="flex items-center gap-4">
              <span className='h-8 aspect-square border border-black rounded-full grid place-items-center text-black'>3</span>
              <span className='uppercase text-xl text-black'>Vision</span>
            </div>

            <p className="text-black text-3xl font-medium pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae velit dolorem ullam rem? Cum quidem neque doloribus, aspernatur saepe voluptate dignissimos nam corporis facilis consequuntur. Cupiditate odit ipsum voluptatem vero animi, quisquam corporis illo laborum minima quas voluptates a unde assumenda perspiciatis laboriosam aspernatur amet veritatis magnam placeat exercitationem.</p>

          </div>


        </div>

      </section>

      {/* Team Section */}
      <section className="team">

        <div className="section-container ml-8 md:ml-16 py-32">
          <Swiper
            direction='horizontal'
            slidesPerView={4}
            spaceBetween={30}
            autoplay={true}
            // mousewheel={{
            //   forceToAxis: true,
            //   sensitivity: 3,
            //   releaseOnEdges: true,
            // }}
            modules={[Autoplay]}
            className="team-slider"
          >

                {
                  team.map((item) => {

                    return (
                      <SwiperSlide key={item.id}>
                        <Image src={item.imgUrl} height={500} width={400} alt={item.name} className='team-img w-full grayscale' />
                        <h3 className='text-xl font-medium uppercase flex flex-col md:flex-row items-center justify-between pt-6 text-black'>{item.name}<span className='text-sm text-stone-700'>{item.position}</span></h3>
                      </SwiperSlide>
                    )

                  })
                }
          </Swiper>
        </div>

      </section>

      {/* Strategy Section */}
      <section className="strategy">

      <div className="section-container mx-8 md:mx-16 py-32">

        <div className="flex items-center gap-4">
          <span className='h-8 aspect-square border border-black rounded-full grid place-items-center text-black'>4</span>
          <span className='uppercase text-xl text-black'>Strategy</span>
        </div>

        <p className="text-black text-3xl font-medium pt-8 md:w-2/3 xl:w-1/2 pb-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sint quisquam! Voluptatibus similique error sit iure porro consequatur laboriosam doloribus.</p>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            modules={[Autoplay]}
            className="strategy-slider "
          >

            <SwiperSlide className="">
              <h3 className="text-xl font-medium pb-6 text-black">Step 1</h3>
              <Image src={blurImage} height={200} width={450} alt="Strategy Point 1" className='strategy-img w-full' />
              <p className='pt-5 text-sm text-stone-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel exercitationem enim, et accusantium distinctio hic!</p>
            </SwiperSlide>

            <SwiperSlide className="">
              <h3 className="text-xl font-medium pb-6 text-black">Step 2</h3>
              <Image src={blurImage} height={200} width={450} alt="Strategy Point 1" className='strategy-img w-full' />
              <p className='pt-5 text-sm text-stone-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel exercitationem enim, et accusantium distinctio hic!</p>
            </SwiperSlide>

            <SwiperSlide className="">
              <h3 className="text-xl font-medium pb-6 text-black">Step 3</h3>
              <Image src={blurImage} height={200} width={450} alt="Strategy Point 1" className='strategy-img w-full' />
              <p className='pt-5 text-sm text-stone-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel exercitationem enim, et accusantium distinctio hic!</p>
            </SwiperSlide>

            <SwiperSlide className="">
              <h3 className="text-xl font-medium pb-6 text-black">Step 4</h3>
              <Image src={blurImage} height={200} width={450} alt="Strategy Point 1" className='strategy-img w-full' />
              <p className='pt-5 text-sm text-stone-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel exercitationem enim, et accusantium distinctio hic!</p>
            </SwiperSlide>


        </Swiper>

      </div>

      </section>




    </div>

  )
}

export default About;