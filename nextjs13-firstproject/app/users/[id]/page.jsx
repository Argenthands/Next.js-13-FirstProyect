"use client"
import { fetchUser } from "../../../pages/api/api";
//import { useRouter } from "next/router";
import { 
    //useRouter,
    useParams
 } from "next/navigation";
async function UsersPageID(){
    const { id } = useParams();
    const { data } = await fetchUser(id);
    console.log(data)
    // 
    return (
        <>
            <h1>{`User Name: ${data.first_name} ${data.last_name}`}</h1>
        </>
    )
}
export default UsersPageID