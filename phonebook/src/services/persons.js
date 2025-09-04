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

const deletePerson = personId => {
    const request = axios.delete(`${baseUrl}/${personId}`)
        .then(response => {
            return response.data;
        })
    return request;
}

const updatePerson = person => {
    const request = axios.put(`${baseUrl}/${person.id}`, person)
        .then(res => {
            return res.data;
        })
    return request;
}

export default { getAll, addPerson, deletePerson, updatePerson };