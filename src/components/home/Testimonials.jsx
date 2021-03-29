import React from "react";
import { Carousel } from "react-bootstrap";

import testimonial_1 from "../../media/images/testimonial-1.jpg";
import testimonial_2 from "../../media/images/testimonial-2.jpeg";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2 className="header-mb-primary">Testimonials</h2>
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100 carousel">
            <p className="para-secondary mb-s">
              I have closely worked with him. He has some really fresh talent
              and work ethics. I highly recommend his work.
            </p>
            <div className="carousel_user mb-s">
              <img
                className="carousel_user_img"
                src={testimonial_1}
                alt="testimonial-1"
              />
              <div className="carousel_user_text">
                <h3>Vaishnavi Prem</h3>
                <p>Law Student</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 carousel">
            <p className="para-secondary mb-s">
              Very clean design. He has amazing knowledge of UX. I have always
              been recommended what is best. Whenever any issue strikes on my
              website, he is always available to help. Beautiful work. Yes! I
              highly recommend him.
            </p>
            <div className="carousel_user mb-s">
              <img
                className="carousel_user_img"
                src={testimonial_2}
                alt="testimonial-2"
              />
              <div className="carousel_user_text">
                <h3>Sneha Sharma</h3>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 carousel"></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
