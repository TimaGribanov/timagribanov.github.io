import {Noto_Serif, Shippori_Mincho} from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin-ext', 'cyrillic-ext'],
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  style: ['normal']
})

export const metadata = {
  title: 'tima gribanov',
  description: 'Personal website for Tima Gribanov',
  creator: 'Tima Gribanov',
  metadataBase: 'https://timagribanov.com',
  keywords: ['Tima Gribanov', 'web development', 'translations'],
}

export default async function RootLayout({params, children}) {
  const {lang} = await params
  return (
    <html lang={lang}>
    <body className={`${notoSerif.className} ${shipporiMincho.className}`}>
    {children}
    </body>
    </html>
  )
}
