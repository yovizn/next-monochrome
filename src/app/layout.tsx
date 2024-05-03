import type { Metadata } from "next"
import { GSAP } from "@/components/common/gsap"
import { GeistSans } from "geist/font/sans"

import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: {
        default: "Monochrome®",
        template: "%s - Monochrome®",
    },
    description: "We built your identity website",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={GeistSans.className}>
                <Header />
                {children}
                <Footer />
                <GSAP />
            </body>
        </html>
    )
}
