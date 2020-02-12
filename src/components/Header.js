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

function Header() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="nav" color="danger" dark expand="md">
        <NavbarBrand href="/">Meus Filmes</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Filmes de Ação</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Filmes de Comédia</NavLink>
            </NavItem>
          </Nav>
         </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
