import { Fragment, useState, useEffect } from 'react'
import * as PersonAPI from '../api/PersonAPI'

export default function Table() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    PersonAPI.getPersons().then((res) => {
      setPersons(res.data)
    }, [])
  }, [])

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
            {persons.map(person =>
              <tr key={person.id}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
                <td>Acción</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
