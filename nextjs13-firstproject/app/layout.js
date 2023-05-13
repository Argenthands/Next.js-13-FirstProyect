import './globals.scss'
import NavigationBar from './components/NavicationBar/NavigationBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
//nextjs13-firstproject\app\assets\programmer_software_developer.ico
export const metadata = {
    title: {
        default: 'First Next.js 13 app',
        template: '%s',
    },
    description: 'generate with npx create-next-app@latest --experimental-app',
    keywords: ['nextjs, nextjs13, nextjs13-firstproject, nextjs13-firstproject-app, next.js, next.js13, next.js13-firstproject, next-project'],
    authors: [{name: "Alejandro David Benolol", url: ""}],
    creator: "Alejandro David Benolol",
    publisher: "Alejandro David Benolol",
    site_name: "First Next.js 13 app",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimagenindex: true,
            'max-video-preview:': 'none',
            'max-image-preview:': 'large',
        },
    }
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
