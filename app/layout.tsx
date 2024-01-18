import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Life Finance Sacco Management App',
  description: 'Developed by TITech Africa Software Engineers. "The Best Way to Increase Your Savings in 2024: The 52 Week Money Challenge"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

     <html lang="en">
       <body className={inter.className}>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        {children}
        </ThemeProvider>
        </body>
     </html>

    </ClerkProvider>
  )
}
