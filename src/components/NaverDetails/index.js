import React from 'react'
import { useHistory } from 'react-router-dom'

import iconDelete from '../../assets/icons/delete-icon.png'
import iconEdit from '../../assets/icons/edit-icon.png'
import iconClose from '../../assets/icons/close-icon.png'

import './styles.css'

const NaverDetails = ({
  url,
  name,
  job_role,
  age,
  timeOfCompany,
  project,
  id,
  handleClose,
  onDelete,
}) => {
  const history = useHistory()

  return (
    <div className="container-dialog-perfil">
      <button className="close-button" onClick={handleClose}>
        <img src={iconClose} alt="Fechar" />
      </button>
      <img src={url} alt="Ilustracao" /> 
      <div className="content-dialog-perfil">
        
        <div className="block-info title">
          <strong>{name}</strong>
          <p>{job_role}</p>
        </div>

        <div className="block-info">
          <strong>Idade</strong>
          <p>{age} anos</p>
        </div>

        <div className="block-info">
          <strong>Tempo de empresa</strong>
          <p>{timeOfCompany} anos</p>
        </div>

        <div className="block-info">
          <strong>Projetos que participou</strong>
          <p>{project}</p>
        </div>

        <div className="buttons">
          <button onClick={() => onDelete(id)}>
            <img src={iconDelete} alt="Excluir" />
          </button>
          <button onClick={() => history.push(`/home/edit/${id}`)}>
            <img src={iconEdit} alt="Editar" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NaverDetails
