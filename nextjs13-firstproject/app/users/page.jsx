import Users from "../components/Users/Users"
async function fetchUsers(){
    //const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    return data.data
}

async function UsersPage() {
    const users = await fetchUsers()
    return (
        <>
            <Users users={users} />
        </>
    )
}

export default UsersPage