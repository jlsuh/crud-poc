import { Fragment, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PersonForm(props) {
  const navigate = useNavigate()
  const MAX_AGE = 127
  const MIN_AGE = 1
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const { id } = useParams()
  const formTitle = props.formTitle
  const onConfirmContinuation = props.onConfirmContinuation

  function verifyIsDigit(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  function setMaxAge(age) {
    if (age > MAX_AGE) {
      setAge(MAX_AGE)
    } else if (age < MIN_AGE) {
      setAge('')
    } else {
      setAge(age)
    }
  }

  function isEmptyField(str, emptyMsgStr, index) {
    const emptyFieldMessages = Array.from(document.getElementsByClassName("empty-field-message"))
    let isEmptyField = false
    if (str === '') {
      emptyFieldMessages[index].innerHTML = '*Ingresar ' + emptyMsgStr
      isEmptyField = true
    } else {
      emptyFieldMessages[index].innerHTML = ''
    }
    return isEmptyField
  }

  function validateNonEmptyFields() {
    let isEmptyFirstName = isEmptyField(firstName, 'nombre', 0)
    let isEmptyLastName = isEmptyField(lastName, 'apellido', 1)
    let isEmptyAge = isEmptyField(age, 'age', 2)
    return isEmptyFirstName || isEmptyLastName || isEmptyAge
  }

  function onConfirm(e) {
    e.preventDefault()
    if (validateNonEmptyFields()) {
      return
    }
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
                  <label htmlFor='firstName'>Nombre:</label>
                  <input className='form-control' type='text' name='firstName' id='firstName' placeholder='Nombre'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <div className='empty-field-message'></div>
                  <label htmlFor='lastName'>Apellido:</label>
                  <input className='form-control' type='text' name='lastName' id='lastName' placeholder='Apellido'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                  <div className='empty-field-message'></div>
                  <label htmlFor='age'>Edad:</label>
                  <input className='form-control' type='number' name='age' id='age' placeholder='Edad'
                    value={age}
                    onChange={e => setMaxAge(e.target.value)}
                    onKeyPress={e => verifyIsDigit(e)}
                  />
                  <div className='empty-field-message'></div>
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
