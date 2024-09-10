import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import thumb from '@/public/img/thumb/500-560.jpg'
import aboutpic from '@/public/img/about/igisco.jpg'
export default async function HomeAbout({ lang }) {

    const { Home } = await getDictionary(lang)

    return (
        <>
            <div className="about_section">

                {/* <!-- About Shortcode --> */}
                <div className="fn_cs_about">
                    <div className="container">
                        <div className="a_inner">
                            <div className="leftpart">
                                <div className="title_holder">
                                    <h3 className="title">{Home.About.aboutustitle}</h3>
                                    <p>{Home.About.aboutusdespart1}</p>
                                    <p>{Home.About.aboutusdespart1}</p>
                                </div>
                                {/* <div className="sign_holder">
                                    <h3 className="name">Alan Michaelis</h3>
                                    <p className="occ">Chief Executive</p>
                                </div> */}
                            </div>
                            <div className="rightpart">
                                <div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                    <div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                        <span className="span1"></span>
                                        <span className="span2"></span>
                                        <Image width={500} height={560} src={thumb} alt="" style={{ overlay: 0 }} />
                                    </div>
                                    <div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
                                        <Image width={500} height={500} src={thumb} alt="" />
                                        <div className="abs_img ">
                                            <Image
                                                src={aboutpic}
                                                alt="ghadir iranian"
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                        <img src="img/thumb/500-560.jpg" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About Shortcode --> */}

            </div>
        </>
    )
}
