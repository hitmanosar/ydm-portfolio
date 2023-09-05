import React from "react";
import girl from "../photo/girl.jpg";
import dive from "../photo/dive.png";
import movie from "../photo/movie.png";
import car from "../photo/car.png";
import rock from "../photo/rock.png";
import tic from "../photo/tic_tac.png";
import dice from "../photo/Screenshot (271).png";
import clock from "../photo/clock.png";
import calculator from "../photo/cal.png";
import first from "../photo/first.png";
import beauty from "../photo/beauty.png";
import post from "../photo/post.png";
import chef from "../photo/chef.png";
import tj from '../photo/tj.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

const Project = () => {
   
    const go = (url)=>{
      window.open(url, '_blank');
    }

  return (
    <React.Fragment>
      <div className="container p-5  mt-5 " id="project">
        <h1 className="text-center text-white">My Projects</h1>

        <p
          className="text-center fw-bold fs-5 who"
          style={{ color: "#66fcf1" }}
        >
          Projects Done
        </p>

        <Swiper
          // slidesPerView={3}
          // spaceBetween={10}
          // loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          // modules={[Pagination, Navigation]}
          // className="mySwiper text-white"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            // when window width is >= 640px
            640: {
             
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
             
              slidesPerView: 1,
            },

            300: {
             
              slidesPerView: 1,
            },
            1024: {
             
              slidesPerView: 3,
            },

          }}
          // autoplay={{
          //   delay: 4500,
          //   disableOnInteraction: false,
          // }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}

         
           
        
          pagination={{
            type: 'fraction',
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper text-white"
        >
          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={dive} class="card-img-top  p-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> ROBA SCUBA</h5>
                <p class="card-texts">
                  Enjoy Scuba Diving With Roba Scuba. This offer a wide variety
                  of scuba diving tours and locations for everyone.Usage(React
                  js).
                </p>
                <button class="ctas" onClick={()=>go('https://osar-dive.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="cards " style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={movie} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DARE OR SCARE!</h5>
                <p class="card-texts">
                  Dare Or Scare is the premiere online destination for movie
                  enthusiasts, providing the latest news and information on
                  casting and development, release dates, trailers, interviews
                  and clips, full movies and more.
                </p>
                <button class="ctas" onClick={()=>go('https://osar-dare.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={car} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">BMW Website</h5>
                <p class="card-texts">
                  BMW is a car website.A liitle bit animation is using
                  there.This cars project was developed with HTML and CSS,JS.
                  Users of this project can see different car models, price,
                  manufacture date, engine mileage, petrol or diesel car, etc..
                </p>
                <button class="ctas" onClick={()=>go('https://osar-carweb.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={rock} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Rock Paper Scissors</h5>
                <p class="card-texts">
                  Rock Paper Scissors is a simple mini game for fun.
                  Languages(HTMl,CSS,Pure JS)
                </p>
                <button class="ctas" onClick={()=>go('https://minirock.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={tic} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Tic Tac Toe</h5>
                <p class="card-texts">
                  Tic Tac Toe is a simple mini game for multiplayer.
                  Languages(HTMl,CSS,Pure JS)
                </p>  
                <button class="ctas" onClick={()=>go('https://osar-tic.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={dice} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Dice</h5>
                <p class="card-texts">Simple Dice Roll(HTMl,CSS,Pure JS)</p>
              
                <button class="ctas"  onClick={()=>go('https://osar-dice.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={clock} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Digital Clock</h5>
                <p class="card-texts">
                  Check your real current time with digital clock.simple
                  animation with neon light. in order to build a simple
                  real-time digital clock.Languages(HTMl,CSS,Pure JS)
                </p>  
                <button class="ctas" onClick={()=>go('https://osar-digital.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={calculator} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Calculator</h5>
                <p class="card-texts">
                  You can use this calculator to perform any type of basic
                  calculation. It has the functionality of (+, -, *, /). You can
                  perform these operations in this calculator. All the
                  functionalities are added with the help of JavaScript and
                  design is made with the help of Html and CSS.
                </p>  
                <button class="ctas" onClick={()=>go('https://osar-calculator.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={beauty} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Beauty Megazine</h5>
                <p class="card-texts">
                  Goodvide is the magazine website.You can visit and get a
                  knowledge about health,technology,beauty,sport and
                  other.Simple using HTML,CSS,JS,Bootstrap.
                </p>  
                <button class="ctas" onClick={()=>go('https://osar-website.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={first} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Simple TEC</h5>
                <p class="card-texts">
                  TEC is Web Development Company.This is my first website.Simple
                  and light portfolio website.This website was build by using
                  HTML,CSS,JS,Bootstrap.
                </p>
                <button class="ctas" onClick={()=>go('https://first-osar-website.netlify.app/')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={post} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Postagram</h5>
                <p class="card-texts">
                  TEC is Web Development Company.This is my first website.Simple
                  and light portfolio website.This website was build by using
                  HTML,CSS,JS,Bootstrap.
                </p>
              
                <button class="ctas" onClick={()=>go('https://github.com/jewelmoe97/project-phase-5')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={chef} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Chef For U</h5>
                <p class="card-texts">
                  TEC is Web Development Company.This is my first website.Simple
                  and light portfolio website.This website was build by using
                  HTML,CSS,JS,Bootstrap.
                </p>
                <button class="ctas" onClick={()=>go('https://github.com/jewelmoe97/dog-bnb')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div class="cards" style={{ background: "rgb(34, 34, 34)" }}>
              <img loading="lazy" src={tj} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bucket List</h5>
                <p class="card-texts">
                  TEC is Web Development Company.This is my first website.Simple
                  and light portfolio website.This website was build by using
                  HTML,CSS,JS,Bootstrap.
                </p>
                <button class="ctas" onClick={()=>go('https://github.com/jewelmoe97/project-phase1 ')}>
                  <span>View Project</span>

                  <i class="fa-solid fa-arrow-right fa-beat mx-2 text-white"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Project;
