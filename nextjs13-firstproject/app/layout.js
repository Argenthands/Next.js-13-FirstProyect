import './globals.css'
import NavigationBar from './components/NavicationBar/NavigationBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'My first Next.js 13 app',
    description: 'generate with npx create-next-app@latest --experimental-app',
    keywords: 'nextjs, nextjs13, nextjs13-firstproject, nextjs13-firstproject-app, next.js, next.js13, next.js13-firstproject, next-project',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationBar />
                {children}
                </body>
        </html>
    )
}
