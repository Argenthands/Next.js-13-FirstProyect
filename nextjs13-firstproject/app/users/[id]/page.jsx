
//"use client"
import { fetchUserById } from "../../api/api";
/*import { useRouter } from "next/router";
import { 
    //useRouter,
    useParams
 } from "next/navigation";
 async function getUserById(id){
     const res = await fetch(`https://reqres.in/api/users/${id}`);
     const data = await res.json();
     return data.data;
    }
*/
async function getUser(id){
    const { data } = await fetchUserById(id);
    return data;
}
async function UsersPageID({ params }){
    //const { id } = useParams();
    const data = await getUser(params.id);
    //console.log(data);
    return (
        <div>
            <h1>{`User Name: ${data.first_name} ${data.last_name}`}</h1>
            <h2>{`User Email: ${data.email}`}</h2>
            <img src={data.avatar} alt={data.first_name} />
        </div>
    )
}
export default UsersPageID