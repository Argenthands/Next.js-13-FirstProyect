//import styles from "../styles"
import Users from "../components/Users/Users"
import { fetchUsers } from "../api/api"


async function UsersPage() {
    const users = await fetchUsers()
    return (
        <div >
            <Users users={users} />
        </div>
    )
}

export default UsersPage