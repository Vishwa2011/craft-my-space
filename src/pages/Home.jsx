import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="page-wraper">
        <Navbar />
        {/* <!-- slider start --> */}
        <div className="page-content">
          <div className="slider-section">
            <div className="slider-section">
              <div
                id="welcome_wrapper"
                className="rev_slider_wrapper fullscreen-container"
                data-alias="goodnews-header"
                data-source="gallery"
                style={{ background: "#eeeeee", padding: "0px" }}
              >
                <div
                  id="welcome"
                  className="rev_slider fullscreenbanner"
                  style={{ display: "none" }}
                  data-version="5.4.3.1"
                >
                  <ul>
                    {/* <!-- SLIDE 1 --> */}
                    <li
                      data-index="rs-901"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="assets/images/main-slider/slider1/slide1.jpg"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide1.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-901-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          01
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            We Make Sure
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span className="text-white">Classic & Modern</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-901-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                          }}
                        >
                          More About
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-901-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="901-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-901-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="assets/images/main-slider/slider1/img-1.jpg"
                          alt=""
                        />
                      </div>
                    </li>

                    {/* <!-- SLIDE 2 --> */}
                    <li
                      data-index="rs-902"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="assets/images/main-slider/slider1/slide2.jpg"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide2.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-902-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          02
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Sma /ll title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            We Make Sure
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">Classic & Modern</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-902-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{ zIndex: 13, textTransform: "uppercase" }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                          More About
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-902-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="902-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-902-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="assets/images/main-slider/slider1/img-2.jpg"
                          alt=""
                        />
                      </div>
                    </li>

                    {/* <!-- SLIDE 3 --> */}
                    <li
                      data-index="rs-903"
                      data-transition="slidevertical"
                      data-slotamount="default"
                      data-hideafterloop="0"
                      data-hideslideonmobile="off"
                      data-easein="default"
                      data-easeout="default"
                      data-masterspeed="default"
                      data-thumb="images/main-slider/slider1/slide1.jpg"
                      data-rotate="0"
                      data-fsmasterspeed="300"
                      data-fsslotamount="7"
                      data-saveperformance="off"
                      data-title="Click"
                      data-param1=""
                      data-description=""
                    >
                      {/* <!-- MAIN IMAGE --> */}
                      <img
                        src="assets/images/main-slider/slider1/slide3.jpg"
                        alt=""
                        data-lazyload="images/main-slider/slider1/slide3.jpg"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgparallax="4"
                        className="rev-slidebg"
                        data-no-retina
                      />

                      {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                      <div
                        className="tp-caption tp-shape tp-shapewrapper "
                        id="slide-903-layer-0"
                        data-x="['center','center','center','center']"
                        data-hoffset="['0','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="shape"
                        data-basealign="slide"
                        data-responsive_offset="off"
                        data-responsive="off"
                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          borderColor: "rgba(0, 0, 0, 0)",
                          borderWidth: "0px",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 2 [Number] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-2"
                        data-x="['left','left','left','left']"
                        data-hoffset="['30','30','30','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['300','180','180','180']"
                        data-fontsize="['300','200','200','80']"
                        data-lineheight="['66','66','48','38']"
                        data-width="['800','800','800','800']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 900,
                          color: "rgba(0,0,0,0)",
                        }}
                      >
                        <span
                          className="slider-text-outline"
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          03
                        </span>
                      </div>

                      {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-3"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['540','340','340','270']"
                        data-fontsize="['24','24','24','24']"
                        data-lineheight="['34','34','34','34']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            textTransform: "uppercase",
                          }}
                        >
                          <span
                            className="text-white"
                            style={{ letterSpacing: "20px" }}
                          >
                            We Make Sure
                          </span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 4 [ large title ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-4"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['580','390','390','330']"
                        data-fontsize="['72','72','38','28']"
                        data-lineheight="['82','82','48','38']"
                        data-width="['700','700','96%','96%']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          fontWeight: 400,
                          color: "#fff",
                          borderWidth: "0px",
                        }}
                      >
                        <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                          <span className="text-white">Classic & Modern</span>
                          <br />
                        </div>
                      </div>

                      {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                      <div
                        className="tp-caption tp-resizeme"
                        id="slide-903-layer-5"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['700','490','490','400']"
                        data-lineheight="['none','none','none','none']"
                        data-width="['300','300','300','300']"
                        data-height="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          textTransform: "uppercase",
                        }}
                      >
                        <a
                          href="javascript:;"
                          className="rev-slider-custom-btn"
                          style={{ fontFamily: " 'Oswald', sans-serif" }}
                        >
                          More About
                        </a>
                      </div>

                      {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                      <div
                        className="tp-caption tp-resizeme bg-green"
                        id="slide-903-layer-5-line"
                        data-x="['left','left','left','left']"
                        data-hoffset="['40','40','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['710','500','500','410']"
                        data-lineheight="['none','none','none','none']"
                        data-whitespace="['normal','normal','normal','normal']"
                        data-type="text"
                        data-responsive_offset="on"
                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                        data-textAlign="['left','left','left','left']"
                        data-paddingtop="[1,1,1,1]"
                        data-paddingright="[30,30,30,30]"
                        data-paddingbottom="[1,1,1,1]"
                        data-paddingleft="[30,30,30,30]"
                        style={{ zIndex: 13 }}
                      ></div>

                      {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                      <div
                        className="tp-caption rev-btn  tp-resizeme bg-secondry"
                        id="903-layer-6"
                        data-x="['left','right','right','right']"
                        data-hoffset="['1060','0','0','0']"
                        data-y="['middle','middle','middle','middle']"
                        data-voffset="['0','0','0','0']"
                        data-width="full"
                        data-height="full"
                        data-whitespace="nowrap"
                        data-type="text"
                        data-visibility="['on','off','off','off']"
                        data-responsive_offset="off"
                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                        data-textAlign="['right','right','right','right']"
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 0,
                          width: "6000px",
                          height: "100vh",
                          backgroundImage:
                            "url('images/main-slider/slider1/right-bg.png')",
                          display: "block",
                          backgroundPosition: "left center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>

                      {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                      <div
                        className="tp-caption   tp-resizeme"
                        id="slide-903-layer-7"
                        data-x="['right','right','right','right']"
                        data-hoffset="['100','80','40','40']"
                        data-y="['top','top','top','top']"
                        data-voffset="['140','140','140','270']"
                        data-width="['400','400','96%','96%']"
                        data-height="['none','auto','none','none']"
                        data-visibility="['on','on','off','off']"
                        data-type="image"
                        data-responsive_offset="on"
                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                        data-paddingtop="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        style={{
                          zIndex: 13,
                          whiteSpace: "normal",
                          borderWidth: "0px",
                        }}
                      >
                        <img
                          src="assets/images/main-slider/slider1/img-3.jpg"
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                  <div
                    className="tp-bannertimer tp-bottom"
                    style={{
                      visibility: "hidden",
                    }}
                  ></div>
                </div>
              </div>

              <div className="slider-social-right">
                <ul>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-facebook"></i>
                      </span>
                      facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="fa fa-instagram"></i>
                      </span>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- SLIDER END --> */}

            {/* <!--SLIDER-SOCIAL-RIGHT START--> */}
            <div className="slider-social-right">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-facebook"></i>
                    </span>
                    facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-twitter"></i>
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <i className="fa fa-instagram"></i>
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--SLIDER-SOCIAL-RIGHT END--> */}
          </div>
        </div>

        {/* <!-- slider END --> */}
        <div
          className="bg-gray overflow-hide v-title-outer"
          style={{ padding: "100px 0px" }}
        >
          <div className="section-content">
            <div
              className="custom-block-outer clearfix bg-cover"
              style={{ backgroundImage: "url(images/background/video-bg.png)" }}
            >
              <div
                className="custom-left-part overlay-wraper clearfix bg-cover"
                style={{
                  backgroundImage:
                    "url(images/background/verticle-slide-bg.jpg)",
                }}
              >
                <div className="bg-black opacity-08 overlay-main"></div>
                <div className="verticle-center-slider-block-outer mfp-gallery">
                  <div className="vertical-center-slider">
                    <div className="verticle-center-slider-block">
                      <div className="wt-box">
                        <img src="images/gallery/pic1.jpg" alt="" />
                        <a href="javascript:;">
                          What makes we the best in the architecture
                        </a>
                        <a href="images/gallery/pic1.jpg" className="mfp-link">
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div className="verticle-center-slider-block">
                      <div className="wt-box">
                        <img src="images/gallery/pic2.jpg" alt="" />
                        <a href="javascript:;">
                          What makes we the best in the architecture
                        </a>
                        <a href="images/gallery/pic2.jpg" className="mfp-link">
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div className="verticle-center-slider-block">
                      <div className="wt-box">
                        <img src="images/gallery/pic3.jpg" alt="" />
                        <a href="javascript:;">
                          What makes we the best in the architecture
                        </a>
                        <a href="images/gallery/pic3.jpg" className="mfp-link">
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div className="verticle-center-slider-block">
                      <div className="wt-box">
                        <img src="images/gallery/pic4.jpg" alt="" />
                        <a href="javascript:;">
                          What makes we the best in the architecture
                        </a>
                        <a href="images/gallery/pic4.jpg" className="mfp-link">
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>

                    <div className="verticle-center-slider-block">
                      <div className="wt-box">
                        <img src="images/gallery/pic5.jpg" alt="" />
                        <a href="javascript:;">
                          What makes we the best in the architecture
                        </a>
                        <a href="images/gallery/pic5.jpg" className="mfp-link">
                          <i className="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="v-title">
                  <span>Projects</span>
                </div>
              </div>

              <div className="custom-right-part ">
                <div className="custom-right-part-content p-t80">
                  <div className="video-section-outer">
                    <div className="section-head clearfix">
                      <div className="wt-tilte-main">
                        <small className="wt-small-title">
                          Latest Projects
                        </small>
                        <h2 className="m-b5">Our Projects</h2>
                      </div>
                    </div>

                    <div className="video-section">
                      <img src="images/video-img.jpg" alt="" />
                      <a
                        href="https://player.vimeo.com/video/34741214?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                        className="mfp-video play-now"
                      >
                        <i className="icon fa fa-play"></i>
                        <span className="ripple"></span>
                      </a>
                    </div>

                    <div className="our-ability m-t50">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              132
                            </h1>
                            <h4 className="wt-tilte m-b0">Five stars rating</h4>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              206
                            </h1>
                            <h4 className="wt-tilte m-b0">Happy customer</h4>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                          <div className="m-b30 text-black wt-icon-box-wraper center">
                            <h1 className="counter font-weight-800 m-b5 site-text-primary">
                              336
                            </h1>
                            <h4 className="wt-tilte m-b0">Project Complete</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [ our services ] start  */}
        <div className="section-full p-t80 p-b50 bg-white">
          <div className="container">
            <div className="row equal-wraper">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="section-head clearfix">
                  <div className="wt-tilte-main ">
                    <small className="wt-small-title">[ our services ]</small>
                    <h2 className="m-b5">Our Latest Services</h2>
                  </div>
                  <div>
                    <p>
                      Our latest services include customized solutions designed
                      to meet your unique needs, offering innovative and
                      high-quality options tailored to enhance functionality and
                      aesthetics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="javascript:void(0);">
                      <img src="/assets/images/blog/default/thum1.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="javascript:void(0);" className=" m-t0">
                          Fitted Wardrobes
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Made-to-measure, customised to your choice, maximise
                        space in your bedroom. All the more reason to have
                        fitted wardrobes and make a statement. Fitted wardrobes
                        can very easily compliment the layout and the style of
                        your room, and are available in a variety of different
                        colours, ranging from different types of wood to more
                        mirrored finishes, giving your fitted wardrobe and your
                        room a more elegant feel.Stylemyspace will help you pick
                        out the perfect material for you, so all you have to do
                        is let us know how you want it to look..
                      </p>
                    </div>
                    <a href="javascript:void(0);" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="javascript:void(0);">
                      <img src="/assets/images/blog/default/thum2.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="javascript:void(0);" className=" m-t0">
                          Fitted Kitchen
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Our kitchen range offers contemporary as well as
                        traditional layouts in popular finishes like acrylic
                        gloss, high gloss, exotic wood grains, or even the newly
                        introduced supermatt. Each of those finishes are applied
                        by advanced airtronic machinery that not only ensure
                        spotless edging but also an operating life running into
                        decades. Stylemyspace offers an exceptional choice of
                        appliances to go with your fitted kitchen. Finished in
                        high gloss to help evade the wear and tear that is
                        typical of kitchens, these appliances have lifespans of
                        multiple years.
                      </p>
                    </div>
                    <a href="javascript:void(0);" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12"></div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="javascript:void(0);">
                      <img src="/assets/images/blog/default/thum1.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="javascript:void(0);" className=" m-t0">
                          Bespoke Furniture
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Bedrooms need to be a relaxing and personal sanctuary,
                        somewhere to feel comfortable. At Cosi Living, we can
                        create a bespoke bedroom based on your visions using our
                        German suppliers. Beauty space, beds and wardrobes, we
                        can make your dream personal space a reality.
                        Stylemyspace bespoke bedroom furniture range offers
                        diverse furniture designs in contemporary, classic and
                        traditional styles.
                      </p>
                    </div>
                    <a href="javascript:void(0);" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="blog-post blog-md blog-no-gap date-style-1 clearfix  m-b60">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <a href="javascript:void(0);">
                      <img src="/assets/images/blog/default/thum1.jpg" alt="" />
                    </a>
                  </div>
                  <div
                    className="wt-post-info p-a30"
                    style={{ paddingLeft: "0px" }}
                  >
                    <div className="wt-post-title ">
                      <h4 className="post-title">
                        <a href="javascript:void(0);" className=" m-t0">
                          Awkward Spaces
                        </a>
                      </h4>
                    </div>
                    <div className="wt-post-text">
                      <p>
                        Temples, Studies, Home Office Furniture, Sliding Door
                        Wardrobes
                      </p>
                    </div>
                    <a href="javascript:void(0);" className="site-button-link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [ our services ] end  */}
        {/* STEP INSPIRED SOLUTION start  */}
        <div className="section-full p-t80 p-b50 bg-white">
          <div className="container">
            <div>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                OUR 4-STEP INSPIRED SOLUTION
              </h2>
            </div>
            <div
              className="section-content  "
              style={{ textAlign: "center", verticalAlign: "moddle" }}
            >
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-3 col-sm-3 col-md-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>DISCUSS & PLAN</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>DESIGN & INNOVATE</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>MANUFACTURE & DELIVER</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3">
                    <a
                      href="#"
                      className="wt-img-effect client-logo-media shadow"
                    >
                      <div>
                        <img src="/assets/images/client-logo/w1.png" alt="" />
                      </div>
                      <div>
                        <p>FINAL FITTING</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: "30px" }}>
                    Book Your Free Design Visit
                  </h4>
                  <a
                    href=""
                    style={{
                      background: "#141b1f",
                      color: "white",
                      padding: "20px",
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* STEP INSPIRED SOLUTION end  */}
        {/* Testimonial start  */}
        <div
          className="section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center"
          style={{ backgroundImage: "url(images/background/bg-1.jpg)" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                <small className="wt-small-title">Client Testimonial</small>
                <h2 className="m-b5">Our Client gave us Feedback</h2>
              </div>
              <div className="title-right-detail">
                <p>
                  We are uncompetitor in architectural solutions Friendly
                  neighbour there that power. Keep away Architecture who try to
                  Ambitions people do that really great.
                </p>
              </div>
            </div>

            <div className="testimonial-slider">
              <div id="sync1" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            The services provided by the officials was smooth
                            and satisfactory. Products and goods delivered were
                            up to satisfaction and compared to market price.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">James Bond</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            Very attractive collection. We roamed and roamed but
                            we didn't find quality items. Finally we entered to
                            Durian. Really satisfied with quality and service.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">R K Varma</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            We purchased so many products from durian and we
                            would recommend Durian Furniture to everyone who
                            needs quality and decent looking furniture.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">
                            Haris Gulati
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonial-slider-content clearfix">
                    <div className="testimonial-1 testimonial-1-no-img clearfix">
                      <div className="testimonial-text">
                        <div className="testimonial-paragraph">
                          <div className="quote-left"></div>
                          <p>
                            The office furniture is ergonomic in design, it is
                            very comfortable to use for long hours in office. Be
                            it design, comfort or the shopping experience, it
                            ticks all the boxes for us.
                          </p>
                        </div>
                        <div className="testimonial-detail ">
                          <h4 className="testimonial-name m-b5">Liam Noah</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="sync2"
                className="owl-carousel owl-theme testimonial-1-thumb center"
              >
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/1.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/2.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/3.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/4.jpg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/5.jpg" alt="" />
                  </div>
                </div>
                {/* New Thumbnail for the new testimonial */}
                <div className="item">
                  <div className="wt-media">
                    <img src="/assets/images/testimonials/small/6.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial end  */}
        {/* Why Choose start   */}
        <div className="section-full p-t80 p-b50 bg-gray">
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                <small className="wt-small-title">Work service</small>
                <h2 className="m-b5">Our great provided</h2>
              </div>
              <div className="title-right-detail">
                <p>
                  We are uncompetitor in architectural solutions Friendly
                  neighbour there that power. Keep away Architecture who try to
                  Ambitions people do that really great.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="A">
                      Architecture design
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-mansion v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="S">
                      smart Interior design
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-stair v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="R">
                      Residential design
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-apartment v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="L">
                      landscape design
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-photo v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="P">
                      Plans and Projects
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-sketch v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                  <div className="icon-content m-b30">
                    <h4 className="wt-tilte-large m-t0" data-title="K">
                      Kitchen design{" "}
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type.
                    </p>
                    <a href="javascript:;" className="site-button-link">
                      Read More
                    </a>
                  </div>
                  <div className="icon-xl inline-icon">
                    <span className="icon-cell">
                      <i className="flaticon-kitchen v-icon"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose end   */}

        {/* our blog start  */}
        <div
          className="section-full  p-t80 p-b80 bg-secondry"
          style={{ marginBottom: "100px" }}
        >
          <div className="container">
            <div className="section-head clearfix">
              <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
                <small className="wt-small-title">All Projects</small>
                <h2 className="m-b5">Our Latest Projects</h2>
              </div>
              <div className="title-right-detail text-white">
                <p>
                  We are uncompetitor in architectural solutions Friendly
                  neighbour there that power. Keep away Architecture who try to
                  Ambitions people do that really great.
                </p>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="container-fluid">
              <div className="container">
                <div className="projects-slider-two">
                  <div
                    className="owl-carousel projects-carousel-two owl-btn-vertical-center col-12"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="item col-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="01">
                            <a href="javascript:;" className="text-white">
                              Architecture design
                            </a>
                          </h4>
                          <p>
                            We are uncompetitor in architectural solutions
                            Friendly neighbour there that power. Keep away
                            Architecture.
                          </p>
                          <div className="wt-media img-reflection">
                            <img src="assets/images/gallery/pic1.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="02">
                            <a href="javascript:;" className="text-white">
                              Interior design
                            </a>
                          </h4>
                          <p>
                            We are uncompetitor in architectural solutions
                            Friendly neighbour there that power. Keep away
                            Architecture.
                          </p>
                          <div className="wt-media img-reflection">
                            <img src="assets/images/gallery/pic2.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="item col-4">
                        <div className="projects-two-info text-white">
                          <h4 className="wt-tilte m-t0" data-title="03">
                            <a href="javascript:;" className="text-white">
                              Landscap design
                            </a>
                          </h4>
                          <p>
                            We are uncompetitor in architectural solutions
                            Friendly neighbour there that power. Keep away
                            Architecture.
                          </p>
                          <div className="wt-media img-reflection">
                            <img src="assets/images/gallery/pic3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our blog end  */}

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
                    <h4 className="widget-title  text-uppercase">
                      Recent Post
                    </h4>
                    <div className="section-content">
                      <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                          <div className="wt-post-media">
                            <img
                              src="/assets/images/blog/recent-blog/pic1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="wt-post-info">
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">25 Dec</li>
                                <li className="post-comment"> 20 Comment</li>
                              </ul>
                            </div>
                            <div className="wt-post-header">
                              <h6 className="post-title">
                                Planning approved for restoration town hall.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="widget-post clearfix">
                          <div className="wt-post-media">
                            <img
                              src="assets/images/blog/recent-blog/pic2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="wt-post-info">
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">28 Dec</li>
                                <li className="post-comment"> 15 Comment</li>
                              </ul>
                            </div>
                            <div className="wt-post-header">
                              <h6 className="post-title">
                                Planning approved for restoration town hall.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="widget-post clearfix">
                          <div className="wt-post-media">
                            <img
                              src="assets/images/blog/recent-blog/pic3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="wt-post-info">
                            <div className="wt-post-meta">
                              <ul>
                                <li className="post-author">30 Dec</li>
                                <li className="post-comment"> 11 Comment</li>
                              </ul>
                            </div>
                            <div className="wt-post-header">
                              <h6 className="post-title">
                                Planning approved for restoration town hall.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="widget widget_about">
                    <h4 className="widget-title  text-uppercase">
                      About Information
                    </h4>
                    <p>
                      Today we can tell you, thanks to your passion, hard work
                      creativity, and expertise, you delivered us the most
                      beautiful house great looks.
                    </p>
                  </div>

                  <div className="widget widget_newsletter">
                    <h4 className="widget-title  text-uppercase">
                      Subscribe to our newsletter!
                    </h4>
                    <div className="newsletter-bx">
                      <form role="search" method="post">
                        <div className="input-group">
                          <input
                            name="news-letter"
                            className="form-control"
                            placeholder="ENTER YOUR EMAIL"
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button type="submit" className="site-button">
                              <i className="fa fa-paper-plane-o"></i>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
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

        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
      {/* <!-- LOADING AREA START ===== --> */}
      {/* <div className="loading-area">
                <div className="loading-box"></div>
                <div className="loading-pic">
                    <div id="loadFacebookG">
                        <div id="blockG_1" className="facebook_blockG"></div>
                        <div id="blockG_2" className="facebook_blockG"></div>
                        <div id="blockG_3" className="facebook_blockG"></div>
                    </div>
                </div>
            </div> */}
      {/* <!-- LOADING AREA  END ====== -->  */}

      {/* <!-- JAVASCRIPT  FILES ========================================= -->  */}
    </>
  );
}
