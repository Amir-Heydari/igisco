
import Link from 'next/link';

// import { useState } from 'react';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
// import { useLocale, useTranslations } from 'next-intl';
import logo from "../../../public/img/transparent-logo.png"
import LocaleSwitcher from './locale-switcher';
export default async function DesktopHeader({ lang }) {

    // const [isToggled, setToggled] = useState(false);
    // const toggleTrueFalse = () => setToggled(!isToggled);
    const { Home } = await getDictionary(lang)

    return (
        <>
            <div className="industify_fn_header">
                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/">
                            <Image width={67} height={93} className="desktop_logo" src={logo} alt="igisco logo" />
                        </Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                            <li>
                                <Link href="/">{Home.Header.home}</Link>
                            </li >
                            <li>
                                <Link href={`/${lang}/about-us`}>{Home.Header.about}</Link>
                            </li >
                            <li>
                                <Link href={`/${lang}/shareholders`}>{Home.Header.shareholders}</Link>
                            </li >
                            {/* <li className="menu-item-has-children">
                                <Link href="/services">{t('products.products')}</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery">{t('products.main')}</Link></li>
                                    <li><Link href="/404">{t('products.side')}</Link></li >
                                </ul >
                            </li > */}
                            <li>
                                <Link href="/">{Home.Header.products.products}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/news`}>{Home.Header.news}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/blogs`}>{Home.Header.blog}</Link>
                            </li>

                            <li>
                                <Link href={`/${lang}/auctions`}>{Home.Header.auctions}</Link>
                            </li>

                            {/* <li>
                                <Link href="/">{t('download')}</Link>
                            </li > */}
                            {/* <li className="menu-item-has-children">
                                <Link href="/services">Books and articles</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery">Books</Link></li>
                                    <li><Link href="/404">Articles</Link></li >
                                </ul >
                            </li > */}
                            <li>
                                <Link href={`/${lang}/contact`}>{Home.Header.contact}</Link>
                            </li >
                        </ul >
                    </div >
                    <div className="toll_free_lang">

                        <LocaleSwitcher lang={lang} />

                    </div>
                </div >
                {/* <!-- /Header: Bottom Panel --> */}

            </div >
            <div className="my-class"></div>
        </>
    )
}
