import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import logo from '../Assets/img/mammamia.png'
import { useContext } from "react";
import PizzasContext from "../Context/Context";


const NavBar = () => {

  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    <Navbar fixed='top' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>  <img className='logo mx-1 ' src={logo} alt="icono" /> </Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={setActiveClass} end to='/' ><p className='nav-home mx-3 text-decoration-none'>Home</p></NavLink>
        <NavLink className={setActiveClass} to='/Carrito'><p className='nav-carrito'>Carrito</p></NavLink>
    <Container>  <p className='Total'> Total: ${total}</p> </Container>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar