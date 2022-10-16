import React from 'react'

import NotPizza from '../Assets/img/NotPizza.gif'
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container id='not' className="pt-4">
      <div>
      <h1 className="mb-4">La ruta que intentas consultar no existe 🍕</h1>
      <img className='notFound' src={NotPizza} alt="pizza sufriendo" />
      </div>
    </Container>
  )
}

export default NotFound