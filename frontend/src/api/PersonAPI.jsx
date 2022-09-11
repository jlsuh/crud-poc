import axios from 'axios';

const baseURL = 'http://localhost:8080/persons'

export function getPersons() {
  return axios.get(baseURL);
}

export function createPerson(person) {
  return axios.post(baseURL, person);
}

const PersonAPI = {
  getPersons,
  createPerson
}

export default PersonAPI
