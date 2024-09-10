import { Certificate, Checked, Stars } from "../../../public/svg/icon";
import Link from "next/link";

const rightImage = "/img/service/right-image.jpg"

export default function HomeWhyChooseUs() {
    return (
        <>
            <div className="service_section">

                {/* <!-- About with Rating Shortcode --> */}
                <div className="fn_cs_about_with_rating">
                    <div className="container">
                        <div className="awr_inner">
                            <div className="left_part">
                                <div className="title_holder">
                                    <h3>Why choose our services?</h3>
                                    <p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
                                    <p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
                                </div>
                                <div className="signature">
                                    <Certificate className="fn__svg" />
                                    <p>We have a<br />ISO Certificate.</p>
                                </div>
                            </div>
                            <div className="right_part">
                                <div className="r_inner">
                                    <div className="top_section">
                                        <div className="badge_holder">
                                            <div className="badge_left">
                                                <div className="b_title">
                                                    <h3>World&apos;s Leading Industry<br />Corporation</h3>
                                                </div>
                                                <div className="b_desc"><span className="year">47</span><span className="text">Years of Experience</span></div>
                                            </div>
                                            <div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
                                        </div>
                                        <div className="rating_holder">
                                            <div className="r_header"></div>
                                            <div className="r_footer"></div>
                                            <Link href="#"></Link>
                                            <Stars className="fn__svg" />
                                            <h3 className="rating_number">9.7</h3>
                                            <h3 className="rating_text">Customer Rating</h3>
                                        </div>
                                    </div>
                                    <div className="bottom_section">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Best talent in the industry business.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>One of the most expirienced company.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>We have completed over 3000 projects.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Most dedicated and passionate team.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Company has over 2000 workers.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About with Rating Shortcode --> */}

            </div>
        </>
    )
}
