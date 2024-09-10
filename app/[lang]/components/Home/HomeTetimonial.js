import { Quotes } from "../../../public/svg/icon";

const testimonial = "/img/testimonial/bg.jpg"

export default function HomeTetimonial() {
    return (
        <>
            <div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

                <div className="overlay"></div>

                {/* <!-- Single Testimonial Shortcode --> */}
                <div className="fn_cs_single_testimonial">
                    <div className="container">
                        <div className="inner">
                            <Quotes className="fn__svg" />
                            <div className="content_holder">
                                <p>Hiday Motors needed to build a brand new 28,000 sf facility that would both meet our needs and comply with GMs standards - which seemed daunting, to say the least. Industify alleviated all of our concerns and communicated with us every step of the way. We have received dozens of compliments from our customers, and our employees love the new store!</p>
                                <h3>Steve Lehman</h3>
                                <h5>CEO of Hiday Motors.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Single Testimonial Shortcode --> */}

            </div>
        </>
    )
}
