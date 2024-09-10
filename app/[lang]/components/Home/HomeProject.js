import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";

import portfolio1 from "@/public/img/mining/mine-polasari.jpg"
import portfolio2 from "@/public/img/mining/mine-sorgah.jpg"
import portfolio3 from "@/public/img/mining/mine-mesetorbat.jpg"
import thumb from "@/public/img/thumb/700-500.jpg"

export default async function HomeProject({ lang }) {

    const { Home } = await getDictionary(lang)

    return (
        <>
            <div className="fn_cs_project_sticky_full">
                <div className="inner">
                    <div className="left_part">
                        <div className="fn_cs_sticky_section">
                            <h3 className="text-[#BCBCBC]">{Home.Miningactivities.title}</h3>
                            <p>{Home.Miningactivities.des1}</p>
                            <p>{Home.Miningactivities.des2}</p>
                            {/* <Link href="/portfolio">View All Projects</Link> */}
                        </div>
                    </div>
                    <div className="right_part">
                        <div className="fn_cs_sticky_section">
                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Image width={700} height={500} src={thumb} alt="" />
                                            <div className="abs_img ">
                                                <Image
                                                    src={portfolio1}
                                                    alt="ghadir iranian"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="text-white">{Home.Miningactivities.minig1.title}</h3>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig1.location}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig1.method}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig1.status}</span>
                                            {/* <p>
                                                <Link href="/portfolio/portfolioSinglePage1">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Image width={700} height={500} src={thumb} alt="" />
                                            <div className="abs_img ">
                                                <Image
                                                    src={portfolio2}
                                                    alt="ghadir iranian"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="text-white">{Home.Miningactivities.minig2.title}</h3>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig2.location}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig2.method}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig2.status}</span>
                                            {/* <p>
                                                <Link href="/portfolio/portfolioSinglePage1">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Image width={700} height={500} src={thumb} alt="" />
                                            <div className="abs_img ">
                                                <Image
                                                    src={portfolio3}
                                                    alt="ghadir iranian"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    quality={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="text-white">{Home.Miningactivities.minig3.title}</h3>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig3.location}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig3.method}</span>
                                            <span style={{ fontSize: "16px" }}>{Home.Miningactivities.minig3.status}</span>
                                            {/* <p>
                                                <Link href="/portfolio/portfolioSinglePage1">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p> */}
                                        </div>
                                    </div>
                                </li>

                            </ul >
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
