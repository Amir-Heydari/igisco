import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
import logo from "@/public//img/about/igisco.jpg"

export const metadata = {
    title: 'درباره ما',
}

export default async function page({ params: { lang } }) {

    const { Pages } = await getDictionary(lang)

    return (
        <div className="industify_fn_principles mt-[132px] bg-[#ffffff]">
            <div className="container">
                <div className="principles">
                    <ul>
                        <li>
                            <div className="item" id="Honesty">
                                <div className="item_left">
                                    <Image width={300} height={200} src={logo} alt="igisco" />
                                </div>
                                <div className="item_right">
                                    <h4>{Pages.About.title}</h4>
                                    <p>{Pages.About.des1}</p>
                                    <p>{Pages.About.des2}</p>
                                    <p>{Pages.About.des3}</p>
                                    <p>{Pages.About.projects.first}</p>
                                    <p>{Pages.About.projects.second}</p>
                                    <p>{Pages.About.projects.third}</p>
                                    {
                                        lang === "fa" ? (
                                            <>
                                                <h3>افتخارات کسب شده توسط شرکت آهن و فولاد غدیر ایرانیان</h3>
                                                <p>شرکت آهن و فولاد غدیر ایرانیان با اتکا بر توانمندسازی­‌های خود و در راستای آرمان و اهداف استراتژیک علاوه بر دستاورد­های تولیدی در سه سال گذشته در ظرفیت اسمی بالغ بر 800  هزار تن در سال موفق به کسب دستاوردها و افتخاراتی به شرح زیر گردیده است.</p>
                                                <p>1 – گواهینامه مدیریت کیفیت (ISO 9001 - 2008)</p>
                                                <p>2 – گواهینامه مدیریت زیست محیطی ( 2004 – 14001 ISO)</p>
                                                <p>3 – سیستم مدیریت ایمنی و بهداشت صنعتی (2007 – 18001 OHSAS )</p>
                                                <p>4 – گواهینامه سیستم مدیریت یکپارچه -  IMS</p>
                                                <p>5 – کسب تندیس سیمین در سومین جایزه ملی پروژه برتر ایران (1390 – 1391 )</p>
                                                <p>6 – دریافت لوح سپاس تولید ملی ، افتخار ملی از خانه صنعت معدن تجارت استان یزد و استانداری استان یزد به عنوان واحد سرمایه­‌گذاری و اشتغال­‌آفرین استان در سال 1391</p>
                                                <p>7 – جایزة بهترین کیفیت محصول آهن اسفنجی از انجمن کیفیت ایران</p>
                                                <p>8 – دریافت لوح تضمین کیفیت محصول صادراتی، از انجمن کیفیت محصولات فولادی اتحادیه اروپا در سال 1391</p>
                                                <p>9 – کسب نشان تلاشگران دو ستاره در فرآیند ارزیابی، بهره‌وری معادن و صنایع معدنی ایران از ایمیدرو در سال 1392</p>
                                                <p>9 – کسب نشان تلاشگران دو ستاره در فرآیند ارزیابی، بهره‌وری معادن و صنایع معدنی ایران از ایمیدرو در سال 1392</p>
                                                <p>10  - دریافت نشان تعالی سازمان در مدیریت بحران اقتصادی</p>
                                                <p>11 – دریافت لوح تقدیر نهمین اجلاس سران و مدیران نمونه و تاثیر‌گذار در صنعت و اقتصاد کشور ( NAPEC )</p>
                                                <p>12- کسب نشان تعهد به تعالی در یازدهمین فرآیند جایزه ملی تعالی سازمانی</p>
                                                <p>13-  انتخاب و معرفی شرکت آهن و فولاد غدیر ایرانیان همراه با  شرکتهای فولاد خوزستان، فولاد خراسان، فولاد مبارکه و ذوب آهن توسط ایمیدرو به عنوان 5 شرکت برگزیده بهره‌­ور ایران در جشنواره شاخص­‌های بهره­‌وری ایمیدرو</p>
                                            </>
                                        ) : (<></>)
                                    }
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}