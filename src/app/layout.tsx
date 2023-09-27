import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-14 bg-gradient-to-r from-[#18625e] to-[#0e3836]' lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
