import React from 'react';
import Nav from '../component/Nav';
import About from './About';
import Services from './Services';
import Project from './Project';
import Contact from './Contact';
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


const Home = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);



  return (

    <React.Fragment>
   



{/*      
 <div className="container mt-5">
 <h1 className="text-center" style={{color: '#F11A7B'}}>
    hello from home
  </h1>
 </div> */}
 
<div className="container-fluid bg p-0" >
   

  <div style={{position: 'absolute', top: 40+'%', left: 24+'%'}}> 
    <p className='text-white fs-5 fw-bold'>Hello, my name is</p>

   <h1 className='text-white fw-bold name'>Hem Bahadur Pun</h1> 
   <p className='fs-3 text-white fw-bold'>And I'm a Designer</p>


   <button class="cta">
  <span>Hire Me</span>
  {/* <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg> */}
<i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
</button>

  </div>

   <div class="container_scroll">
     
     <div class="mouse">
       <span></span>
     </div>
       
   </div>
 </div>

 <About/>

 <Services/>

 <Project/>

<Contact/>


  {/* <div className="container mt-4">
  <img className='img img-fluid' src="https://th.bing.com/th/id/R.394e3fddc5e09c6dbc5eede8d334c588?rik=ZyJSXBWeSlr3AQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_oFDQgW3nuwI%2fTUenVUDyEcI%2fAAAAAAAADL0%2f8v7lQuF8hv4%2fs1600%2fBig-rock-nature-computer-backgrounds.jpg&ehk=ZX%2fU2eMl9eI15W07XN6IYqLqw%2fGZbzJQEoVem2T%2fgxU%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="" />
  </div> */}

  </React.Fragment>
   

  )
}

export default Home;