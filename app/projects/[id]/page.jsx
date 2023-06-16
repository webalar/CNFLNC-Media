"use client"

import Image from "next/image";
import { notFound } from "next/navigation";
import image1 from "../../../public/assets/images/1.png";
import overview from '../../../public/assets/images/overview.png';
import featuredVideo from '../../../public/assets/images/featured-video.png';
import blurImage from '../../../public/assets/images/blurImage.png';

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper";

import { projects } from "@data";
import ModalVideo from "@components/ModalVideo";

const getData = (id) => {
    const data = projects[id - 1];

    if (data) {
        return data;
    }

    return notFound();
};
  

const ProjectDetails = ({ params }) => {

    const data = getData(params.id);

    return (
        <div className="project-details-wrapper min-h-screen overflow-x-hidden">

            <section className="banner-image h-[60vh] w-screen relative">
                <Image src={data.ftImg} fill={true} className="object-cover" alt="Project Banner" />
                <div className="overlay"></div>
                <div className="project-title text-white text-8xl uppercase">{data.title}</div>
            </section>

            <section className="overview-section py-48">
                <div className="container mx-auto">
                    <div className="project-overview flex items-center gap-16">
                        <div className="overview-image relative h-[60vh] aspect-square rounded-lg">
                            <Image src={data.clientImg} fill={true} alt="Project Overview" />
                        </div>
                        <div className="overview-body">
                            <h2 className="section-title text-4xl uppercase pb-6">Overview</h2>
                            <p className="description text-lg opacity-70 ">{data.desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-video h-[80vh] w-screen relative">
                <Image src={data.ftImg} fill={true} className="object-cover" alt={data.title}/>
                <div className="overlay bg-blur" ></div>
                {/* <video src={data.ftVideo} loop={false} autoPlay={false} controls className=" w-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" type="video/mp4"></video> */}
                <ModalVideo
                    thumb={data.ftImg}
                    thumbWidth={"75vw"}
                    thumbHeight={432}
                    thumbAlt={data.title}
                    video={data.ftVideo}
                    videoWidth={1920}
                    videoHeight={1080} 
                    classes="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </section>

            <section className="drafts py-40">
                <div className="container mx-auto">

                    <div className="section-title text-center text-4xl uppercase pb-24">Drafts</div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={true}
                        modules={[Autoplay]}
                        className="drafts-slider"
                    >

                        {
                            data.drafts.map((item, index) => {
                                return (
                                    <SwiperSlide className="swiper-slide" key={item.id}>
                                        {/* <Image src={item.imgUrl} placeholder={blur} blurDataURL={item.imgUrl} height={300} width={450} alt="draft" className='w-full rounded-lg object-cover' /> */}
                                        <ModalVideo
                                            thumb={item.imgUrl}
                                            thumbWidth={768}
                                            thumbHeight={432}
                                            thumbAlt={item.id}
                                            video={item.videoUrl}
                                            videoWidth={1920}
                                            videoHeight={1080} 
                                            />
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </section>
        </div>
    )
}


export default ProjectDetails