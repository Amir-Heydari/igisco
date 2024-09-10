import Link from 'next/link'
import React from 'react'

export default function HomeCTA() {
    return (
        <>
            <div className="fn_cs_call_to_action">
                <div className="container">
                    <div className="cta_holder">
                        <div className="title_holder">
                            <h3>We will Make Your Dream Come True</h3>
                            <p>We are focused on sustainable business that delivers the best possible project results.</p>
                        </div>
                        <div className="link_holder">
                            <Link href="/contact">Our Responsibility</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
