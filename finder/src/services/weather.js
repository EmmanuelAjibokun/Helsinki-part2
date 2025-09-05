import axios from "axios";

const baseUrl = 'http://api.weatherapi.com/v1'
const api_key = import.meta.env.VITE_API_KEY;

const getWeather = (city) => {
    // https://api.weatherapi.com/v1/current.json?q=london
    const request = axios
        .get(`${baseUrl}/current.json?key=${api_key}&q=${city}`)
        .then(res => res.data)
    return request;
}

export default { getWeather };