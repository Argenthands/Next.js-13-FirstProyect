import styles from './page.module.scss'
import Link from "next/link"
import Weather from "./components/Weather/Weather"
export default function InedxPage() {
    return (
        <div className={styles.InedxPage}>
            <h1>Index Page {"(home)"}</h1>
            <main>
                <Link href="/users">
                    users
                </Link>
            </main>
            <aside>
                <Weather />
            </aside>
        </div>
    )
}

