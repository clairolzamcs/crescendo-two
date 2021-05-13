import classNames from "classnames";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../App.module.scss";

export const Commitment: React.FC = () => {
  return (
    <>
      <Container
        fluid
        id={style["who-we-are"]}
        className=""
        style={{ backgroundImage: `url('/container.png')` }}
      >
        <Container>
          <Row className="py-5 text-center">
            <Col>
              <h5 className={classNames(style.text, "text-center px-5")}>
                Our Commitment to Professionals
              </h5>
              <p className={classNames(style.text, "text-center")}>
                We help our partners deliver industry leading results with a
                commitment to excellence, thought-provoking insights and
                experienced distribution. We are laser focused on our shared
                goal – helping clients achieve their objectives.
              </p>
              <button
                id={style["contact-us"]}
                type="button"
                className={classNames(
                  style.button,
                  style.text,
                  "btn btn-light"
                )}
              >
                Contact Us
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
