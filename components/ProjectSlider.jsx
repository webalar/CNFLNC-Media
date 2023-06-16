"use client";

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import image1 from '../public/assets/images/1.png'
import bgCinema from '../public/assets/images/cinema.jpg'

gsap.registerPlugin(ScrollTrigger);

import { projects } from '@data';
import Video from './Video';
// import introVideo from '../public/assets/intro-video.mov';


const Projects = () => {

  const [projectList, setProjectList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [bgUrl, setBgUrl] = useState(bgCinema)

  // Add default value on page load
  useEffect(() => {
    setProjectList(projects);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory || selectedCategory == "All") {
      return projectList;
    } else {
      return projectList.filter((item) => item.category === selectedCategory);
    } 
  }
 

  function playVideo(event) {
    event.target.play();
  }

  function pauseVideo(event) {
    event.target.currentTime = 0;
    event.target.pause();
  }

  // Avoid duplicate function calls with useMemo
  let filteredList = useMemo(getFilteredList, [selectedCategory, projectList]);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {

    const projectLength = -((projects.length - 2) * 50) + "vw";

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: projectLength,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          endTrigger: ".intro-video",
          // end: "3000 bottom",
          scrub: 0.4,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);


  return (

    <>
      <section className="category-selector h-screen flex items-center justify-center">
        <div className="filter-container mx-auto w-[75vw]">

          <div className='category-grid grid grid-cols-4 grid-rows-4 gap-3'>

            <div className="category-item-wrapper col-start-1 row-start-1 col-span-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => {setSelectedCategory("Cinema"); handleBg()}}>Cinema</Link>
            </div>

            <div className="category-item-wrapper col-start-3 row-start-1 row-span-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Shorts")}>Shorts</Link>
            </div>

            <div className="category-item-wrapper col-start-1 row-start-2 row-span-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Music Videos")}>Music Videos</Link>
            </div>

            <div className="category-item-wrapper col-start-2 row-start-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Ad Films")}>Ad Films</Link>
            </div>

            <div className="category-item-wrapper col-start-3 row-start-3 row-span-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Events")}>Events</Link>
            </div>

            <div className="category-item-wrapper col-start-1 row-start-4" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Podcasts")}>Podcasts</Link>
            </div>

            <div className="category-item-wrapper col-start-2 row-start-3 row-span-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("3D/2D")}>3D/2D</Link>
            </div>

            <div className="category-item-wrapper col-start-4 row-start-1" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Corporate Films")}>Corporate Films</Link>
            </div>

            <div className="category-item-wrapper col-start-4 row-start-2" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Product Videography")}>Product Videography</Link>
            </div>

            <div className="category-item-wrapper col-start-4 row-start-3" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Documentaries")}>Documentaries</Link>
            </div>

            <div className="category-item-wrapper col-start-4 row-start-4" style={{ backgroundImage: `url(${bgCinema.src})` }}>
              <Link href="#work" className='category-item' onClick={() => setSelectedCategory("Explainer Videos")}>Explainer Videos</Link>
            </div>

          </div>

        </div>
      </section>


      <section id='work' className="scroll-section-outer">

        <div ref={triggerRef} className='scroll-trigger relative' style={{ backgroundImage: `url(${bgUrl.src})` , }}>
          <div ref={sectionRef} className="scroll-section-inner" style={{width: `${filteredList.length * 60}vw`}}>

            {
              filteredList.map((item, index) => {

                return (
                  <Link href={`/projects/${item.id}`} key={item.id} className="scroll-section">
                    <video width={"auto"} height={"auto"} loop muted autoPlay controls={false} className='project-img' onMouseOver={playVideo} onMouseOut={pauseVideo}>
                      <source src={item.ftVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <Image src={item.ftImg} height={"auto"} width={"auto"} alt={item.title} className='project-overlay ' />
                    <h3 className='project-title text-5xl text-white font-medium uppercase'>{item.title}</h3>

                  </Link>
                )

              })
            }
            
          </div>
        </div>
      </section>

      <section className='intro-video flex items-center justify-center h-screen'>
        <video loop muted autoPlay controls={false} className="aspect-video w-3/4 mx-auto" type="video/mp4">
          <source src="https://res.cloudinary.com/krude/video/upload/v1662558994/CNFLNC%20Media/bg-video-1_wygsix.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  )
}

export default Projects