'use client'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Arrow_r } from '@/public/svg/icon';
import Image from 'next/image';

// Import images
import Auctions1 from "@/public/img/service/ahanesfanji.jpg"
import Auctions2 from "@/public/img/service/beriket.jpg"
import Auctions3 from "@/public/img/service/narme-ahan-esfanji.jpg"
import Auctions4 from "@/public/img/service/narme-gondole.jpg"
import Auctions5 from "@/public/img/service/sludge.jpg"
import thumb from '@/public/img/thumb/480-700.jpg'

export default function Auctions({ lang }) {

    const translations = {
        en: { title: "Auctions and tenders" },
        fa: { title: "مزایدات و مناقصات" },
    }
    const Auctions = [
        {
            link: "/services/serviceSinglePage1",
            img: "",
            bg: Auctions1,
            fa: { title: "مزایده آهن اسفنجی" },
            en: { title: "Auction number 1" }
        },
        {
            link: "/services/serviceSinglePage2",
            img: "/img/thumb/480-700.jpg",
            bg: Auctions2,
            fa: { title: "مزایده بریکت" },
            en: { title: "Auction number 2" }
        },
        {
            link: "/services/serviceSinglePage3",
            img: "/img/thumb/480-700.jpg",
            bg: Auctions3,
            fa: { title: "مناقصه نرمه آهن اسفنجی" },
            en: { title: "Auction number 3" }
        },
        {
            link: "/services/serviceSinglePage4",
            img: "/img/thumb/480-700.jpg",
            bg: Auctions4,
            fa: { title: "مزایده نرمه گندله" },
            en: { title: "Auction number 4" }
        },
        {
            link: "/services/serviceSinglePage5",
            img: "/img/thumb/480-700.jpg",
            bg: Auctions5,
            fa: { title: "مناقصه خدمات" },
            en: { title: "Auction number 5" }
        },
    ]

    return (
        <>
            {/* <!-- Auctions Query Shortcode --> */}
            <div className="fn_cs_service_query" data-mobile="disable" data-column-count="4">
                <div className="top_bar">
                    <div className="t_inner">
                        <h3>{lang === "fa" ? translations.fa.title : translations.en.title}</h3>
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
                            {Auctions.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="item">
                                        <Link href={`/${lang}/auctions`} className="full_link" ></Link>
                                        <div className="img_holder">
                                            <Image width={480} height={700} src={thumb} alt={lang === "fa" ? item.fa.title : item.en.title} />
                                            <Image
                                                src={item.bg}
                                                alt={lang === "fa" ? item.fa.title : item.en.title}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                                className="z-10"
                                            />
                                        </div>
                                        <div className="title">
                                            <h3>{lang === "fa" ? item.fa.title : item.en.title}</h3>
                                        </div>
                                        
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div >
            {/* <!-- /Auctions Query Shortcode --> */}

        </>
    )
}
