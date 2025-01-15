import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './providers/authProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sheconnect',
  description: 'Empowering women entrepreneurs to connect, collaborate, and grow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

