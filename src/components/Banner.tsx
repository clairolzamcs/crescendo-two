import classNames from "classnames";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "../App.module.scss";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Banner: React.FC = () => {
  const getSwiper = () => {
    const swiper: JSX.Element[] = [];
    for (let index = 0; index <= 18; index++) {
      swiper.push(
        <span className={classNames(style.dot, "mr-2")} key={index}></span>
      );
    }
    return swiper;
  };

  return (
    <>
      <Container
        fluid
        id={style.banner}
        className="h-75 h-md-50 position-relative"
      >
        <Container className="h-100">
          <Row className="h-75 align-content-center">
            <Col id={style["banner-content"]}>
              <h5
                id={style.rpp}
                className={classNames(style.text, "pt-3 pb-5")}
              >
                Research Professional Platform
              </h5>
              <h5 id={style["acme-wealth"]} className={classNames(style.text)}>
                ACME Wealth
              </h5>
              <h1
                id={style["management-platform"]}
                className={classNames(style.text)}
              >
                Management Platforms
              </h1>
              <div id={style["dot-container"]} className={"pb-3"}>
                {getSwiper()}
              </div>
              <ul id={style.list} className={classNames(style.text)}>
                <li>Investment excellence.</li>
                <li>Diversity of thought.</li>
                <li>Organizational strength.</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <img
          alt="desktop-bg"
          id={style["desktop-bg"]}
          className="d-none d-md-block"
          src="/desktop-bg.png"
        />
      </Container>
    </>
  );
};
