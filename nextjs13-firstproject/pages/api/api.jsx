import { store } from "../../app/context/store"
async function fetchUsers() {
    const apiUrl = 'https://reqres.in/api/users';
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data.data;
}
const fetchWeather = async (city) => {
    let apiUrl = `/app/api/weather?city=${city}`;
    const res = await fetch(apiUrl);
    console.log(apiUrl)
    const data = await res.json();

    return data;
};
/*
async function getServerSideProps() {
    const users = await fetchUsers();
    serverContext.data = data;
    return {
        props: {
            users
        }
    }
}
*/
export {
    fetchUsers,
    fetchWeather,
}