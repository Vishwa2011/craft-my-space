import React from "react";

const Navbar = () => {
  return (
    <div className="page-wraper">
      <header class="site-header header-style-1  header-fixed nav-wide mobile-sider-drawer-menu">
        <div className="main-bar-wraper">
          <div className="main-bar p-t5" >
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <a href="/">
                    <img src="/assets/pic/CMS LOGO 1.png" alt="" />
                  </a>
                </div>
              </div>
              {/* <!-- NAV Toggle Button --> */}
              <button id="mobile-side-drawer">
                <span className="icon-bar bar-one"></span>
                <span className="icon-bar bar-two"></span>
                <span className="icon-bar bar-three"></span>
              </button>
              {/* <!-- ETRA Nav --> */}
             
              {/* <!-- MAIN Vav --> */}
              <div className="header-nav">
                <ul className=" nav navbar-nav">
                <li>
                                                    <a href="/">Home</a>
                                                
                                                </li>
                  <li>
                    <a href="../WhyCraftMySpace">WhyCraftMySpace?</a>
                   
                                        </li>
                                        <li>
                                            <a href="">Services</a>
                                            <ul className="sub-menu">

                                                <li>
                                                    <a href="/fitted-bedroom">Fitted Bedrooms</a>
                                                
                                                </li>
                                                <li>
                                                    <a href="/FittedWardrobes">Fitted Wardrobes</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="/HingedDoorWardrobes">Hinged Door Wardrobed</a></li>
                                                <li><a href="/SlidingWardrobedDoorsByCMS"> Sliding  Wardrobed Doors By cms</a></li>
                                                <li><a href="/Slidingwardrobed"> Sliding Wardrobed</a>
                                                     <ul className="sub-menu has-child">
                                                <li><a href="/ChildrensBedroomSlidingDoorWardrobes">Children’s Bedroom Sliding Door Wardrobes</a></li>
                                                <li><a href="/SlidingHallwayWardrobes">Sliding Hallway Wardrobes</a></li>
                                                <li><a href="/SlidingHomeOfficeWardrobes">Sliding Home Office Wardrobes</a></li>
                                                <li><a href="/SlidingLivingAreaWardrobes">Sliding Living Area Wardrobes</a></li>
                                                <li><a href="/SlidingBedroomWardrobes">Sliding Bedroom Wardrobes</a></li>

                                            </ul>
                                                </li>
                                                <li><a href="/Walkinwardrobed"> Walk in  Wardrobed</a></li>
                                                <li><a href="/ChildrenFittedBadrooms"> Children's Fitted Badrooms</a></li>
                                               </ul>
                                                </li>
                                                <li>
                                                    <a href="/FittedLiving">Fitted Living</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="/Bathroom">Bathroom</a></li>
                                                <li><a href="/DiningRoom">Dining Room</a></li>
                                                <li><a href="/HomeOffice">Home Office</a></li>
                                                <li><a href="/Kitchens">Kitchens</a></li>
                                                <li><a href="/MediaRoom">Media Room</a></li>
                                            

                                            </ul>
                                                </li>
                                                <li>
                                                    <a href="/AwkwardSpaces">Awkward Spaces</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="/Alcoves">Alcoves</a></li>
                                                <li><a href="/BayWindows">Bay Windows</a></li>
                                                <li><a href="/LandingHallways">Landing & Hallways</a></li>
                                                <li><a href="/SlopingCeilings">Sloping Ceilings</a></li>
                                                <li><a href="/UnderStairs">Under Stairs </a></li>
                                            

                                            </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/Joinery">Joinery</a>
                                            
                  </li>
                  <li>
                    <a href="/Inspiration">Inspiration</a>
                    
                  </li>

                                        <li className="submenu-direction">
                                            <a href="">Gallery</a>
                                            <ul className="sub-menu">
                                                <li><a href="/Recentwork">Recent Work</a></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="submenu-direction">
                                            <a href="">Contact</a>
                                            <ul className="sub-menu">
                                                <li><a href="/Getaquote">Contact Us</a></li>
                                                <li><a href="/Orderafreebrochure">Order A Free Brochure</a></li>
                                                <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                                                <li><a href="/Termandcondition">Terms & Condition</a></li>
                                               
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
    </header>
    </div>
  );
};

export default Navbar;
