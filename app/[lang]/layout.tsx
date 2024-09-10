import './globals.css'
import 'swiper/css/effect-fade'
import '../../node_modules/react-modal-video/css/modal-video.css'
import '../../public/css/base.css'
import '../../public/css/custom.css'
import '../../public/css/fontawesome-all.min.css'
import '../../public/css/fontello.css'
import '../../public/css/justified.css'
import '../../public/css/magnific-popup.css'
import '../../public/css/nice-select.css'
import '../../public/css/style.css'
import '../../public/css/swiper.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Layout from '@/app/[lang]/components/layout'
import localFont from 'next/font/local'

const iranSansFont = localFont({ src: '../../public/fonts/Iranian-Sans/Iranian-Sans.woff2' })

export const metadata: Metadata = {
  title: "Iranian Ghadir Iron & Steel Co.",
  description: "تولید کننده آهن اسفنجی",
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} dir={params.lang === "fa" ? "rtl" : "ltr"}>
      <body className={iranSansFont.className}>
        <Layout className={"transdark"} lang={params.lang}>
          <main>
            {children}
          </main>
        </Layout>
      </body>
    </html>
  )
}
