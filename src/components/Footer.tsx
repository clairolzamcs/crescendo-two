import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import style from "../App.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(faLinkedinIn, faTwitter, faFacebook, faEnvelope);

export const Footer: React.FC = () => {
    return (
        <>
        <Container id={style["mobile-footer"]} className="pb-3 d-md-none">
        <Row>
          <Col
            id={style["footer-brand-logo"]}
            xs={12}
            className="d-flex justify-content-center mb-3 py-3"
          >
            <img alt="footer" src="/footer-logo.png" />
          </Col>
          <Col xs={6}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Privacy Policy
            </button>
          </Col>
          <Col xs={6}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Terms of Use
            </button>
          </Col>
          <Col xs={12}>
            <p id={style["site-links"]} className={classNames("text-center")}>
              Site Links
            </p>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Home
            </button>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              About Us
            </button>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Insights
            </button>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Events
            </button>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Due Diligince
            </button>
          </Col>
          <Col xs={12}>
            <button
              type="button"
              className={classNames(style.button, "w-100", "btn btn-primary")}
            >
              Contact Us
            </button>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        id={style["desktop-footer"]}
        className="d-none d-md-block"
      >
        <Container className="py-3">
          <Row>
            <Col>
              <h6 className="mb-0">Call us at 111-222-3333</h6>
              <h6>for more information</h6>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <p className="mb-0 mr-2">Social Share</p>
              <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "facebook"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "linkedin-in"]} />
              <FontAwesomeIcon className="mr-2" icon={["far", "envelope"]} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
    )
}