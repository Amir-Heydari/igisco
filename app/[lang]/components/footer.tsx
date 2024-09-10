import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../public/img/footer/logo-fa.png"
import bg from '@/public/img/footer/bg.jpg'
export default async function Footer({ lang }) {

    const { Home } = await getDictionary(lang)


    return (
        <>
            <footer className="industify_fn_footer">
                <div className="top_footer">
                    <Image
                        src={bg}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="z-[-1]"
                    />
                    {/* <!-- TRIPLE WIDGET --> */}
                    <div className="footer_widget">
                        <div className="">
                            <div className="inner">
                                <ul className="widget_area">
                                    <li>
                                        <div className="item flex justify-center">
                                            <div className="logo">
                                                <Link href="/"><Image width={321} height={90} src={logo} alt="igisco logo" /></Link>
                                            </div>
                                        </div>
                                    </ li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>{Home.Footer.headoffice.title}</span>
                                            </div>
                                            <div className="industify_fn_widget_business_hours">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.addresstitle}</span>
                                                                <span className="hours">{Home.Footer.headoffice.address}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.teltitle}</span>
                                                                <span className="hours">{Home.Footer.headoffice.tel1}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.teltitle}</span>
                                                                <span className="hours">{Home.Footer.headoffice.tel2}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="wid-title">
                                                <span>{Home.Footer.factory.title}</span>
                                            </div>
                                            <div className="industify_fn_widget_business_hours">
                                                <div>
                                                    <ul>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.addresstitle}</span>
                                                                <span className="hours">{Home.Footer.factory.address}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.teltitle}</span>
                                                                <span className="hours">{Home.Footer.factory.tel1}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="day_item">
                                                                <span className="day">{Home.Footer.teltitle}</span>
                                                                <span className="hours">{Home.Footer.factory.tel2}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul >
                            </div >
                        </div >
                    </div >
                    {/* <!-- /TRIPLE WIDGET --> */}
                </div >
            </footer >
        </>
    )
}
