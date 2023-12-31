import React from "react";


import { useState } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import '../style/nav.css';



function Nav() {

  let nav = document.querySelector('.navbar1');

  const [Nav,setNav] = useState(false);



  window.addEventListener('scroll',()=>{
    // console.log(window.scrollY);
  
    if(window.scrollY >= 100){
      setNav(true);
    }
  
    else{
      setNav(false);
    }
  })

  return (

    
    
    <React.Fragment>



      <div className={`container-fluid pc_view navbar1 fixed-top ${Nav ? 'bg_tran' : ''}`}>
        
           <div className="link_con  p-1 d-flex flex-row justify-content-evenly align-items-center">
            
            <div>
              <h1 className="logo">Yadanar</h1>
            </div>
         
           <div className="links d-none d-lg-block d-xl-block d-xxl-block mt-2">
          <span> <a href="#">Home</a></span>

            
<span> <a href="#about">About</a></span>


<span> <a href="#service">Services</a></span>

<span> <a href="#skill">Skills</a></span>

<span> <a href="#project">Projects</a></span>

          </div>
       
       
</div>


        <div className="d-block d-lg-none d-xl-none d-xxl-none">
          
        <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
<label for="page-nav-toggle">
  <svg class="icon--menu-toggle" viewBox="0 0 60 30">
    <g class="icon-group">
      <g class="icon--menu">
        <path d="M 6 0 L 54 0" />
        <path d="M 6 15 L 54 15" />
        <path d="M 6 30 L 54 30" />
      </g>
      <g class="icon--close">
        <path d="M 15 0 L 45 30" />
        <path d="M 15 30 L 45 0" />
      </g>
    </g>
  </svg>
</label>

<nav class="main-navigation">
  <ul>
    <li><a href="#" data-text="Home">Home</a></li>
    <li><a href="#about"  data-text="About">About</a></li>

    <li><a href="#service"  data-text="Services">Services</a> </li>

    <li><a href="#skill"  data-text="Skills">Skills</a> </li>

    <li><a href="#project"  data-text="Projects">Projects</a> </li>


  
  </ul>
</nav>
        </div>

  

      </div>

      

    </React.Fragment>
  );
}

export default Nav;
