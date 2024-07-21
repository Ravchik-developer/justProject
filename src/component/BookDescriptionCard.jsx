import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { Link} from 'react-router-dom'

const BookDescriptionCard = ({title, img, id, price ,description, pushFromBasket}) => {
  return (
    <Card style={{ width: '40rem' }} className='m-3 position-relative'>
    <Card.Img variant="top" src={process.env.REACT_APP_BASE_URL+img} style={{ width: '300px', height: '400px'}}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        { price }
      </Card.Text>
      <Card.Text>
        { description }
      </Card.Text>
      <Button variant="success"  onClick={()=> pushFromBasket(id)}>
        {' '}
        В корзину
      </Button>
    </Card.Body>
    {/* <Button variant='danger' style={{width:'40px', height: '40px'}} 
    className='position-absolute end-0 mt-1 me-1'
    onClick={()=> onDelete(id)}>
        {' '}
        &#10005;
    </Button> */}
  </Card>
  )
}

export default BookDescriptionCard