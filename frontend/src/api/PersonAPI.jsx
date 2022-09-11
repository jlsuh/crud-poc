import axios from 'axios';
import { Component } from 'react';

class PersonAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.API_BASE_URL = 'http://localhost:8080/persons'
    }
    getPersons() {
        return axios.get(this.API_BASE_URL)
    }
}

export default new PersonAPI();