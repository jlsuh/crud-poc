import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/persons';

class PersonService {
  getPersons() {
    return axios.get(API_BASE_URL);
  }
}

export default new PersonService();