import { getDictionary } from '@/lib/dictionary';
import Link from 'next/link'

export const metadata = {
    title: 'Contact',
}

export default async function page({ params: { lang } }) {

    const { Pages } = await getDictionary(lang)

    return (
        <>
            <div className="industify_fn_pagetitle  bg-[#ffffff] mt-[132px]">
                <div className="container">
                    <div className="title_holder">
                        <h3>{Pages.Contact.title}</h3>
                    </div>
                </div>
            </div>
            <div className="industify_fn_contact  bg-[#ffffff]">
                <div className="container">
                    <div className="contact_in">

                        <div className="map_holder">
                            {/* <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d382.07590002470465!2d51.41070698308994!3d35.74189284036121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1724783300664!5m2!1sfa!2s" width="100%" height="400" style={{ border: 0 }} loading="lazy" ></iframe>
                        </div>

                        <div className="contact_holder ">
                            <div className="contact_left">
                                <h3>{Pages.Contact.formtitle}</h3>
                                <form className="contact_form" action="/" method="post" autoComplete="off" data-email="ghadirIranian@gmail.com">
                                    {/*  */}
                                    <div className="items">
                                        <div className="item">
                                            <input id="name" type="text" placeholder={Pages.Contact.forminputname} />
                                        </div>
                                        <div className="item">
                                            <input id="email" type="email" placeholder={Pages.Contact.forminputemail} />
                                        </div>
                                        <div className="item">
                                            <textarea id="message" placeholder={Pages.Contact.forminputmessage}></textarea>
                                        </div>
                                        <div className="item">
                                            <Link href="#" id="send_message">{Pages.Contact.formsend}</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact_right">
                                <div className="fn_cs_location_list">
                                    <ul className="list">
                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            {/* <Location className="fn__svg" /> */}
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>{Pages.Contact.headoffice.title}</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>{Pages.Contact.headoffice.address}</li>
                                                        <li>{Pages.Contact.headoffice.tel1}</li>
                                                        <li>{Pages.Contact.headoffice.tel2}</li>
                                                        <li><Link href="mailto:info@igisco.ir">{Pages.Contact.headoffice.email}</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            {/* <Location className="fn__svg" /> */}
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>{Pages.Contact.factory.title}</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>{Pages.Contact.factory.address}</li>
                                                        <li>{Pages.Contact.factory.tel1}</li>
                                                        <li>{Pages.Contact.factory.tel2}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
