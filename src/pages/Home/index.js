/* eslint-disable no-restricted-globals */
import React, { useEffect, useState }  from 'react'
import { Link } from 'react-router-dom'

import CardPerfil from '../../components/CardPerfil'
import ContentDialog from '../../components/ContentDialog'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'

import api from '../../services/api'

import './styles.css'

function Home() {
  const [loading, setLoading] = useState(false)
  const [navers, setNavers] = useState([])
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  useEffect(() => {
    async function loadNavers() {
      setLoading(true)
      const { data } = await api.get('/navers')
      setLoading(false)

      setNavers(data)
    }

    loadNavers()
  }, [])

  async function deleteNaver(id) {
    const confirmDelete = confirm('Tem certeza que deseja exluir esse naver?')

    if (!confirmDelete) {
      return
    }

    try {
      await api.delete(`/navers/${id}`)
      
      const naversFiltered = navers.filter(nave => nave.id !== id)

      setNavers(naversFiltered)

      setDialogIsOpen(true)
    } catch (error) {
      alert(error.message)
    }
  }

  function onCloseDialog() {
    setDialogIsOpen(false)
  }

  return (
    <div className="container-home">
      <div className="header-add">
        <h2>Navers</h2>
        <Link to="/home/add">
          Adicionar Naver
        </Link>
      </div>

      {
        loading ? <Loader /> : (
          <div className="container-list">
            {
              navers.map((nave) => (
                <CardPerfil
                  key={nave.id}
                  id={nave.id}
                  admission_date={nave.admission_date}
                  birthdate={nave.birthdate}
                  job_role={nave.job_role}
                  name={nave.name}
                  project={nave.project}
                  url={nave.url}
                  deleteNaver={deleteNaver}
                />
              ))
            }
          </div>
        )
      }

      <Modal isOpen={dialogIsOpen}>
        <ContentDialog
          title="Naver excluído"
          description="Naver excluído com sucesso!"
          onClose={onCloseDialog}
        />
      </Modal>
    </div>
  )
}

export default Home
