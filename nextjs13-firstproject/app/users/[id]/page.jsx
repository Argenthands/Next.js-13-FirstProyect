"use client"
//import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
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