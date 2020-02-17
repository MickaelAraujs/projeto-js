import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Pesquisa from '../components/pesquisa';

//ADICIONAR onChange={props=>setPesquisa(props)} PARA CHAMAR A FUNÇÃO DE PESQUISAR FILME

function Header() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="nav" color="danger" dark expand="md">
        <NavbarBrand tag={Link} to="/">Meus Filmes</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/">inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/movies/acao">Filmes de Ação</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/movies/comedia">Filmes de Comédia</NavLink>
            </NavItem>
          </Nav>
         </Collapse>
         <Pesquisa/>
      </Navbar>
    </header>
  );
}

export default Header;
