import React from 'react';
import girl from '../photo/girl.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// Import Swiper styles


const Project = () => {

    
  return (
   <React.Fragment>
    <div className="container p-5  mt-5 " id='project'>
 <h1 className='text-center text-white'>My Projects</h1>

 <p className="text-center fw-bold fs-5 who" style={{color: '#66fcf1'}}>Projects Done</p>
 

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
         
          </div></SwiperSlide>
        <SwiperSlide>
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
           
          </div></SwiperSlide>
        <SwiperSlide>
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
          
          </div></SwiperSlide>
        <SwiperSlide>
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
            
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
             
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
            <div className="col">
            <div class="card" >
              <img src={girl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Web Design</h5>
                <p class="card-text">
                  Your Next Web Developer, who is working in Shopify
                  Dropshipping Stores, High Converting Ecommerce stores, Product
                  Page also having Custom code, liquid template design.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
             
             </div>
            </div>
          </div></SwiperSlide>
    
      </Swiper>
  
</div>

   </React.Fragment>
  )
}

export default Project;