import "./globals.css"
import "./styles.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Navbar from "./components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Braian Braga | Braaaaaaaga | Front end Developer",
  description: "Factor by Braaaaaaaga"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
