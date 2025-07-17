import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '@/components/Header'
import { AuthProvider } from '@/contexts/AuthContext/AuthContext'
import { GameProvider } from '@/contexts/GameContext/GameContext'

const industry = localFont({
  variable: '--font-default',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/Industry-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Industry-Ultra.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Game Score Calculator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${industry.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <GameProvider>
            <main className="flex flex-col items-center">{children}</main>
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
