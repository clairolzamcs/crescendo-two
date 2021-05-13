import style from "../App.module.scss";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const AcmeInsights: React.FC = () => {
  return (
    <>
      <Container id={style.insights} className="h-75">
        <Row className="h-100 align-content-center">
          <Col>
            <h5 id={style["acme-insights"]} className={classNames(style.text)}>
              ACME &nbsp;
              <span className="font-weight-bold">Insights </span>
            </h5>
            <p
              id={style["acme-insights-sub"]}
              className={classNames(style.text)}
            >
              How are factors being used around the world?
            </p>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Container>
                  <Row>
                    <Col className={classNames(style["slider-item"], "h-100")}>
                      <div
                        className={classNames(
                          style["image-container"],
                          "my-3 position-relative"
                        )}
                      >
                        <div
                          className={classNames(
                            style["triangle"],
                            style["top"],
                            "position-absolute"
                          )}
                        ></div>
                        <div
                          className={classNames(
                            style["triangle"],
                            style["bottom"],
                            "position-absolute"
                          )}
                        ></div>
                        <img
                          alt="acme-insight"
                          src="/acme-insight.png"
                          className={classNames(style.image, "w-100")}
                        />
                      </div>
                      <h5 className={classNames(style.caption)}>
                        Global Factor Investing Study
                      </h5>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container>
                  <Row>
                    <Col className={classNames(style["slider-item"], "h-100")}>
                      <div
                        className={classNames(
                          style["image-container"],
                          "my-3 position-relative"
                        )}
                      >
                        <div
                          className={classNames(
                            style["triangle"],
                            style["top"],
                            "position-absolute"
                          )}
                        ></div>
                        <div
                          className={classNames(
                            style["triangle"],
                            style["bottom"],
                            "position-absolute"
                          )}
                        ></div>
                        <img
                          alt="acme-insight"
                          src="/acme-insight.png"
                          className={classNames(style.image, "w-100")}
                        />
                      </div>
                      <h5 className={classNames(style.caption)}>
                        Global Factor Investing Study
                      </h5>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <Container>
                  <Row>
                    <Col className={classNames(style["slider-item"], "h-100")}>
                      <div
                        className={classNames(
                          style["image-container"],
                          "my-3 position-relative"
                        )}
                      >
                        <div
                          className={classNames(
                            style["triangle"],
                            style["top"],
                            "position-absolute"
                          )}
                        ></div>
                        <div
                          className={classNames(
                            style["triangle"],
                            style["bottom"],
                            "position-absolute"
                          )}
                        ></div>
                        <img
                          alt="acme-insight"
                          src="/acme-insight.png"
                          className={classNames(style.image, "w-100")}
                        />
                      </div>
                      <h5 className={classNames(style.caption)}>
                        Global Factor Investing Study
                      </h5>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};
