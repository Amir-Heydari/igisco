'use client'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Arrow_r } from '@/public/svg/icon';
import Image from 'next/image';

import service1 from "@/public/img/service/ahanesfanji.jpg"
import service2 from "@/public/img/service/beriket.jpg"
import service3 from "@/public/img/service/narme-ahan-esfanji.jpg"
import service4 from "@/public/img/service/narme-gondole.jpg"
import service5 from "@/public/img/service/sludge.jpg"
import thumb from '@/public/img/thumb/480-700.jpg'



export default function HomeServices({ lang }) {

    const data = {
        en: {
            title: "Products",
            des: "Main and side products",
            spongeiron: "Sponge Iron (DRI)",
            briquette: "Briquette (CBI)",
            drifine: "DRI Fine",
            pelletfine: "Pellet Fine",
            drisludge: "DRI Sludge"
        },
        fa: {
            title: "محصولات",
            des: "محصولات اصلی و جانبی",
            spongeiron: "آهن اسفنجی DRI",
            briquette: "بریکت (CBI)",
            drifine: "نرمه آهن اسفنجی DRI Fine",
            pelletfine: "نرمه گندله  Pellet Fine",
            drisludge: "لجن آهن اسفنجی DRI Sludge"
        }
    }

    const services = [
        {
            link: "/services/serviceSinglePage1",
            img: thumb,
            bg: service1,
            title: lang === 'en' ? data.en.spongeiron : data.fa.spongeiron
        },
        {
            link: "/services/serviceSinglePage2",
            img: thumb,
            bg: service2,
            title: lang === 'en' ? data.en.briquette : data.fa.briquette
        },
        {
            link: "/services/serviceSinglePage3",
            img: thumb,
            bg: service3,
            title: lang === 'en' ? data.en.drifine : data.fa.drifine
        },
        {
            link: "/services/serviceSinglePage4",
            img: thumb,
            bg: service4,
            title: lang === 'en' ? data.en.pelletfine : data.fa.pelletfine
        },
        {
            link: "/services/serviceSinglePage5",
            img: thumb,
            bg: service5,
            title: lang === 'en' ? data.en.drisludge : data.fa.drisludge
        },
    ]

    return (
        <>
            {/* <!-- Service Query Shortcode --> */}
            <div className="fn_cs_service_query" data-mobile="disable" data-column-count="4">
                <div className="top_bar">
                    <div className="t_inner">
                        <h3>{lang === 'en' ? data.en.title : data.fa.title}</h3>
                        {/* <span>{t("des")}</span> */}
                        <div className="owl_control">
                            <div className="fn_prev"></div>
                            <div className="fn_next"></div>
                        </div>
                    </div>
                </div>
                <div className="service_part">
                    <div className="owl-carousel">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2}
                            loop={true}
                            // pagination={{ clickable: true }}
                            className="custom-class"
                            navigation={{
                                prevEl: ".fn_prev",
                                nextEl: ".fn_next",
                            }}
                            breakpoints={{

                                // when window width is >= 768px

                                768: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                },
                                1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {services.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="item">
                                        {/* <Link href={item.link} className="full_link" ></Link> */}
                                        <div className="img_holder">
                                            <Image width={400} height={700} src={item.img} alt={item.title} />
                                            <Image
                                                src={item.bg}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                                className="z-10 abs_img"
                                            />
                                        </div>
                                        <div className="title">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div >
            {/* <!-- /Service Query Shortcode --> */}

        </>
    )
}
