import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pizza1 from '../Assets/img/pizza1.png'
import pizza2 from '../Assets/img/pizza2.png'
import pizza3 from '../Assets/img/pizza3.png'


function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={pizza1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='titleSlide'>¡¡ Mamma Mia !!</h1>
          <p>Ven por tus exquisitas Pizzas!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={pizza2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Te esperamos</h1>
          <p>En todos nuestros Locales ubicados en Santiago</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={pizza3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Aprovecha!!</h1>
          <p>
           Todas nuestras promociones
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
