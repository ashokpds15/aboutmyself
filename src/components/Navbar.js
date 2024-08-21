import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiOutlineStock } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { FcNeutralTrading } from "react-icons/fc";
import { GiChart } from "react-icons/gi";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://ashokpudasaini.blogspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://nepsealpha.com/stock-heat-map-live"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineStock style={{ marginBottom: "2px" }} /> NEPSE Live
                </Nav.Link>
                </Nav.Item>
               
            <Nav.Item>
              <Nav.Link
                href="https://meroshare.cdsc.com.np/#/login"
                target="/meroshare"
                onClick={() => updateExpanded(false)}
              >
                <GiTakeMyMoney style={{ marginBottom: "2px" }} /> Meroshare
                </Nav.Link>
                </Nav.Item>
                
            <Nav.Item>
              <Nav.Link
                href="https://www.investopaper.com/news/list-of-licensed-stock-brokers-in-nepal/"
                target="_blank"
                rel="noreferrer"
              >
                <FcNeutralTrading style={{ marginBottom: "2px" }} /> TMS List
                </Nav.Link>
                </Nav.Item>
                
            <Nav.Item>
              <Nav.Link
                href="https://chukul.com/nepse-charts"
                target="_blank"
                rel="noreferrer"
              >
                <GiChart style={{ marginBottom: "2px" }} /> NEPSE Chart
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
