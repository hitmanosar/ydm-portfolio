import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
        <div className="container  mt-5 p-5 rounded" style={{color: '#032839' , background: '#fbfbfd'}}>
  <h1 className='text-center'>Contact</h1>
  <p className='text-center  who'>Get In Touch</p>

  <div className="row d-flex flex-row justify-content-center   align-item-center" style={{gap: 100+'px'}}>
    <div className="col-4 ">
    <h5>Get in Touch</h5>
<p>If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.</p>

<h5>Name</h5>
<p>Hem Bahadur Pun</p>
<h5>Address</h5>
<p>Pokhara, Nepal</p>
<h5>Email</h5>
<p>mail@gmail.com</p>
    </div>

<div className="col-4 ">
<form style={{width: 100+'%'}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

  </div>
     
        </div>
    </React.Fragment>
  )
}

export default Contact