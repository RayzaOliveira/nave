import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import Modal from '../Modal'
import NaverDetails from '../NaverDetails'

import iconDelete from '../../assets/icons/delete-icon.png'
import iconEdit from '../../assets/icons/edit-icon.png'

import  './styles.css'

const CardPerfil = ({
  id,
  admission_date,
  birthdate,
  job_role,
  name,
  project,
  url,
  deleteNaver,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()

  function handleClose() {
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(true)
  }

  function calcYears(date) {
    return moment().year() - moment(date).year()
  }

  const age = calcYears(birthdate)
  const timeOfCompany = calcYears(admission_date)

  return (
    <>
      <div className="container-card-perfil">
        <img className="avatar" onClick={handleOpen} src={url} alt="Ilustracao" />

        <div className="card-footer">
          <strong>{name}</strong>
          <span>{job_role}</span>
          <div className="buttons">
            <button onClick={() => deleteNaver(id)}>
              <img src={iconDelete} alt="Excluir" />
            </button>
            <button onClick={() => history.push(`/home/edit/${id}`)}>
              <img src={iconEdit} alt="Editar" />
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen}>
        <NaverDetails
          age={age}
          handleClose={handleClose}
          id={id}
          job_role={job_role}
          name={name}
          project={project}
          timeOfCompany={timeOfCompany}
          url={url}
          onDelete={deleteNaver}
        />
      </Modal>
    </>
  )
}

export default CardPerfil
