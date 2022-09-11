import React, { Component } from 'react';
import PersonService from '../services/PersonService';

class ListPersonComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    PersonService.getPersons().then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Lista de Personas</h2>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.persons.map(
                  person =>
                    <tr key={person.id}>
                      <td>{person.firstName}</td>
                      <td>{person.lastName}</td>
                      <td>{person.age}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPersonComponent;