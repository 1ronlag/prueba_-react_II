import { createContext, useState, useEffect } from "react";

//  context creation
const PizzasContext = createContext();

// Data Provider 
  const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

//Get Pizzas

useEffect(() => {
  const getPizzas = async () => {
try{
  const res = await fetch("/pizzas.json");
  const pizzas = await res.json();
if (pizzas){
  setPizzas(pizzas);
}
else{
  throw new Error('Something went wrong');
}

} catch (error) {
  // console.log("error en la solicitud", error)
  alert ('No se puede mostrar la informacion solicitada')
}
  };
    getPizzas();
  }, []);

//Buy Cart//
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const decrement = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  console.log(carrito);
  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart, increment, decrement }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

// Export Provider
export { PizzasProvider };

// Export Context
export default PizzasContext;