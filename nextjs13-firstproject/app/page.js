import Link from "next/link"
import Weather from "./components/Weather/Weather"
export default function InedxPage() {
    return (
        <>
            <h1>Index Page</h1>
            <main>
                <Link href="/users">
                    users
                </Link>
            </main>
            <aside>
                <Weather />
            </aside>
        </>
    )
}

