import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HomeAbout from "./components/Home/HomeAbout";
import HomeBlog from "./components/Home/HomeBlog";
import HomeNews from "./components/Home/HomeNews";
import HomePrinciples from "./components/Home/HomePrinciples";
import Auctions from "./components/Home/Auctions";
import HomeProject from "./components/Home/HomeProject";
import HomeServices from "./components/Home/HomeServices";
import HomeSlider from "./components/Home/HomeSlider";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  // const { page } = await getDictionary(lang)

  return (
    <>
      <HomeSlider lang={lang} />

      {/* <!-- Principles Modern --> */}
      <HomePrinciples lang={lang} />
      {/* <!-- /Principles Modern --> */}

      {/* Auctions */}
      <Auctions lang={lang} />
      {/* Auctions */}

      {/* <!-- News Section --> */}
      <HomeNews lang={lang} />
      {/* <!-- /News Section --> */}

      {/* Services */}
      <HomeServices lang={lang} />
      {/* /Services */}

      {/* <!-- Blog Section --> */}
      <HomeBlog lang={lang} />
      {/* <!-- /Blog Section --> */}

      {/* <!-- About Section --> */}
      <HomeAbout lang={lang} />
      {/* <!-- /About Section --> */}

      {/* <!-- Project Sticky Full --> */}
      <HomeProject lang={lang} />
      {/* <!-- /Project Sticky Full --> */}
    </>
  )
}
