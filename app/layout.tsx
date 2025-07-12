import { Special_Elite, Karla, Inconsolata } from 'next/font/google'
import "./globals.css";

const specialElite = Special_Elite({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-title'
})

const karla = Karla({ 
  subsets: ['latin'],
  variable: '--font-secondary'
})

const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  variable: '--font-display'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${specialElite.variable} ${karla.variable} ${inconsolata.variable}`}>
      <body>{children}</body>
    </html>
  )
}