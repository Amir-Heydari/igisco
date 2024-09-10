'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
      {i18n.locales.filter(x => x !== lang).map(anotherLocale => {
        return (
          <li key={anotherLocale}>
            <Link
              href={redirectedPathName(anotherLocale)}
              className='rounded-md border bg-black px-3 py-2 text-white'
            >
              <span className="current uppercase">{anotherLocale}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
