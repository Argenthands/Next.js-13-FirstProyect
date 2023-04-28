import { store } from "../context/store"
async function fetchUsers() {
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    return data.data;
}

const fetchWeather = async (city) => {
    const apiUrl = `https://wttr.in/${city}?format=j1`;
    return fetch(apiUrl).then((res) => res.json());
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
    fetchWeather,
}