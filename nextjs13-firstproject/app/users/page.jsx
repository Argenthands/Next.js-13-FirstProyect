import Users from "../components/Users/Users"
import { fetchUsers } from "../api/api"


async function UsersPage() {
    const users = await fetchUsers()
    return (
        <>
            <Users users={users} />
        </>
    )
}

export default UsersPage