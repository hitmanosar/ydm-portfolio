import React from "react";
import girl from "../photo/girl.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import "../style/card.css";

const Services = () => {
  const [load, setload] = useState(false);

  return (
    <React.Fragment>
      <div
        className="container-fluid mt-5 abouts  p-4  d-flex align-items-center  flex-column"
        id="service"
      >
        <div className="row">
          <h1 className="text-center text-white">My services</h1>
          <p
            className="text-center fw-bold fs-5 who"
            style={{ color: "#66fcf1" }}
          >
            What I Provide
          </p>
        </div>

        <div
          className="row d-flex flex-row align-items-stretch mt-3 justify-content-center "
          style={{ gap: 10 + "px" }}
        >
          <div className="col-3 text-center ">
            <div className="h-100">
              {/* width: 18 + "rem" , */}
              <div
                class="card p-3 text-white cards h-100"
                style={{ background: "#222" }}
              >
                {/* <img src={girl} class="card-img-top" alt="..." /> */}

                <i class="fas fa-laptop-code web" aria-hidden="true"></i>
                <div class="card-body">
                  <h5 class="card-title"> Web Design</h5>
                  <p class="card-text">
                    Your Next Web Developer, who is working in Shopify
                    Dropshipping Stores, High Converting Ecommerce stores,
                    Product Page also having Custom code, liquid template
                    design.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 text-center">
            <div className="h-100">
              <div
                class="card p-3 text-white cards h-100"
                style={{ background: "#222" }}
              >
                <i class="fas fa-user-secret web" aria-hidden="true"></i>
                <div class="card-body">
                  <h5 class="card-title"> User Secret</h5>
                  <p class="card-text">
                    I ensures that, there is no sensitive data included in the
                    source code and are stored outside of the project folder.
                    And all the data which is stored by User Secrets is not
                    encrypted.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 text-center">
            <div className="h-100">
              <div
                class="card p-3 text-white cards h-100"
                style={{ background: "#222" }}
              >
                <i class="fas fa-code  web" aria-hidden="true"></i>
                <div class="card-body">
                  <h5 class="card-title"> Apps Design</h5>
                  <p class="card-text">
                    I encompasses both the user interface(UI) & user
                    experience(UX). The overall style of the app, including
                    things like the colour scheme, font selection, and the types
                    of buttons and widgets which will use.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-white mt-5 " id="skill">
        <h1 className="text-center">My Skills</h1>
        <p
          className="text-center fw-bold fs-5 who"
          style={{ color: "#66fcf1" }}
        >
          What I Know?
        </p>
        <div
          className="row  mt-3  d-flex flex-row justify-content-center align-items-center"
          style={{ gap: 20 + "px" }}
        >
          <div className="col-4 ">
            <div>
              <h5> INTERNSHIP</h5>
              <p>#Company Name "Where You work"</p>
              <p>#Company Name "Where You work"</p>
            </div>

            <div className="mt-5">
              <h5>PROJECT</h5>
              <p>Portfolio (HTML, CSS, js, Bootstraps)</p>
              <p>eCommerce Website (Shopify liquid-code, HTML, CSS)</p>
              <p>QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</p>
              <p>Fully Responsive Design Email Subscribe form</p>
              <p>Blog (HTML, CSS, Bootstraps)</p>
              <p>Currently Working on a Messaging App (Like WhatsApp)</p>
            </div>

            <div className="mt-5">
              <h5>DEVELOPMENT SKILLS</h5>
              <p>
                I'm familiar & work on a daily basis with HTML, CSS, JavaScript,
                Bootstrap, React js and other modern frameworks.
              </p>
            </div>

            <button class="cta">
              <span>Hire me</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="col-4">
            <ScrollTrigger
              onEnter={() => setload(true)}
              onExit={() => setload(false)}
            >
              {load && (
                <>
                  <ProgressBar
                    completed={90}
                    animateOnRender={true}
                    bgColor="#f06529"
                    customLabel="HTML"
                    height={20 + "px"}
                    borderRadius={1 + "px"}
                    transitionDuration="2s"
                  />

                  <ProgressBar
                    className="mt-3"
                    completed={80}
                    animateOnRender={true}
                    bgColor="#264DE4"
                    customLabel="CSS"
                    height={20 + "px"}
                    borderRadius={1 + "px"}
                    transitionDuration="2s"
                   
                  />


<ProgressBar
                    className="mt-3"
                    completed={75}
                    animateOnRender={true}
                    bgColor="#563d7c"
                    customLabel="BootStrap"
                    height={20 + "px"}
                    borderRadius={1 + "px"}
                    transitionDuration="2s"
                   
                  />

                  <ProgressBar
                    className="mt-3"
                    completed={70}
                    animateOnRender={true}
                    bgColor="#f0db4f"
                    customLabel="JavaScript"
                    height={20 + "px"}
                    borderRadius={1 + "px"}
                    transitionDuration="2s"
                    labelColor="#323330"
                    
                  />



                  <ProgressBar
                    className="mt-3"
                    completed={60}
                    animateOnRender={true}
                    bgColor="#61dbfb"
                    customLabel="ReactJs"
                    height={20 + "px"}
                    borderRadius={1 + "px"}
                    transitionDuration="2s"
                    labelColor="#323330"
                   
                  />
                </>
              )}
            </ScrollTrigger>
          </div>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Services;
