'use client'
// import 'mmenujs/style';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from '../locale-switcher';
import logo from "@/public//img/transparent-logo.png";

export default function MobileHeader({ lang, Home }) {


    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)


    return (
        <>
            <div className="industify_fn_mobilemenu_wrap">
                {/* <!-- LOGO & HAMBURGER --> */}
                <div className="logo_hamb">
                    <div className="in">
                        <div className="menu_logo">
                            <Link href="/">
                                <Image width={67} height={93} className="desktop_logo" src={logo} alt="igisco logo" />
                            </Link>
                        </div>
                        <div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <!-- /LOGO & HAMBURGER --> */}
                {/* <!-- MOBILE DROPDOWN MENU --> */}
                <div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
                    <div>
                        <nav >
                            <ul className="mmenu">
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
                                {
                                    lang === "fa" ? (
                                        <li>
                                            <Link href={`/${lang}/auctions`}>{Home.Header.auctions}</Link>
                                        </li>
                                    ) : (null)
                                }
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
                                <li>
                                    <LocaleSwitcher lang={lang} />
                                </li >
                            </ul >
                        </nav >
                    </div >
                </div >
                {/* <!-- /MOBILE DROPDOWN MENU --> */}
            </div >
        </>
    )
}
