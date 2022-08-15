import React from 'react';
import './testimonials.css';
import Ioana from '../../assets/images/ioana.png';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={Ioana} alt="testimonial"/>
          </div>
          <h2>Ioana Popescu</h2>
            <h3>Marketing Services Director -  Ioana managed Daniel directly</h3>
            <small className="client__review">
              Daniel has been with Harte Hanks Romania for almost 5 years and it was definitely a great collaboration. He is tech-savvy, seeking new self-development opportunities and always going the extra mile when needed. Maybe one of his best assets is that he got involved in helping other teams with small software development tasks to ease their work and he was a real team player on which you can rely. He has been flexible and adapted easily to changes in organization and job requirements.  Would be happy to have him part of our team again.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials