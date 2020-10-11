import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://books.google.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/38/Google_Books_logo_2015.PNG"
            className="logo"
            alt="googleBooksLogo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Saved">Saved</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;