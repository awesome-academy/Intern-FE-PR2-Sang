import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

function Footer(props) {
  let listImgFoolter = [
    "../assets/images/img-footer/img-1.webp",
    "../assets/images/img-footer/img-2.webp",
    "../assets/images/img-footer/img-3.webp",
    "../assets/images/img-footer/img-4.webp",
    "../assets/images/img-footer/img-5.webp",
    "../assets/images/img-footer/img-6.webp",
    "../assets/images/img-footer/img-7.webp",
    "../assets/images/img-footer/img-8.webp",
  ];

  let socialIcon = [
    <i className="fab fa-facebook-f"></i>,
    <i className="fab fa-twitter"></i>,
    <i className="fab fa-youtube"></i>,
    <i className="fab fa-behance"></i>,
  ];

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xl={3} sm={12}>
            <div className="footer__item">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </Col>
          <Col xl={3} sm={12}>
            <div className="footer__item">
              <h2>Newsletter</h2>
              <p>Stay update with our latest</p>
              <div className="input-group mb-3 footer__search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append footer__search-btn">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={3} sm={12}>
            <div className="footer__item">
              <h2>Instragram Feed</h2>
              <div className="footer__list-img">
                {listImgFoolter.map((item, index) => {
                  return (
                    <div className="footer__list-img__item" key={index}>
                      <img src={item} alt="imgFooter" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col xl={3} sm={12}>
            <div className="footer__item">
              <h2>Follow Us</h2>
              <p>Let us be social</p>
              <ul className="footer__social">
                {socialIcon.map((item, index) => {
                  return (
                    <li className="footer__social__item" key={index}>
                      <a href="#1">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer__copyright ">
          <p className="text-center">
            Copyright ©2021 All rights reserved | This template is made with{" "}
            <i className="far fa-heart"></i>by <a href="#1">Colorlib</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
