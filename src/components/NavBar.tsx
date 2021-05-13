import classNames from "classnames";
import React from "react";
import { Navbar, Nav, Col, Container, Row } from "react-bootstrap";
import style from "../App.module.scss";

export const NavBar: React.FC = () => {
  return (
    <>
      <Navbar id={style["navbar"]} expand="lg" variant="light" bg="light">
        <Container id={style["mobile-nav"]} className="d-md-none">
          <Row className="w-100">
            <Col></Col>
            <Col className="d-flex justify-content-center">
              <Navbar.Brand href="#">
                <img
                  alt="brand-logo"
                  id={style["brand-logo"]}
                  src="/Logo.png"
                />
              </Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-end">
              <button
                id={style["nav-button"]}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          id={style["desktop-nav"]}
          className="d-none d-md-block"
        >
          <Row className="justify-content-center">
            <Col md="auto">
              <Navbar.Brand href="#">
                <img
                  alt="logo-brand-desktop"
                  id={style["logo-brand-desktop"]}
                  src="/logo-desktop.png"
                />
              </Navbar.Brand>
            </Col>
            <Col
              id={style["brand-title"]}
              md="auto"
              className="d-flex flex-column justify-content-center"
            >
              <h6
                id={style["research-professional"]}
                className={classNames("mb-0 font-weight-light")}
              >
                Research Professional
              </h6>
              <h4
                id={style["platform"]}
                className={classNames("font-weight-bold")}
              >
                Platform
              </h4>
            </Col>
            <Col md="auto" className="d-flex align-items-center">
              <Nav className="mr-auto">
                <Nav.Link
                  className={classNames(style["nav-item"])}
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={classNames(style["nav-item"])}
                  href="#features"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  className={classNames(style["nav-item"])}
                  href="#pricing"
                >
                  Insights
                </Nav.Link>
                <Nav.Link
                  className={classNames(style["nav-item"])}
                  href="#pricing"
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  className={classNames(style["nav-item"])}
                  href="#pricing"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};
