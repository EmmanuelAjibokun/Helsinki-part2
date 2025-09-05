import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
    const request = axios
        .get(`${baseUrl}/all`)
        .then(res => {
            console.log(res)
            return res.data
        })

    return request;
}
const getCountry = country => {
    return axios
        .get(`${baseUrl}/name/${country}`)
        .then( res => {
            console.log(res)
            return res;
        })
}

export default { getAll, getCountry };