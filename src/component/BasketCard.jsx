import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
// import { Link} from 'react-router-dom'

const BasketCard = ({title, price, id, deleteFromBasket}) => {
  return (
    <ListGroup.Item className='m-3' variant="success" style={{width:'60%'}}>
        <span>{title} </span>
        <Badge bg="primary" className='p-2'>
            {price}$
        </Badge>
        <Button variant='danger' style={{width:'30px', height: '30px'}} 
    className='position-absolute end-0 p-1 m-1'
    onClick={()=> deleteFromBasket(id)}>
        {' '}
        &#10005;
    </Button>
    </ListGroup.Item>
  )
}

export default 
BasketCard

