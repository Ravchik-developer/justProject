import React, { useState, useContext } from 'react'
import { Context } from '../index'
import { Modal, Button, Form } from 'react-bootstrap'

import { loggedInClient } from '../API/index'

import { exposeBook } from '../API/booksAPI'

const AddBookModal = ({ show, onClose }) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [imagePath, setImagePath] = useState('')

    const {webStore} = useContext(Context)
    
    const selectFile = async (e)  => {
        const imageData = new FormData()
        imageData.append('file', e.target.files[0])
        const response = await loggedInClient.post('/file', imageData)
        setImagePath(response.data.filename)
    }
    
    const exposeNewBook = async () => {
        const newBook = {
            title: title,
            genre: genre,
            price: price,
            description: description,
            image: imagePath,
            rating: {
              "rate": 0.0,
              "count": 0
            }
        }
        const response = await exposeBook(newBook)

        // console.log(response.data)
        
        webStore.addBook(response.data)
        onClose()
    }

  return (
    <div>
      <Modal
        show={show}
        onHide={() => onClose()}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Опубликовать книгу на продажу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type='text' placeholder='Название' className='mt-3' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <Form.Control type='text' placeholder='Жанр' className='mt-3' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
            <Form.Control type='text' placeholder='Цена' className='mt-3' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <Form.Control type='text' placeholder='Краткое содержание' className='mt-3' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <Form.Control type='file' className='mt-3' onChange={selectFile}/>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => onClose()}>
            Закрыть
          </Button>
          <Button variant='success' onClick={exposeNewBook}>Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddBookModal
