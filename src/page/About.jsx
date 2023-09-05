import React from 'react';

import logo from '../photo/logo.jpg';

const About = () => {


   const handleDownloadClick = () => {
    // Replace 'pdf-url.pdf' with the actual URL or path to your PDF file.
    const pdfUrl = require('../photo/RESUME 8-28-23.pdf');

    // Create a temporary anchor element to trigger the download.
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'RESUME 8-28-23.pdf'; // Set the desired download file name.
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <React.Fragment>
       <div className="container-fluid  abouts p-4 mt-5" id='about' >
       <div className="row">
       <h1 className='text-center text-white'>About me</h1>
       <p className='text-center fw-bold fs-5 who' style={{color: '#66fcf1'}}>Who Am I</p>
       </div>
       <div className="row d-flex flex-column flex-lg-row align-items-center justify-content-center custom mt-3">
       <div className="col-12 col-lg-3  text-center text-lg-start">
      <div className="img_container a1">
      <img loading="lazy"  src={logo} width={100+'%'} className='img img-fluid logo_img d1 box' alt="" srcset="" /> 
      <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
      </div>
       </div>

       <div className="col-12 col-lg-5 text-white a2">
       <h3 className='fw-bold '>I am  Yadanar Moe and I am Web Developer</h3>
{/* And I am 17 years young boy with dynamic and enthusiastic person looking for the job Web Design and Development mostly specializing in front end development. A firm believer in my own abilities, I am also a team player who thrives in a challenging environment.I am a fresher with new and dynamics project ideas. Well-versed in numerous programming languages including HTML5,PHP,MySQL, JavaScript,Python and strong background in project management and customer relations. <br /> <br /> */}
       <p className='mt-3 '>
       With a background in data entry, I have transitioned into the world of software
engineering with a fervent enthusiasm for contributing to impactful applications
while embracing a journey of continuous learning and growth. Through my education
and practical experience, I've developed a versatile skill set that spans different
facets of software development. I enjoy merging my technical abilities with a curious
outlook to drive exploration and innovation in the digital domain.</p>

       <button class="button" onClick={handleDownloadClick} type="button">
  <span class="button__text">Download Cv</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>


       </div>
       
       </div>

      
       
       </div>
    </React.Fragment>
  )
}

export default About