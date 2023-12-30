import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navbar from '@/components/Navbar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Xtudy',
  description: 'The next space where you grow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Navbar/>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
