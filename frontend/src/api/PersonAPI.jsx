import axios from 'axios';

const baseURL = 'http://localhost:8080/persons'

export function getPersons() {
  return axios.get(baseURL);
}

export function createPerson(person) {
  return axios.post(baseURL, person);
}

export function updatePerson(person) {
  return axios.put(`${baseURL}/${person.id}`, person);
}

const PersonAPI = {
  getPersons,
  createPerson,
  updatePerson
}

export default PersonAPI
