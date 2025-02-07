import { Layout } from '@/components/dom/Layout'
import './global.css'

const title = 'Next.js + Three.js'
const description = 'A minimal starter for Nextjs + React-three-fiber and Threejs.'

/** @type {import('next').Metadata} */
export const metadata = {
  title,
  description,
  robots: 'noindex, nofollow',
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://react-three-next-nine.vercel.app/',
    images: '/icons/share.png',
    siteName: title,
  },
  twitter: {
    card: 'summary',
    site: '@pmndrs',
  },
  icons: {
    icon: '/icons/apple-touch-icon.png',
    apple: [
      { url: '/icons/apple-touch-icon.png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32' },
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
