import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PersonAPI from "../api/PersonAPI";
import PersonForm from "./PersonForm";

export default function CreatePerson() {
  const navigate = useNavigate()

  function onConfirmContinuation(person) {
    PersonAPI.createPerson(person).then(() => {
      navigate('/persons')
    })
  }

  return (
    <Fragment>
      <PersonForm formTitle="Crear Persona" onConfirmContinuation={onConfirmContinuation} />
    </Fragment>
  )
}
