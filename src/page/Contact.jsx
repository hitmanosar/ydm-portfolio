import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f7turie', 'template_y7aeq8p', e.target, '5VQ1-jP42PL5Rw7hc')
      .then((result) => {
        console.log(result.text);
        

        Swal({
          title: 'Good job!',
          text: 'Your message has been successfully send',
          icon: 'success', // You can use 'success', 'error', 'warning', 'info', etc.
          confirmButtonText: 'Okay',
        });
      }, (error) => {
        console.log(error.text);
        Swal({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error', // Use 'error' icon for error messages
          confirmButtonText: 'OK',
       
        });
      });
  };


  return (
    <React.Fragment>
        <div className="container  p-5 rounded text-white" id='contact'>
  <h1 className='text-center'>Contact</h1>
  <p className='text-center  who'>Get In Touch</p>

  <div className="row d-flex flex-column flex-lg-row mx-auto justify-content-center   align-item-center" style={{gap: 50+'px'}}>
    <div className="col-10 col-lg-4 ">
    <h5>Get in Touch</h5>
<p>If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can.</p>

<h5>Name</h5>
<p>Yadanar Moe</p>
<h5>Address</h5>
<p>NewYork</p>
<h5>Email</h5>
<p>jewelmoe997@gmail.com</p>
    </div>

<div className="col-10 col-lg-4">
<form style={{width: 100+'%'}} onSubmit={sendEmail}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="user_email"/>
    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    {/* <label for="exampleInputPassword1" className="form-label">Password</label>

    <input type="password" className="form-control" id="exampleInputPassword1"/> */}
     <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
  </div>
  <div className="mb-3  d-flex flex-row">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    <div className="checkbox-wrapper-12">
  <div className="cbx">
    <input id="cbx-12" type="checkbox"/>
    <label for="cbx-12"></label>
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo-12">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
        <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
      </filter>
    </defs>
  </svg>
</div>
    <label className="form-check-label mx-2" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn"  style={{background: '#66fcf1'}}>Send</button>
</form>
</div>

  </div>
     
        </div>
    </React.Fragment>
  )
}

export default Contact