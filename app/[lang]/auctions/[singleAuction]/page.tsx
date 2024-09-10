import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import fakepic from "@/public/img/service/single/9.jpg"
import axios from 'axios';
import { gregorianToJalali } from "@/app/tools/dateConvertor"
export default async function page({ params: { lang, singleAuction } }) {

    const response = await axios.get(`http://185.97.117.44:1337/api/auction-tender/${singleAuction}/`);
    const data = response.data;

    return (
        <div className="industify_fn_sidebarpage bg-[#ffffff] mt-[132px]">
            <div className="container">
                <div className="">

                    <div className=" flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-start mt-12 w-full">
                            <h2 className='text-[#D9541f]'>{lang === "fa" ? data.title_pr : data.title_en}</h2>
                            <p>{lang === "fa" ? gregorianToJalali(data.created.substring(0, 10)) : data.created.substring(0, 10)}</p>
                        </div>
                        <div className=" mt-2 flex justify-center">
                            <Image width={500} height={100} src={lang === "fa" ? data.image_url_pr : data.image_url_en} alt="" className='' />
                        </div>

                        <div className="desc_holder mt-6 text-[21px]">
                            <p>{lang === "fa" ? data.body_pr : data.body_en}</p>


                            {data.file_urls_pr || data.file_urls_en ? (
                                <div className='my-10'>
                                    <Link href={`${lang === "fa" ? data.file_urls_pr : data.file_urls_en}`} download={true} target="_blank" rel="noopener noreferrer">
                                        <button className='bg-[#D9541f] text-white p-3 rounded-lg'>{lang === "fa" ? "دانلود فایل" : "Download file"}</button>
                                    </Link>
                                </div>
                            ) : null
                            }
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}
