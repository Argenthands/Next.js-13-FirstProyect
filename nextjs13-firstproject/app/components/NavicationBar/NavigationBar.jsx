import Link from "next/link"
import styles from "./NavigationBar.module.css"

function NavigationBar() {
    return (
        <nav>
            <ul className={styles.NavBar}>
                <li className={styles.NavBarElement}>
                    <Link href="/" className={styles.NavBarLink}>
                        Home
                    </Link>
                </li>
                <li className={styles.NavBarElement}>
                    <Link href="/about" className={styles.NavBarLink}>
                        About
                    </Link>
                </li>
                <li className={styles.NavBarElement}>
                    <Link href="/services" className={styles.NavBarLink}>
                        Services
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar