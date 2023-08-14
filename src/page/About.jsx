import React from 'react';
import girl from '../photo/girl.jpg'

const About = () => {
  return (
    <React.Fragment>
       <div className="container-fluid  abouts border border-primary mt-5">
       <div className="row">
       <h1 className='text-center text-white'>About me</h1>
       <p className='text-center text-white who'>Who Am I</p>
     
       <div className="row d-flex align-items-center justify-content-around">
       <div className="col-5">
       <img  width={100+'%'} src={girl}  className='img img-fluid logo_img d1' alt="" srcset="" /> 
       </div>

       <div className="col text-white">
       <h1>I'm Hem Bdr. Pun and I'm a Freelancer</h1>
       <p>And I am 17 years young boy with dynamic and enthusiastic person looking for the job Web Design and Development mostly specializing in front end development. A firm believer in my own abilities, I am also a team player who thrives in a challenging environment.I am a fresher with new and dynamics project ideas. Well-versed in numerous programming languages including HTML5,PHP,MySQL, JavaScript,Python and strong background in project management and customer relations.</p>
       </div>
       
       </div>

       </div>
       </div>
    </React.Fragment>
  )
}

export default About