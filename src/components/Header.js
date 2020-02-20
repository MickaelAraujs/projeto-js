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

function Header() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="nav" color="dark" dark expand="md">
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
            <NavItem>
              <NavLink tag={Link} to="/localizacao">Encontre-nos</NavLink>
            </NavItem>
          </Nav>
         </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
