import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
import Link from "next/link"
import map from "@/public/img/blog/map.png";
import blog1 from "@/public/img/news/1.jpg";
import blog2 from "@/public/img/news/2.jpg";
import blog3 from "@/public/img/news/3.jpg";
import thumb from "@/public/img/thumb/370-250.jpg"
import axios from "axios";
import { gregorianToJalali } from "@/app/tools/dateConvertor";
import { getMonthName } from "@/app/tools/getMonthName";
export default async function HomeNews({ lang }) {

    const response = await axios.get('http://185.97.117.44:1337/api/news/');
    const data = response.data.filter((x, i) => i < 4);


    const { Home } = await getDictionary(lang)

    return (
        <>
            <div className="blog_section">

                <Image
                    src={map}
                    alt="map"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="overlay"
                />

                {/* <!-- Main Title --> */}
                <div className="fn_cs_main_title">
                    <div className="container">
                        <div className="title_holder">
                            <h3>{Home.News.newstitle}</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- /Main Title --> */}

                {/* <!-- Triple Blog Modern Shortcode --> */}
                <div className="fn_cs_triple_blog_modern fn_alpha">
                    <div className="container">
                        <div className="inner">

                            <ul>
                                {data.map((v, i) => {
                                    let date = lang === "fa" ? gregorianToJalali(v.created.substring(0, 10)) : v.created.substring(0, 10)
                                    let [year, month, day] = date.split(lang === "fa" ? "/" : "-")
                                    return (
                                        <li key={v.id}>
                                            <div className="item">
                                                <div className="img_holder">
                                                    <Link href={`/news/${v.id}`}>
                                                        <Image
                                                            src={lang === "fa" ? v.image_url_pr : v.image_url_en}
                                                            alt="blog"
                                                            layout="fill"
                                                            objectFit="cover"
                                                            quality={100}
                                                            className="z-10"
                                                        />
                                                        <div className="time">
                                                            <span></span>
                                                            <h3>{day}</h3>
                                                            <h5>{getMonthName(month, lang)}</h5>
                                                            <h5>{year}</h5>
                                                        </div>
                                                    </Link>
                                                    <Image width={370} height={250} src={thumb} alt="" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3><Link href={`/news/${v.id}`}>{lang === "fa" ? v.title_pr : v.title_en}</Link></h3>
                                                    <p className="t_footer"><Link href={`/news/${v.id}`}>{Home.News.readmore}</Link></p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul >
                        </div >
                    </div >
                </div >
                {/* <!-- /Triple Blog Modern Shortcode --> */}

            </div >
        </>
    )
}
