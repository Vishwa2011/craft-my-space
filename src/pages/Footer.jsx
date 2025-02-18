import React from 'react'

const Footer = () => {
  return (
    <>
          {/* <!-- FOOTER START --> */}
          <footer className="site-footer footer-large  footer-dark">
          <div className="footer-social-section bg-secondry">
            <div className="container">
              <div className="footer-social-content">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-top overlay-wraper">
            <div className="overlay-main"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget recent-posts-entry">
                    <h4 >
                       <img src=''/>
                    </h4>
                    <p>
                    Bespoke fitted bedrooms, fitted wardrobes, fitted furniture and kitchens designed and installed by CRAFT MY SPACE.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget widget_about">
                    <h4 className="widget-title  text-uppercase">
                      MENU
                    </h4>
                    <ul>
                      <li >
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Bedrooms</a>                      
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Wardrobes</a>                       
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Living</a>                        
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Kitchens</a>                       
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Home Office</a>                   
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:"#7e878c",lineHeight:'30px'}}>Awkward Spaces</a>                  
                      </li>                  
                    </ul>
                  </div>

                  
                </div>

                {/* <!-- USEFUL LINKS --> */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget widget_services inline-links">
                    <h4 className="widget-title">Useful links</h4>
                    <ul>
                      <li>
                        <a href="javascript:;">About</a>
                        <a href="javascript:;">Articles</a>
                      </li>
                      <li>
                        <a href="javascript:;">Gallery</a>
                        <a href="javascript:;">Service</a>
                      </li>
                      <li>
                        <a href="javascript:;">Blog</a>
                        <a href="javascript:;">Our team</a>
                      </li>
                      <li>
                        <a href="javascript:;">Portfolio</a>
                        <a href="javascript:;">Approach</a>
                      </li>
                      <li>
                        <a href="javascript:;">Contact Us</a>
                        <a href="javascript:;">Case Studies</a>
                      </li>
                      <li>
                        <a href="javascript:;">Career</a>
                        <a href="javascript:;">Clients</a>
                      </li>
                      <li>
                        <a href="javascript:;">FAQ </a>
                        <a href="javascript:;">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <!-- TAGS --> */}
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget widget_address_outer m-b20">
                    <h4 className="widget-title">Contact Us</h4>
                    <ul className="widget_address">
                      <li>
                        92 Princess Road, parkvenue,Greater London, NW18JR,
                        United Kingdom
                      </li>
                      <li>thewebmaxdemo@gmail.com</li>
                      <li>(+0091) 912-3456-073</li>
                      <li>(+0091) 912-3456-084</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- NEWSLETTER --> */}
              </div>
            </div>
          </div>
          {/* <!-- FOOTER COPYRIGHT --> */}
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-logo-bar">
                <a href="index.html">
                  <img src="assets/images/logo-dark.png" alt="" />
                </a>
                <span className="copyrights-text">
                  © 2019 Your Company. Designed By thewebmax.
                </span>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- FOOTER END -->        */}
    </>
  )
}

export default Footer
