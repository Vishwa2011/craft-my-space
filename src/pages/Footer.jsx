import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Footers = () => {
  return (
    <>
          {/* <!-- FOOTER START --> */}
          <footer className="site-footer footer-large  footer-dark">
          <div className="footer-social-section bg-secondry">
            <div className="container">
              <div className="footer-social-content">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
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
                       <ChevronRightIcon /> <a href="/fitted-bedroom" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Bedrooms</a>                      
                      </li>
                      <li>
                      <ChevronRightIcon /> <a href="/FittedWardrobes" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Wardrobes</a>                       
                      </li>
                      <li>
                      <ChevronRightIcon /> <a href="/FittedLiving" style={{color:"#7e878c",lineHeight:'30px'}}>Fitted Living</a>                        
                      </li>
                      <li>
                      <ChevronRightIcon />  <a href="/Kitchens" style={{color:"#7e878c",lineHeight:'30px'}}>Kitchens</a>                       
                      </li>
                      <li>
                      <ChevronRightIcon />  <a href="/HomeOffice" style={{color:"#7e878c",lineHeight:'30px'}}>Home Office</a>                   
                      </li>
                      <li>
                      <ChevronRightIcon />  <a href="/AwkwardSpaces" style={{color:"#7e878c",lineHeight:'30px'}}>Awkward Spaces</a>                  
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
                        <div style={{display:'flex'}}>
                            
                        <div>
                      <LocationOnIcon  style={{marginRight:'6px'}}/>
                        </div>
                        <div>

                       Unit 9 Slough Interchange,Whittenham 
                      Close,Slough SL2 5EP
                        </div>
                            </div>
                      </li>
                      <li><EmailIcon style={{marginRight:'7px'}}/>info@stylemyspace.uk</li>
                      <li><EmailIcon style={{marginRight:'7px'}}/>salil@stylemyspace.uk</li>
                      <li><CallIcon style={{marginRight:'7px'}}/>01753530216</li>
                    </ul>
                  </div>
                </div>

                 <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget widget_address_outer m-b20">
                    <h4 className="widget-title">Booking & Brochure</h4>
                    
                  </div>
                  <div>
                    <div style={{border:'1px solid #fff', background:'#fff',padding:" 16px 10px",width:'70%',borderRadius:'10px'}}>
                      <span>
                         <a href='/Getaquote'>Book a Free Design Visit  </a>  
                      </span>
                      </div>
                      <div style={{border:'1px solid #fff', background:'#fff',padding:" 16px 10px",width:'70%',borderRadius:'10px',marginTop:'10px'}}>
                      <span>
                         <a href='/Orderafreebrochure'> Order a Free Brochure </a>  
                      </span>
                      </div>
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
                <a href="/">
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

export default Footers
