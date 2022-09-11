import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePerson() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  function verifyIsDigit(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  function setMaxAge(age) {
    if (age > 127) {
      setAge(127)
    } else if (age < 1) {
      setAge('')
    } else {
      setAge(age)
    }
  }

  function createPerson(e) {
    e.preventDefault()
    let ageAsNumber = +age
    let person = {
      firstName,
      lastName,
      ageAsNumber
    }
    console.log("Person" + JSON.stringify(person))
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>Crear Persona</h2>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>Nombre:</label>
                  <input placeholder='Nombre' name='firstName' className='form-control' type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <label>Apellido:</label>
                  <input placeholder='Apellido' name='lastName' className='form-control' type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <label>Edad:</label>
                  <input placeholder='Edad' name='age' className='form-control'
                    value={age}
                    onChange={e => setMaxAge(e.target.value)}
                    onKeyPress={e => verifyIsDigit(e)}
                  />
                </div>
                <button className='btn btn-success'
                  onClick={e => createPerson(e)}
                >
                  Crear
                </button>
                <button className='btn btn-danger' type='button'
                  onClick={() => {
                    navigate('/persons')
                  }}
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
