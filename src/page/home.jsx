import React from 'react';
import Nav from '../component/Nav';
import About from './About';

const Home = () => {
  return (

    <React.Fragment>
   



{/*      
 <div className="container mt-5">
 <h1 className="text-center" style={{color: '#F11A7B'}}>
    hello from home
  </h1>
 </div> */}

 <div className="container-fluid  bg p-0">
 
  <div style={{position: 'absolute', top: 40+'%', left: 24+'%'}}> 
    <p className='text-white fs-5 fw-bold'>Hello, my name is</p>

   <h1 className='text-white fw-bold name'>Hem Bahadur Pun</h1> 
   <p className='fs-3 text-white fw-bold'>And I'm a Designer</p>


   <button class="cta">
  <span>Hire me</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

  </div>

   <div class="container_scroll">
     
     <div class="mouse">
       <span></span>
     </div>
       
   </div>
 </div>

 <About/>

  <div className="container mt-4">
  <img className='img img-fluid' src="https://th.bing.com/th/id/R.394e3fddc5e09c6dbc5eede8d334c588?rik=ZyJSXBWeSlr3AQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_oFDQgW3nuwI%2fTUenVUDyEcI%2fAAAAAAAADL0%2f8v7lQuF8hv4%2fs1600%2fBig-rock-nature-computer-backgrounds.jpg&ehk=ZX%2fU2eMl9eI15W07XN6IYqLqw%2fGZbzJQEoVem2T%2fgxU%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="" />
  </div>

  </React.Fragment>
   

  )
}

export default Home;