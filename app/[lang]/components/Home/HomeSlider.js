'use client'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import slider1 from "@/public/img/slider/slide-01.jpg";
import slider2 from "@/public//img/slider/slide-02.jpg";
import slider3 from "@/public//img/slider/slide-03.jpg";
import slider4 from "@/public//img/slider/slide-04.jpg";
import slider5 from "@/public//img/slider/slide-05.jpg";
// register Swiper custom elements
register();

const sliderArray = [
    { title: "slide1", imgUrl: slider1, fa: { pretitle: "", title: "کارخانه احیا مستقیم تولید آهن اسفنجی اردکان ", des: "هدف طرح: تولید آهن اسفنجی مورد نیاز واحدهای ذوب و ریخته‌گری  میزان ظرفیت تولید در سال: 2/1 میلیون تن" }, en: { pretitle: "Industry", title: "Energy & Commodities", des: "Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements." } },
    { title: "slide2", imgUrl: slider2, fa: { pretitle: "", title: "مجتمع گندله سازی بهاباد", des: "هدف طرح : تولید گندله سنگ آهن مورد نیاز واحد های احیامستقیم تولید آهن اسفنجی  میزان ظرفیت تولید در سال: 4 میلیون تن " }, en: { pretitle: "Industry", title: "Energy & Commodities", des: "Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements." } },
    { title: "slide3", imgUrl: slider3, fa: { pretitle: "", title: "کارخانه نورد فولاد شاهرود", des: "هدف طرح : تولید  انواع میلگردهای ساده و آجدار و ساید مقاطع فولادی  میزان ظرفیت تولید در سال : 200 هزار تن" }, en: { pretitle: "Industry", title: "Energy & Commodities", des: "Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements." } },
    { title: "slide4", imgUrl: slider4, fa: { pretitle: "", title: "محدوده معدنی C1B1P3  موسوم به 5C ", des: "هدف پروژه: عملیات اکتشاف، استخراج و بهره برداری از مواد معدنی  وضعیت بهره برداری :  در حال عملیات اکتشاف" }, en: { pretitle: "Industry", title: "Energy & Commodities", des: "Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements." } },
    { title: "slide5", imgUrl: slider5, fa: { pretitle: "", title: "جهش تولید با مشارکت مردم", des: "" }, en: { pretitle: "Industry", title: "Energy & Commodities", des: "Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements." } }]

export default function HomeSlider({ lang }) {

    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_next">
                        <span style={{ transform: lang === "fa" ? "rotate(360deg)" : "" }}>
                            <span className="a">
                            </span>
                            <span className="b">
                            </span>
                            <span className="c">
                            </span>
                        </span>
                    </div>
                    <div className="fn_prev">
                        <span style={{ transform: lang === "fa" ? "rotate(180deg)" : "" }}>
                            <span className="a">
                            </span>
                            <span className="b">
                            </span>
                            <span className="c">
                            </span>
                        </span>
                    </div>

                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >

                    {
                        sliderArray.map((v, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="item">
                                        <Image
                                            src={v.imgUrl} // The dynamic image URL
                                            alt="Background Image"
                                            layout="fill" // Fills the parent div
                                            objectFit="cover" // Ensures the image covers the entire div
                                            quality={100} // Optional: Adjust quality for performance
                                            className="z-[-1]" // Place the image behind any content in the div
                                        />

                                        <div className="title_holder">
                                            <div className="inner">
                                                <div className="in">
                                                    <p><span>{lang === 'en' ? v.en.pretitle : v.fa.pretitle}</span></p>
                                                    <h3><span>{lang === 'en' ? v.en.title : v.fa.title}</span></h3>
                                                    <div className="desc"><span>{lang === 'en' ? v.en.des : v.fa.des}</span></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
