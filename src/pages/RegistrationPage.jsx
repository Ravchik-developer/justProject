import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index'

import { client } from '../API/index'
import { register } from '../API/userAPI'

export const RegistrationPage = () => {
  const [first_name, setFirst_Name] = useState('')
  const [last_name, setLast_Name] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [avatarPath, setAvatarPath] = useState('')

  const {users} = useContext(Context)

  const selectFile = async (e) => {
    const avatarData = new FormData()
    avatarData.append('file', e.target.files[0])
    const response = await client.post('/file', avatarData)
    setAvatarPath(response.data.filename)
  }

  const registerUser = async () => {
    const user = {
      email: email,
      username: username,
      password: password,
      role: "user",
      first_name: first_name,
      last_name: last_name,
      avatar: avatarPath,
    }
    try {
      const response = await register(user)
      users.setLoggedIn(true); 
      navigate('/main')
    } catch (error) {
      alert('Ошибка! Проверьте введеные данные!')
    }
  }

  const navigate = useNavigate()
  return (
    <Container className='d-flex justify-content-center align-item-center'>
      <Form 
        className='bg-dark bg-opacity-10 p-3 mt-3 rounded' 
        style={{width: '40%', minWidth: '500px'}}
      >
        <h2>Регистрация</h2>
        <Form.Control type="text" className='mt-3' placeholder="Имя" value={first_name} onChange={(e)=>setFirst_Name(e.target.value)}/>
        <Form.Control type="text" className='mt-3' placeholder="Фамилия" value={last_name} onChange={(e)=>setLast_Name(e.target.value)}/>
        <Form.Control type="text" className='mt-3' placeholder="Имя пользователя" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <Form.Control type="text" className='mt-3' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <Form.Control type="password" className='mt-3' placeholder="Пароль" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <Form.Control type="file" className='mt-3' onChange={selectFile}/>

        <div className='d-flex justify-content-end align-item-start mt-3'>

          <Button variant='success' className='mt-3' onClick={registerUser}>
            {' '}
            Зарегистрироваться
          </Button>

        </div>
      </Form>
    </Container>
  )
}
