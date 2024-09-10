import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
import shareholder1 from "@/public/img/shareholders/shareholders-chadormalu.jpg"
import shareholder2 from "@/public/img/shareholders/shareholders-aliaji.jpg"
import shareholder3 from "@/public/img/shareholders/shareholders-ghadir2.jpg"
import shareholder4 from "@/public/img/shareholders/shareholders-shahrood.jpg"
import Link from "next/link"

export const metadata = {
    title: 'سهامداران',
}

export default async function page({ params: { lang } }) {

    const { Pages } = await getDictionary(lang)

    return (
        <div className="industify_fn_principles mt-[132px] bg-[#ffffff]">
            <div className="container">
                <div className="principles">
                    <ul>
                        <li>
                            <Link href="https://www.chadormalu.com/">
                                <div className="item" id="Honesty">
                                    <div className="item_left flex justify-center">
                                        <Image src={shareholder1} width={260} height={168} alt='chadormalu' />
                                    </div>
                                    <div className="item_right flex flex-col gap-5 flex flex-col gap-5">
                                        <h4>{Pages.Shareholders.shareholder1.title}</h4>
                                        <p>{Pages.Shareholders.shareholder1.des}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.iasco.ir/">
                                <div className="item" id="Passion">
                                    <div className="item_left flex justify-center">
                                        <Image src={shareholder2} width={260} height={168} alt='chadormalu' />
                                    </div>
                                    <div className="item_right flex flex-col gap-5">
                                        <h4>{Pages.Shareholders.shareholder2.title}</h4>
                                        <p>{Pages.Shareholders.shareholder2.des}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://gimidco.com/">
                                <div className="item" id='Quality'>
                                    <div className="item_left flex justify-center">
                                        <Image src={shareholder3} width={260} height={168} alt='chadormalu' />
                                    </div>
                                    <div className="item_right flex flex-col gap-5">
                                        <h4>{Pages.Shareholders.shareholder3.title}</h4>
                                        <p>{Pages.Shareholders.shareholder3.des}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="http://shahroodsteel.ir/">
                                <div className="item">
                                    <div className="item_left flex justify-center">
                                        <Image src={shareholder4} width={260} height={168} alt='chadormalu' />

                                    </div>
                                    <div className="item_right flex flex-col gap-5">
                                        <h4>{Pages.Shareholders.shareholder4.title}</h4>
                                        <p>{Pages.Shareholders.shareholder4.des}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}