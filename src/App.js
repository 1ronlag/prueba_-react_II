

import NavBar from './Components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Views/Home';
import NotFound from "./Views/NotFound";
import Carrito from './Views/Carrito';
import {PizzasProvider} from "./Context/Context";
import Pizza from './Views/Pizza'

function App() {
  return (
    <>

      <BrowserRouter>
      <PizzasProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pizza/:id" element={<Pizza />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </PizzasProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
