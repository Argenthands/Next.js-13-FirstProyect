import styles from "./Users.module.scss"
import Link from "next/link"
//import Image from 'next/image'
function Users({ users }) {
    return (
        <ul className={styles.Users}>
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`users/${user.id}`}>
                        <h5>
                            {user.first_name} {user.last_name}
                        </h5>
                        <p>
                            {user.email}
                        </p>
                    </Link>
                    {/*<Image src={user.avatar} alt={user.first_name} width={100} height={100} />*/}
                    <img src={user.avatar} alt={user.first_name} width={100} height={100} />
                </li>
            ))}
        </ul>
    )
}

export default Users