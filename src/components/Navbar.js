import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

const externalLinks = [
  { href: "https://ashokpudasaini.blogspot.com/", label: "Blogs" },
  { href: "https://nepsealpha.com/stock-heat-map-live", label: "NEPSE Live" },
  { href: "https://meroshare.cdsc.com.np/#/login", label: "Meroshare" },
  {
    href: "https://www.investopaper.com/news/list-of-licensed-stock-brokers-in-nepal/",
    label: "TMS List",
  },
  { href: "https://chukul.com/nepse-charts", label: "NEPSE Chart" },
];

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      setNavColour(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky d-flex w-100" : "navbar d-flex w-100"}
      >
        <Navbar.Brand href="/" className="ms-3">
          <img
            src={logo}
            alt="brand"
            style={{
              maxWidth: "6rem",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "4px 4px 8px rgba(255, 255, 255, 0.8)", // White shadow with offset
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ to, label }, index) => (
              <Nav.Item key={index}>
                <Nav.Link as={Link} to={to} onClick={() => setExpand(false)}>
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
            {/* External Links in expanded view */}
            {expand &&
              externalLinks.map(({ href, label }, index) => (
                <Nav.Item key={index}>
                  <Nav.Link href={href} target="_blank" rel="noreferrer">
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Right Sidebar */}
      {!expand && (
        <div className="sidebar">
          <nav className="d-flex flex-column justify-content-center align-items-start">
            {externalLinks.map(({ href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="sidebar-link"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        .sidebar {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 50%; /* Sidebar height is 50% of the viewport */
          padding: 10px;
          background-color: #f8f9fa;
          border-left: 1px solid #ddd;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          width: 10rem; /* Set the width of the sidebar */
          border-radius: 4px; /* Border radius of 4px */
          z-index: 1;
        }

        .sidebar-link {
          display: block;
          margin: 15px 0;
          padding: 10px 20px;
          color: #000;
          text-decoration: none;
          transition: background-color 0.2s ease-in-out;
        }

        .sidebar-link:hover {
          background-color: #e0e0e0;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none; /* Hide sidebar on small screens */
          }
        }
      `}</style>
    </>
  );
}

export default NavBar;
