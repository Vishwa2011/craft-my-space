import React from "react";
import Footers from "./Footer";
import Navbar from "./Navbar";

const Mission = () => {
  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(assets/pic/mission.webp)",
            }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Our mission</h2>
                  </div>
                </div>
                {/* <!-- BREADCRUMB ROW -->  */}

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>

                    <li>Our Mission</li>
                  </ul>
                </div>

                {/* <!-- BREADCRUMB ROW END --> */}
              </div>
            </div>
          </div>
          {/* <!--  SECTION START --> */}
          <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
            <div className="container">
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-left">
                      <div className="arc-home-left-content  bg-gray">
                        <h4>GET TO KNOW</h4>
                        <h3 className="m-t0 ">Our Mission</h3>
                        <p
                          style={{
                            color: "#434f5a",
                            fontSize: "14px",
                            lineHeight: "30px",
                          }}
                        >
                          We have been making bespoke kitchens and bedrooms from
                          more than 10 years, and in that time we have designed
                          and crafted more than 100's made to measure kitchens
                          and Bedrooms.During the design process to create your
                          perfect kitchen, we'll listen to your requirements and
                          take on board your ideas, offer advice and guide you
                          through the exciting process of crafting your dream,
                          luxury bespoke kitchen. Our philosophy is to offer
                          understated, premium-quality, combined with the best
                          in thoughtful design and service, whilst always
                          offering exceptional value for money. All of our
                          kitchens/bedrooms are designed and made to order,
                          unique to the needs of their owners.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="arc-home-about-right portfolio-wrap">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 masonry-item">
                          <div className="wt-media m-b20  img-reflection">
                            <img src="/assets/pic/mi2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--   SECTION END -->   */}
        </div>
        <Footers />
            {/* <!-- BUTTON TOP START --> */}
            <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
};

export default Mission;
