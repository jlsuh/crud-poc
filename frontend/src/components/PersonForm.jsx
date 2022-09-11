import { Fragment, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PersonForm(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()
  const formTitle = props.formTitle
  const onConfirmContinuation = props.onConfirmContinuation
  const { id } = useParams()

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

  function onConfirm(e) {
    e.preventDefault()
    const idAsNumber = +id
    const ageAsNumber = +age
    const person = {
      id: idAsNumber,
      firstName,
      lastName,
      age: ageAsNumber
    }
    console.log(JSON.stringify(person, null, 1))
    onConfirmContinuation(person)
  }

  return (
    <Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center mt-4'>{formTitle}</h2>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label>Nombre:</label>
                  <input placeholder='Nombre' name='firstName' className='form-control mb-4' type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <label>Apellido:</label>
                  <input placeholder='Apellido' name='lastName' className='form-control mb-4' type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <label>Edad:</label>
                  <input placeholder='Edad' name='age' className='form-control mb-4'
                    value={age}
                    onChange={e => setMaxAge(e.target.value)}
                    onKeyPress={e => verifyIsDigit(e)}
                  />
                </div>
                <div className='float-end'>
                  <button className='btn btn-success'
                    onClick={e => onConfirm(e)}
                  >
                    Aceptar
                  </button>
                  <button className='btn btn-danger mx-2' type='button'
                    onClick={() => {
                      navigate('/persons')
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
