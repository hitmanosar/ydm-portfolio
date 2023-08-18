import React from 'react'

const Foot = () => {
  return (
   <React.Fragment>
    

<footer className="new_footer_area bg_color mt-5">
            <div className="new_footer_top">
            <div className="container">
                <h1 className='text-center'>Connect With me On</h1>
                <div>
                <ul id="media" className='d-flex flex-row justify-content-center align-items-center list-group mt-3' style={{gap: 10+'px'}}>
            
            <li  >
                <a href="https://www.facebook.com/heemal.himalpun" target="-blank"><i className="fa-brands fa-facebook-f fs-3"></i>
                </a>
            </li>
            
            <li  >
                <a href="https://www.youtube.com/channel/UC1ryLxQzkWeFtply1F1kxwA " target="-blank"><i className="fa-brands fa-youtube fs-3"></i></a>
            </li>
    
             <li  >
                <a href="https://twitter.com/HimalPu94127169" target="-blank"><i className="fa-brands fa-twitter fs-3"></i></a>
            </li>
            
            <li  >
                <a href="https://www.instagram.com/smokuspoon" target="-blank"><i className="fa-brands fa-instagram fs-3"></i></a>
            </li>
           
            <li  >
                <a href="#"><i className="fa-brands fa-whatsapp fs-3"></i></a>
            </li>
        </ul>
                </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: 0.2+'s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                    <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                    <p className="mchimp-errmessage" style={{display: 'none'}}></p>
                                    <p className="mchimp-sucmessage" style={{display: 'none'}}></p>
                                </form>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"  style={{visibility: 'visible', animationDelay: 0.4+'s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"  style={{visibility: 'visible', animationDelay: 0.6+'s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: 'visible', animationDelay: 0.8+'s' , animationName: 'fadeInLeft'}}>
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#" className="fab fa-facebook" ></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                    <a href="#" className="fab fa-pinterest"></a>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                {/* </div> */}
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                    {/* -lg-6 col-sm-7 */}
                        <div className="col">
                            <p className="mb-0 f_400 text-center">© cakecounter Inc.. 2023 All rights reserved.</p>
                        </div>
                        {/* <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="http://cakecounter.com" target="_blank">CakeCounter</a></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
   </React.Fragment>
  )
}

export default Foot