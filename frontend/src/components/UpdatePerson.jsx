import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PersonAPI from "../api/PersonAPI";
import PersonForm from "./PersonForm";

export default function UpdatePerson() {
  const navigate = useNavigate()

  function onConfirmContinuation(person) {
    PersonAPI.updatePerson(person).then(() => {
      navigate('/persons')
    })
  }

  return (
    <Fragment>
      <PersonForm formTitle="Editar Persona" onConfirmContinuation={onConfirmContinuation} />
    </Fragment>
  )
}
