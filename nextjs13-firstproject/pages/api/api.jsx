// Users endpoints
async function fetchUsers() {
    const apiUrl = `/api/users/users`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
}

async function fetchUser(id) {
    const apiUrl = `/api/users/${id}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
}

// Weather endpoints
const fetchWeather = async (city) => {
    let apiUrl = `/api/weather/weather?city=${city}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
};


export {
    // Users endpoints
    fetchUsers,
    fetchUser,
    // Weather endpoints
    fetchWeather,
}