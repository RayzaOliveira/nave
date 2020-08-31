/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import moment from 'moment'

import BackBar from '../../components/BackBar'
import Modal from '../../components/Modal'
import ContentDialog from '../../components/ContentDialog'
import Input from '../../components/Forms/Input'
import Button from '../../components/Button'

import api from '../../services/api'

import './styles.css'

const Edit = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    id: '',
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  })
  const route = useRouteMatch()

  useEffect(() => {
    async function loadNave() {
      setLoading(true)
      const { data } = await api.get(`/navers/${route.params.id}`)
      setLoading(false)

      const { id, name, job_role, project, url } = data

      const birthdate = moment(data.birthdate).format('YYYY-MM-DD')
      const admission_date = moment(data.admission_date).format('YYYY-MM-DD')

      setForm({ id, name, job_role, project, url, birthdate, admission_date })
    }

    loadNave()
  }, [])

  function onCloseModal() {
    setIsOpen(false)
    history.push('/home')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const { name, job_role, project, url } = form

    const admission_date = moment(form.admission_date).format('DD/MM/YYYY')
    const birthdate = moment(form.birthdate).format('DD/MM/YYYY')

    try {
      setLoading(true)
      await api.put(`/navers/${form.id}`, {
        name, job_role, project, url, admission_date, birthdate,
      })
      setLoading(false)
      
      setIsOpen(true)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>
      <div id="page-edit">
        <BackBar title="Editar Naver" />
        <form onSubmit={handleSubmit}>
          
          <div className="fields">
            <fieldset>
              <Input 
                label="Nome" 
                name="name" 
                id="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                required
              />

              <Input 
                label="Data de Nascimento" 
                name="birthdate" 
                id="birthdate" 
                type="date" 
                value={form.birthdate}
                onChange={(event) => setForm({ ...form, birthdate: event.target.value })}
                required
              />

              <Input
                label="Projetos que participou" 
                name="project" 
                id="project" 
                value={form.project}
                onChange={(event) => setForm({ ...form, project: event.target.value })}
                required
              />

            </fieldset>

            <fieldset>
              <Input
                label="Cargo" 
                name="job_role" 
                id="job_role" 
                value={form.job_role}
                onChange={(event) => setForm({ ...form, job_role: event.target.value })}
                required
              />
              
              <Input 
                label="Data de admissao" 
                name="admission_date"
                id="admission_date"
                type="date" 
                value={form.admission_date}
                onChange={(event) => setForm({ ...form, admission_date: event.target.value })}
                required
              />
              
              <Input
                label="URL da foto do Naver" 
                name="url" 
                id="url" 
                value={form.url}
                onChange={(event) => setForm({ ...form, url: event.target.value })}
                required
              />
            </fieldset>
          </div>

          <Button disabled={loading}>
            Salvar
          </Button>
        </form>

      </div>
      <Modal isOpen={isOpen}>
        <ContentDialog
          title="Naver atualizado"
          description="Naver atualizado com sucesso!"
          onClose={onCloseModal}
        />
      </Modal>
    </>
  )
}

export default Edit
