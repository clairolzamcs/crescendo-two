import style from "../App.module.scss";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const UpcomingInsights: React.FC = () => {
    return (
      <>
      <Container id={style.events} className="py-5">
        <Row>
          <Col>
            <h4 id={style["upcoming-insights"]}>
              Upcoming &nbsp;
              <span className="font-weight-bold">Insights </span>
            </h4>
            <p
              id={style["upcoming-insights-sub"]}
              className={classNames(style.text)}
            >
              At ACME, we're dedicated to learning connecting, and exploring
              opportunities.
            </p>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div
                  className={classNames(
                    style["event-item"],
                    "py-5 px-3 position-relative"
                  )}
                >
                  <div
                    className={classNames(
                      style["event-when"],
                      "position-absolute w-100 d-inline-flex"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.bottom)}
                    ></div>
                    <div
                      className={classNames(
                        style.date,
                        "d-flex flex-column text-center"
                      )}
                    >
                      <p
                        className={classNames(style.month, "font-weight-light")}
                      >
                        Jan
                      </p>
                      <p className={classNames("font-weight-bold")}>28</p>
                    </div>
                  </div>
                  <h4 className={classNames(style.details)}>
                    Insight Exchange Network
                  </h4>
                  <p className={classNames(style.details)}>
                    Join us for this conference showcasing innovation...
                  </p>
                  <button
                    type="button"
                    className={classNames(
                      style.button,
                      style.text,
                      style["view-event-details"],
                      "btn btn-light"
                    )}
                  >
                    View Event Details
                  </button>
                  <div
                    className={classNames(
                      style.location,
                      "w-100 text-right position-absolute d-inline-flex justify-content-between"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.top)}
                    ></div>
                    <p className="font-weight-bold mr-2 mb-0">
                      Chicago,&nbsp;
                      <span className="font-weight-light">IL</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={classNames(
                    style["event-item"],
                    "py-5 px-3 position-relative"
                  )}
                >
                  <div
                    className={classNames(
                      style["event-when"],
                      "position-absolute w-100 d-inline-flex"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.bottom)}
                    ></div>
                    <div
                      className={classNames(
                        style.date,
                        "d-flex flex-column text-center"
                      )}
                    >
                      <p
                        className={classNames(style.month, "font-weight-light")}
                      >
                        Jan
                      </p>
                      <p className={classNames("font-weight-bold")}>28</p>
                    </div>
                  </div>
                  <h4 className={classNames(style.details)}>
                    Insight Exchange Network
                  </h4>
                  <p className={classNames(style.details)}>
                    Join us for this conference showcasing innovation...
                  </p>
                  <button
                    type="button"
                    className={classNames(
                      style.button,
                      style.text,
                      style["view-event-details"],
                      "btn btn-light"
                    )}
                  >
                    View Event Details
                  </button>
                  <div
                    className={classNames(
                      style.location,
                      "w-100 text-right position-absolute d-inline-flex justify-content-between"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.top)}
                    ></div>
                    <p className="font-weight-bold mr-2 mb-0">
                      Chicago,&nbsp;
                      <span className="font-weight-light">IL</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={classNames(
                    style["event-item"],
                    "py-5 px-3 position-relative"
                  )}
                >
                  <div
                    className={classNames(
                      style["event-when"],
                      "position-absolute w-100 d-inline-flex"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.bottom)}
                    ></div>
                    <div
                      className={classNames(
                        style.date,
                        "d-flex flex-column text-center"
                      )}
                    >
                      <p
                        className={classNames(style.month, "font-weight-light")}
                      >
                        Jan
                      </p>
                      <p className={classNames("font-weight-bold")}>28</p>
                    </div>
                  </div>
                  <h4 className={classNames(style.details)}>
                    Insight Exchange Network
                  </h4>
                  <p className={classNames(style.details)}>
                    Join us for this conference showcasing innovation...
                  </p>
                  <button
                    type="button"
                    className={classNames(
                      style.button,
                      style.text,
                      style["view-event-details"],
                      "btn btn-light"
                    )}
                  >
                    View Event Details
                  </button>
                  <div
                    className={classNames(
                      style.location,
                      "w-100 text-right position-absolute d-inline-flex justify-content-between"
                    )}
                  >
                    <div
                      className={classNames(style.triangle, style.top)}
                    ></div>
                    <p className="font-weight-bold mr-2 mb-0">
                      Chicago,&nbsp;
                      <span className="font-weight-light">IL</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
      </>
        
    )
}