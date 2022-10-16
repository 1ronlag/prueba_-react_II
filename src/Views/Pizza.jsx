import { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PizzasContext from '../Context/Context';

const Detail = () => {
    const [pizzaDetail, setPizzaDetail] = useState({});
    const { pizzas, addToCart } = useContext(PizzasContext);
    const { id } = useParams();

const getData = () => {
    const dataPizza = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetail(dataPizza);
  };

  useEffect(() => {
    getData();
  }, [pizzas]);

  return (
    <>
    <Container className='Pizzas'>
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaDetail.img}
                className="img-fluid estilos rounded-start"
                alt={pizzaDetail.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaDetail.name}
                </h5>
                <p className="card-text">{pizzaDetail.desc}</p>
                <ul>
                  {pizzaDetail.ingredients?.map((ingredient, i) => (
                    <li key={i}>
                      🍕{ingredient}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetail.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCart(pizzaDetail)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>

</>
  )
}

export default Detail;