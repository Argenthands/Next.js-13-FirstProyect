"use client"
import { useRouter } from "next/navigation";
function UsersPageID(){
    const router = useRouter();
    console.log(router)
    return (
        <>
            <h1>User ID:{"text"}</h1>
        </>
    )
}
export default UsersPageID