import React, { Component, Fragment } from 'react'
import PersonAPI from '../api/PersonAPI'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
  }
  componentDidMount() {
    PersonAPI.getPersons().then((res) => {
      this.setState({ persons: res.data })
    })
  }
  render() {
    return (
      <Fragment>
        <h2 className='text-center'>Personas</h2>
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
                      <td>
                        Acción
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Table;