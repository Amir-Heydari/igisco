import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import fakepic from '@/public/img/service/single/9.jpg'
import Image from 'next/image'
import axios from 'axios'

export const metadata = {
    title: 'مناقصات',
}

const fakeAuctions = ["1", "2", "3", "4", "5", "6"]

export default async function page({ params: { lang } }) {

    const response = await axios.get('http://185.97.117.44:1337/api/auction-tender/');
    const data = response.data;

    const { Pages } = await getDictionary(lang)


    return (
        <div className="industify_fn_sidebarpage  bg-[#ffffff] mt-[132px]">
            <div className="container" >
                <div className="s_inner mt-10">
                    <ul className="industify_fn_service_list">
                        {
                            data.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <div className="item">
                                            <div className="item_in">
                                                <div className="img_holder">
                                                    <div className="abs_img ">
                                                        <Image
                                                            src={lang === "fa" ? v.image_url_pr : v.image_url_en}
                                                            alt="ghadir iranian"
                                                            layout="fill"
                                                            objectFit="cover"
                                                            quality={100}
                                                        />
                                                    </div>
                                                    <Link href={`auctions/${v.id}`}></Link>
                                                </div>
                                                <div className="title">
                                                    <h3><Link href={`auctions/${v.id}`}>{lang === "fa" ? v.title_pr : v.title_en}</Link></h3>
                                                    <p>{lang === "fa" ? v.short_Description_pr : v.short_Description_en}</p>
                                                </div>
                                                <div className="read_more">
                                                    <Link href={`auctions/${v.id}`}>{Pages.Auctions.readmore}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="clearfix"></div>

                    <div className="industify_fn_pagination">
                        <ul>
                            <li className="active"><span className="current">1</span></li>
                            <li><Link href="#">2</Link></li>
                            <li className="view"><p>Viewing page 1 of 2</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
}
