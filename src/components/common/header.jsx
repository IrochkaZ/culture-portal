import React from "react";
import PropTypes from "prop-types";
import uniquid from "uniquid";
import { Button, ButtonGroup, Navbar, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import "../../scss/nav.scss";

const Header = ({ setLanguage, lang, pageInfo }) => {
  const { buttons } = pageInfo[lang];
  const path = pageInfo.en.buttons;
  return (
    <header>
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="../">
          <FaHome size="2rem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {path.map((el, i) => (
              <Nav.Link key={uniquid()} href={`/${el.toLowerCase()}`}>
                {buttons[i]}
              </Nav.Link>
            ))}
          </Nav>
          <ButtonGroup aria-label="Basic example">
            <Button type="button" value="ru" onClick={setLanguage}>
              RU
            </Button>
            <Button type="button" value="by" onClick={setLanguage}>
              BY
            </Button>
            <Button type="button" value="en" onClick={setLanguage}>
              EN
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Header.defaultProps = {
  setLanguage: {}
};

Header.propTypes = {
  setLanguage: PropTypes.func,
  lang: PropTypes.string.isRequired,
  pageInfo: PropTypes.shape().isRequired
};

export default Header;
