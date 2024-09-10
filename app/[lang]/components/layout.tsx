import { getDictionary } from '@/lib/dictionary'
import DesktopHeader from './desktop-header'
import Footer from './footer'
import MobileHeader from './Mobile/mobile-header'

export default async function Layout({ children, className, lang }) {

    const { Home } = await getDictionary(lang)

    return (
        <>
            <div className="industify_fn_wrapper_all" data-nav-skin={className}>

                {/* <!-- Wrapper --> */}
                <div className="industify_fn_wrapper">

                    {/* <!-- Header --> */}
                    <DesktopHeader lang={lang} />
                    {/* <!-- /Header --> */}

                    {/* <!-- Mobile Menu --> */}
                    <MobileHeader lang={lang} Home={Home} />
                    {/* <!-- /Mobile Menu --> */}

                    {/* <!-- Preloader --> */}
                    {/* <Preloader /> */}
                    {/* <!-- /Preloader --> */}

                    {children}

                    {/* Site Footer Start */}
                    <Footer lang={lang} />
                    {/* Site Footer End */}

                </div>
            </div>
        </>
    )
}
