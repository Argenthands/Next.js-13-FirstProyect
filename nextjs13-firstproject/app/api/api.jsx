import { store } from "../context/store"

// Users endpoints
async function fetchUsers() {
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    return data.data;
}

async function fetchUserById(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data;
}

// Weather endpoints
const fetchWeather = async (city) => {
    const apiUrl = `https://wttr.in/${city}?format=j1`;
    try{
        const data = fetch(apiUrl).then((res) => res.json());
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getServerSideProps() {
    const users = await fetchUsers();
    serverContext.data = data;
    return {
        props: {
            users
        }
    }
}

export {
    fetchUsers,
    fetchUserById,
    fetchWeather,
}