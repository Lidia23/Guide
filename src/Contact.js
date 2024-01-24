import './Contact.css';
import Menu from './Menu';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';
import contact from './contact.png'
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [inputValue, setInputValue] = useState('');
  const write = () => {
    setInputValue((prevValue) => prevValue + '@');
  }

  // const [message, setMessage] = useState("");
  // const handleChange = (event) => {
  //     setMessage(event.target.value);
  //   }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Contact_explorEr', 'template_gu6czid', form.current, 'y6_ZFf9vPMapGvlB8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <Menu />
      <main>
        <div id="contact-banner">
          <h1>Contact</h1>
          <div class="url-route">
            <a href="home">Home</a>
            <span> &gt;</span>
            <a href="contact">Contact</a>
          </div>
        </div>
        <section id="contact-list">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <img alt="rounded float-start" src={contact} />
              </div>
              <div class="col-4">
                <h1 class="text-center">Contact Us</h1>
                <form class="row g-3 needs-validation" ref={form} onSubmit={sendEmail} novalidate>
                  <div class="container list">
                    <div class="row">
                      <div class="col-md-8 position-relative">
                        <label for="validationTooltip01" class="form-label">Full name</label>
                        <input type="text" class="form-control" id="validationTooltip01" name="name" required />
                        <div class="invalid-tooltip">
                          Please write your name.
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 position-relative">
                        <label for="validationTooltipUsername" class="form-label">Email</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="validationTooltipUsernamePrepend" onClick={write}>@</span>
                          <Form.Control type="email" class="form-control" id="validationTooltipUsername" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                            aria-describedby="validationTooltipUsernamePrepend" placeholder="name@example.com" name="email" required />
                          <div class="invalid-tooltip">
                            Please write a valid email.
                          </div>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-8 position-relative">
                        <label for="validationTooltip02" class="form-label">Message</label>
                        <textarea class="form-control" id="validationTooltip02" rows="3" name="message" required></textarea>
                        <div class="invalid-tooltip">
                          Please describe brifly what are you looking for.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn col-md-8 contact" type="submit" value="Send">Contact Us</button>
                </form>
              </div>
              <div class="col-sm info">
                <ul className='infolist'>
                  <li class="list">
                    <h4 className='contact'>Contact</h4>
                    <a href="mailto:info@explorer.com" target="_blank" id="nav1">info@explorer.com</a>
                  </li>
                  <li class="list"><a href="tel:+355696547888" id="nav1">+355696547888</a></li>
                  <li class="list">
                    <h4 className='base'>Base in</h4>
                    <a href="https://www.google.com/maps/place/Rruga+Ismail+Qemali,+Tirana,+Albania/@41.3204978,19.813537,17z/data=!3m1!4b1!4m6!3m5!1s0x1350311c62efc20f:0x6d8a0d16ceae6db7!8m2!3d41.3204978!4d19.8161119!16s%2Fg%2F1tpmd9md"
                      target="_blank" id="nav1">
                      Tirana, Albania</a>
                  </li>
                  <li>
                    <div class="btn-group me-2" role="group" aria-label="First group">
                      <a class="btn btn-primary btn-lg btn-floating twitter btn-circle" href="#!" role="button"><i
                        class="bi bi-twitter"></i>
                      </a>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Second group">
                      <a class="btn btn-primary btn-lg btn-floating facebook" href="#!" role="button"><i
                        class="bi bi-facebook"></i>
                      </a>
                    </div>
                    <div class="btn-group me-2" role="group" aria-label="Third group">
                      <a class="btn btn-primary btn-lg btn-floating instagram" href="#!" role="button"><i
                        class="bi bi-instagram"></i>
                      </a>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}