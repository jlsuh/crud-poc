import { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as PersonAPI from '../api/PersonAPI'

export default function Table() {
  const [persons, setPersons] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    PersonAPI.getPersons().then((res) => {
      setPersons(res.data)
    }, [])
  }, [])

  function editPerson(personId) {
    navigate(`/persons/edit/${personId}`)
  }

  return (
    <Fragment>
      <h1 className='text-center my-4'>Personas</h1>
      <button className='btn btn-primary mb-3'
        onClick={() => {
          navigate('/persons/new')
        }}
      >
        Crear Persona
      </button>
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
                <td>
                  <button className='btn btn-info'
                    onClick={() => editPerson(person.id)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
