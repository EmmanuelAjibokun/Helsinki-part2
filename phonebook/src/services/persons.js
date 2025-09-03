// Single Responsibility Principle to extract communication with the backend in a separate module
import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(res => res.data);
}

const addPerson = newPersons => {
    const request = axios.post(baseUrl, newPersons);
    return request.then(res => res.data);
}

export default { getAll, addPerson };