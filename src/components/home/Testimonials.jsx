import React from 'react'
import { Carousel } from 'react-bootstrap';

import testimonial_1 from "../../media/images/testimonial-1.jpg"

export default function Testimonials() {
    return (
        <div className="testimonials">
        <h2 className="header-mb-primary">Testimonials</h2>
            <Carousel>
  <Carousel.Item>
    <div className="d-block w-100 carousel">
    <p className="para-secondary">I have closely worked with him. He has some really fresh talent and work ethics. One of the best experiences working with him. I highly recommend his work.</p>
    <div className="carousel_user">
    <img className="carousel_user_img" src={testimonial_1} />
    <div className="carousel_user_text">
      <h3>Vaishnavi Prem Sharma</h3>
    <p>BA LLB</p>
    </div>
    
    </div>
      
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div
      className="d-block w-100 carousel"
    ></div>

  </Carousel.Item>
  <Carousel.Item>
    <div
      className="d-block w-100 carousel"
    ></div>

  </Carousel.Item>
</Carousel>
        </div>
    )
}
