import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link} from 'react-router-dom'

import {Context} from '../index'

const BookCard = ({title, img, id, price, onDelete, pushFromBasket}) => {
  const {users} = useContext(Context)
  const {webStore} = useContext(Context)
  return (
    <Card style={{ width: '20rem' }} className='m-3 position-relative'>
    <Card.Img variant="top" src={process.env.REACT_APP_BASE_URL+img} style={{ width: '150px', height: '200px'}} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {price} $
      </Card.Text>
      { users.loggedIn && (
      <Button variant="success"  onClick={()=> pushFromBasket(id)}>
        {' '}
        В корзину
      </Button>
      )}
      { users.loggedIn && (
      <Link to={"/book/"+id} onClick={()=> {webStore.chosenBook = webStore.getBook(id)}} className='p-lg-3'>Содержание книги</Link>
      )}
    </Card.Body>
    { users.loggedIn && (
    <Button variant='danger' style={{width:'40px', height: '40px'}} 
    className='position-absolute end-0 mt-1 me-1'
    onClick={()=> onDelete(id)}>
        {' '}
        &#10005;
    </Button>
    )}
  </Card>
  )
}

export default 
BookCard