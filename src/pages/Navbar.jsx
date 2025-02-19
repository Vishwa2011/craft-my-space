import React from "react";

const Navbar = () => {
  return (
    <div className="page-wraper">
      <header class="site-header header-style-1  header-fixed nav-wide mobile-sider-drawer-menu">
        <div className="main-bar-wraper">
          <div className="main-bar p-t5" style={{ backgroundColor: "#000" }}>
            <div className="container">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <a href="/">
                    <img src="assets/images/logo-light.png" alt="" />
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
              <div className="extra-nav">
                <div className="extra-cell">
                  <a href="#search" className=" text-white">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              {/* <!-- ETRA Nav --> */}

              {/* <!-- SITE Search --> */}
              <div id="search">
                <span className="close"></span>
                <form
                  role="search"
                  id="searchform"
                  action="/search"
                  method="get"
                  className="radius-xl"
                >
                  <div className="input-group">
                    <input
                      className="form-control"
                      value=""
                      name="q"
                      type="search"
                      placeholder="Type to search"
                    />
                    <span className="input-group-append">
                      <button type="button" className="search-btn">
                        <i className="sl-icon-magnifier"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              {/* <!-- MAIN Vav --> */}
              <div className="header-nav">
                <ul className=" nav navbar-nav">
                  <li className="">
                    <a href="/">Why CMS</a>
                    {/* <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home 3</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home 4</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <a href="">Fitted Furniture</a>
                                            <ul className="sub-menu">

                                                <li>
                                                    <a href="/fitted-bedroom">Fitted Bedrooms</a>
                                                
                                                </li>
                                                <li>
                                                    <a href="/FittedWardrobes">Fitted Wardrobes</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="/fitted-bedroom/HingedDoorWardrobes">Hinged Door Wardrobed</a></li>
                                                <li><a href="/fitted-bedroom/SlidingWardrobedDoorsByCMS"> Sliding  Wardrobed Doors By cms</a></li>
                                                <li><a href="/fitted-bedroom/Slidingwardrobed"> Sliding Wardrobed</a>
                                                     <ul className="sub-menu has-child">
                                                <li><a href="/fitted-bedroom/ChildrensBedroomSlidingDoorWardrobes">Children’s Bedroom Sliding Door Wardrobes</a></li>
                                                <li><a href="news-listing.html">Sliding Hallway Wardrobes</a></li>
                                                <li><a href="news-masonry.html">Sliding Home Office Wardrobes</a></li>
                                                <li><a href="news-masonry.html">Sliding Living Area Wardrobes</a></li>
                                                <li><a href="news-masonry.html">Sliding Bedroom Wardrobes</a></li>

                                            </ul>
                                                </li>
                                                <li><a href="news-masonry.html"> Walk in  Wardrobed</a></li>
                                                <li><a href="news-masonry.html"> Children's Fitted Badrooms</a></li>
                                               </ul>
                                                </li>
                                                <li>
                                                    <a href="/FittedLiving">Fitted Living</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="news-grid.html">Bathroom</a></li>
                                                <li><a href="news-listing.html">Dining Room</a></li>
                                                <li><a href="news-masonry.html">Home Office</a></li>
                                                <li><a href="news-masonry.html">Kitchens</a></li>
                                                <li><a href="news-masonry.html">Media Room</a></li>
                                            

                                            </ul>
                                                </li>
                                                <li>
                                                    <a href="/AwkwardSpaces">Awkward Spaces</a>
                                                    <ul className="sub-menu has-child">
                                                <li><a href="news-grid.html">Alcoves</a></li>
                                                <li><a href="news-listing.html">Bay Windows</a></li>
                                                <li><a href="news-masonry.html">Landing & Hallways</a></li>
                                                <li><a href="news-masonry.html">Sloping Ceilings</a></li>
                                                <li><a href="news-masonry.html">Under Stairs </a></li>
                                            

                                            </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/Joinery">Joinery</a>
                                            {/* <ul className="sub-menu has-child">
                                                <li><a href="news-grid.html">Blog Grid</a></li>
                                                <li><a href="news-listing.html">Blog Listing</a></li>
                                                <li><a href="news-masonry.html">Blog Masonry</a></li>
                                            </ul> */}
                  </li>
                  <li>
                    <a href="/Inspiration">Inspiration</a>
                    {/* <ul className="sub-menu">
                                                <li><a href="post-image.html">Post Image</a></li>
                                                <li><a href="post-gallery.html">Post Gallery</a></li>
                                                <li><a href="post-video.html">Post Video</a></li>
                                                <li><a href="post-right-sidebar.html">Post Right Sidebar</a></li>
                                            </ul> */}
                  </li>

                                        <li className="submenu-direction">
                                            <a href="">Gallery</a>
                                            <ul className="sub-menu">
                                                <li><a href="/Recentwork">Recent Work</a></li>
                                                {/* <li><a href="work-masonry.html">Project Masonry</a></li>
                                                <li><a href="work-carousel.html">Project Carousel</a></li>
                                                <li><a href="project-detail.html">Project Detail</a></li> */}
                                            </ul>
                                        </li>
                                        <li className="submenu-direction">
                                            <a href="">Get Quote</a>
                                            <ul className="sub-menu">
                                                <li><a href="/Getaquote">Get A Quote</a></li>
                                                <li><a href="/Orderafreebrochure">Order A Free Brochure</a></li>
                                                <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
                                                {/* <li><a href="project-detail.html">Project Detail</a></li> */}
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
