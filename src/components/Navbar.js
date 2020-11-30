import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <Container>
      <Menu pointing secondary size="large" className="navbar__container">
        <Menu.Item position="left">
          <Menu.Item as="a">Logo</Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
        </Menu.Item>

        <Menu.Item position="right">
          <Menu.Item as="a">LinkedIn</Menu.Item>
          <Menu.Item as="a">GitHub</Menu.Item>
          <Menu.Item as="a">Medium</Menu.Item>
        </Menu.Item>
      </Menu>

      <ul className="navbar__menu__mobile">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
