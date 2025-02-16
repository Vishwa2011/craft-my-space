import React from 'react'

export default function Home() {
    return (
        <>

            <div className="page-wraper">

                {/* <!-- HEADER START --> */}
                <header className="site-header header-style-1  header-fixed nav-wide mobile-sider-drawer-menu">
                    <div className="main-bar-wraper">
                        <div className="main-bar p-t5">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <a href="index.html">
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
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input className="form-control" value="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-append"><button type="button" className="search-btn"><i className="sl-icon-magnifier"></i></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- MAIN Vav --> */}
                                <div className="header-nav">
                                    <ul className=" nav navbar-nav">
                                        <li className="active">
                                            <a href="javascript:;">Home</a>
                                            <ul className="sub-menu">
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
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Pages</a>
                                            <ul className="sub-menu">

                                                <li>
                                                    <a href="about-1.html">About us</a>
                                                </li>
                                                <li>
                                                    <a href="contact-1.html">Contact us</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Blog</a>
                                            <ul className="sub-menu has-child">
                                                <li><a href="news-grid.html">Blog Grid</a></li>
                                                <li><a href="news-listing.html">Blog Listing</a></li>
                                                <li><a href="news-masonry.html">Blog Masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Post detail</a>
                                            <ul className="sub-menu">
                                                <li><a href="post-image.html">Post Image</a></li>
                                                <li><a href="post-gallery.html">Post Gallery</a></li>
                                                <li><a href="post-video.html">Post Video</a></li>
                                                <li><a href="post-right-sidebar.html">Post Right Sidebar</a></li>
                                            </ul>
                                        </li>

                                        <li className="submenu-direction">
                                            <a href="javascript:;">Projects</a>
                                            <ul className="sub-menu">
                                                <li><a href="work-grid.html">Project Grid</a></li>
                                                <li><a href="work-masonry.html">Project Masonry</a></li>
                                                <li><a href="work-carousel.html">Project Carousel</a></li>
                                                <li><a href="project-detail.html">Project Detail</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- HEADER END --> */}

                {/* <!-- CONTENT START --> */}
                <div className="page-content">

                    <div className="slider-section">
                        {/* <!-- SLIDER START --> */}
                        <div className="slider-section">
                            {/* <!-- SLIDER START --> */}
                            <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: "#eeeeee", padding: "0px" }}>
                                <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: "none" }} data-version="5.4.3.1">
                                    <ul>
                                        {/* <!-- SLIDE 1 --> */}
                                        <li data-index="rs-901"
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
                                            data-description="">
                                            {/* <!-- MAIN IMAGE --> */}
                                            <img src="assets/images/main-slider/slider1/slide1.jpg" alt="" data-lazyload="images/main-slider/slider1/slide1.jpg" data-bgposition="center center"
                                                data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />

                                            {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                                            <div className="tp-caption tp-shape tp-shapewrapper "
                                                id="slide-901-layer-0"
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                }}>
                                            </div>

                                            {/* <!-- LAYER NR. 2 [Number] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-901-layer-2"
                                                data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']"
                                                data-y="['top','top','top','top']" data-voffset="['300','180','180','180']"
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
                                                }}>
                                                <span className="slider-text-outline" style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>01</span>
                                            </div>

                                            {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-901-layer-3"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"
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
                                                }}>
                                                <div style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>
                                                    <span className="text-white" style={{ letterSpacing: "20px" }}>We Make Sure</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 4 [ large title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-901-layer-4"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"
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
                                                }}>
                                                <div style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>
                                                    <span className="text-white">Classic & Modern</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-901-layer-5"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"
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

                                                style={{ zIndex: 13, textTransform: "uppercase" }}>
                                                <a href="javascript:;" className="rev-slider-custom-btn" style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                }}>More About</a>
                                            </div>

                                            {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                                            <div className="tp-caption tp-resizeme bg-green"
                                                id="slide-901-layer-5-line"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"
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

                                                style={{ zIndex: 13 }}>
                                            </div>

                                            {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                                            <div className="tp-caption rev-btn  tp-resizeme bg-secondry"
                                                id="901-layer-6"
                                                data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                    backgroundImage: "url('images/main-slider/slider1/right-bg.png')",
                                                    display: "block",
                                                    backgroundPosition: "left center",
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                            </div>

                                            {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-901-layer-7"
                                                data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"
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
                                                }}>
                                                <img src="assets/images/main-slider/slider1/img-1.jpg" alt="" />
                                            </div>

                                        </li>

                                        {/* <!-- SLIDE 2 --> */}
                                        <li data-index="rs-902"
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
                                            data-description="">
                                            {/* <!-- MAIN IMAGE --> */}
                                            <img src="assets/images/main-slider/slider1/slide2.jpg" alt="" data-lazyload="images/main-slider/slider1/slide2.jpg" data-bgposition="center center"
                                                data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />

                                            {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                                            <div className="tp-caption tp-shape tp-shapewrapper "
                                                id="slide-902-layer-0"
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                }}>
                                            </div>

                                            {/* <!-- LAYER NR. 2 [Number] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-902-layer-2"
                                                data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']"
                                                data-y="['top','top','top','top']" data-voffset="['300','180','180','180']"
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
                                                }}>
                                                <span className="slider-text-outline" style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>02</span>
                                            </div>

                                            {/* <!-- LAYER NR. 3 [ Sma /ll title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-902-layer-3"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"
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
                                                }}>
                                                <div style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>
                                                    <span className="text-white" style={{ letterSpacing: "20px" }}>We Make Sure</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 4 [ large title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-902-layer-4"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"
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
                                                }}>
                                                <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                                                    <span className="text-white">Classic & Modern</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-902-layer-5"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"
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

                                                style={{ zIndex: 13, textTransform: "uppercase" }}>
                                                <a href="javascript:;" className="rev-slider-custom-btn" style={{ fontFamily: "'Oswald', sans-serif" }}>More About</a>
                                            </div>

                                            {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                                            <div className="tp-caption tp-resizeme bg-green"
                                                id="slide-902-layer-5-line"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"
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

                                                style={{ zIndex: 13 }}>
                                            </div>

                                            {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                                            <div className="tp-caption rev-btn  tp-resizeme bg-secondry"
                                                id="902-layer-6"
                                                data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                    backgroundImage: "url('images/main-slider/slider1/right-bg.png')",
                                                    display: "block",
                                                    backgroundPosition: "left center",
                                                    backgroundRepeat: "no-repeat",
                                                }}>
                                            </div>

                                            {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-902-layer-7"
                                                data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"
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
                                                }}>
                                                <img src="assets/images/main-slider/slider1/img-2.jpg" alt="" />
                                            </div>

                                        </li>

                                        {/* <!-- SLIDE 3 --> */}
                                        <li data-index="rs-903"
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
                                            data-description="">
                                            {/* <!-- MAIN IMAGE --> */}
                                            <img src="assets/images/main-slider/slider1/slide3.jpg" alt="" data-lazyload="images/main-slider/slider1/slide3.jpg" data-bgposition="center center"
                                                data-bgfit="cover" data-bgparallax="4" className="rev-slidebg" data-no-retina />

                                            {/* <!-- LAYER NR. 0 [ for overlay ] --> */}
                                            <div className="tp-caption tp-shape tp-shapewrapper "
                                                id="slide-903-layer-0"
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                }}>
                                            </div>

                                            {/* <!-- LAYER NR. 2 [Number] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-903-layer-2"
                                                data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']"
                                                data-y="['top','top','top','top']" data-voffset="['300','180','180','180']"
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
                                                }}>
                                                <span className="slider-text-outline" style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>03</span>
                                            </div>

                                            {/* <!-- LAYER NR. 3 [ Small title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-903-layer-3"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"
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
                                                }}>
                                                <div style={{
                                                    fontFamily: "'Oswald', sans-serif",
                                                    textTransform: "uppercase",
                                                }}>
                                                    <span className="text-white" style={{ letterSpacing: "20px" }}>We Make Sure</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 4 [ large title ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-903-layer-4"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"
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
                                                }}>
                                                <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                                                    <span className="text-white">Classic & Modern</span><br />
                                                </div>

                                            </div>

                                            {/* <!-- LAYER NR. 5 [ More About button ] --> */}
                                            <div className="tp-caption tp-resizeme"
                                                id="slide-903-layer-5"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"
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
                                                }}>
                                                <a href="javascript:;" className="rev-slider-custom-btn" style={{ fontFamily: " 'Oswald', sans-serif" }}>More About</a>
                                            </div>

                                            {/* <!-- LAYER NR. 5-line [ More About button Line ] --> */}
                                            <div className="tp-caption tp-resizeme bg-green"
                                                id="slide-903-layer-5-line"
                                                data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']"

                                                data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"
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

                                                style={{ zIndex: 13 }}>
                                            </div>

                                            {/* <!-- LAYER NR. 6 [ Right block ] --> */}
                                            <div className="tp-caption rev-btn  tp-resizeme bg-secondry"
                                                id="903-layer-6"
                                                data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']"
                                                data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
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
                                                    backgroundImage: "url('images/main-slider/slider1/right-bg.png')",
                                                    display: "block",
                                                    backgroundPosition: "left center",
                                                    backgroundRepeat: "no-repeat",
                                                }}>
                                            </div>

                                            {/* <!-- LAYER NR. 7 [ Right part middle image ] --> */}
                                            <div className="tp-caption   tp-resizeme"
                                                id="slide-903-layer-7"
                                                data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']"
                                                data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"
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
                                                }}>
                                                <img src="assets/images/main-slider/slider1/img-3.jpg" alt="" />
                                            </div>

                                        </li>


                                    </ul>
                                    <div className="tp-bannertimer tp-bottom" style={{
                                        visibility: "hidden",
                                    }}></div>
                                </div>
                            </div>
                            {/* <!-- SLIDER END --> */}

                            {/* <!--SLIDER-SOCIAL-RIGHT START--> */}
                            <div className="slider-social-right">
                                <ul>
                                    <li><a href="#"><span><i className="fa fa-facebook"></i></span>facebook</a></li>
                                    <li><a href="#"><span><i className="fa fa-twitter"></i></span>Twitter</a></li>
                                    <li><a href="#"><span><i className="fa fa-instagram"></i></span>Instagram</a></li>
                                </ul>
                            </div>
                            {/* <!--SLIDER-SOCIAL-RIGHT END--> */}
                        </div>
                        {/* <!-- SLIDER END --> */}

                        {/* <!--SLIDER-SOCIAL-RIGHT START--> */}
                        <div className="slider-social-right">
                            <ul>
                                <li><a href="#"><span><i className="fa fa-facebook"></i></span>facebook</a></li>
                                <li><a href="#"><span><i className="fa fa-twitter"></i></span>Twitter</a></li>
                                <li><a href="#"><span><i className="fa fa-instagram"></i></span>Instagram</a></li>
                            </ul>
                        </div>
                        {/* <!--SLIDER-SOCIAL-RIGHT END--> */}
                    </div>
                    {/* <!-- WELCOME SECTION START --> */}
                    <div className="section-full p-t80 p-b80 bg-gray overflow-hide">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="arc-home-about-left">
                                            <div className="arc-home-left-content bg-gray">
                                                <h3 className="m-t0 wt-tilte-light">Design, followed by Form & Function.</h3>
                                                <h2 className="m-t0 wt-title">Exploring the Quality Ways through Design.</h2>
                                                <p>
                                                    We are uncompetitor in architectural solutions Friendly
                                                    neighbour there that power. Keep away Architecture who try to
                                                    Ambitions people do that really
                                                </p>
                                                <a href="javascript:;" className="site-button-link">
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="arc-home-about-right portfolio-wrap">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 masonry-item">
                                                    <div className="arc-about-year text-uppercase text-right m-b20">
                                                        <div className="arc-about-year-pic">
                                                            <img src="assets/images/about/s-1.jpg" alt="" />
                                                        </div>
                                                        <div className="arc-about-year-info">
                                                            <span className="title-small">working <br /> experience</span>
                                                            <h2 className="wt-title m-tb0">Year</h2>
                                                            <span className="text-outline">12</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 masonry-item">
                                                    <div className="wt-media m-b20 img-reflection">
                                                        <img src="assets/images/about/l-2.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 masonry-item">
                                                    <div className="wt-media m-b20 img-reflection">
                                                        <img src="assets/images/about/l-1.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 masonry-item">
                                                    <div className="wt-media m-b20 img-reflection">
                                                        <img src="assets/images/about/s-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- WELCOME SECTION end --> */}

                    {/* <!-- OUR PROJECTS SECTION START --> */}
                    <div className="section-full  p-t80 p-b80 bg-secondry">
                        <div className="container">
                            <div className="section-head clearfix">
                                <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white">
                                    <small className="wt-small-title">All Projects</small>
                                    <h2 className="m-b5">Our Latest Projects</h2>
                                </div>
                                <div className="title-right-detail text-white">
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-content">

                            <div className="container-fluid">
                                <div className="projects-slider-two">
                                    <div className="owl-carousel projects-carousel-two owl-btn-vertical-center" style={{display:'block'}}>
                                        {/* <!-- COLUMNS 1 --> */}
                                        <div className="item" >
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="01"><a href="javascript:;" className="text-white">Architecture design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic1.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- COLUMNS 2 --> */}

                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="02"><a href="javascript:;" className="text-white">Interior design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic2.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- COLUMNS 3 --> */}
                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="03"><a href="javascript:;" className="text-white">Landscap design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- COLUMNS 4 --> */}
                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="04"><a href="javascript:;" className="text-white">Floor design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- COLUMNS 5 --> */}
                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="05"><a href="javascript:;" className="text-white">Roof top design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic5.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- COLUMNS 6 --> */}
                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="06"><a href="javascript:;" className="text-white">Decorations</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic6.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- COLUMNS 7 --> */}
                                        <div className="item">
                                            <div className="projects-two-info text-white">
                                                <h4 className="wt-tilte m-t0" data-title="07"><a href="javascript:;" className="text-white">Architecture design</a></h4>
                                                <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture.</p>
                                                <div className="wt-media img-reflection">
                                                    <img src="assets/images/gallery/pic7.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- OUR PROJECTS SECTION END -->  */}

                    {/* <!-- OUR SERVICES START --> */}
                    <div className="section-full p-t80 p-b50 bg-gray">
                        <div className="container">
                            <div className="section-head clearfix">
                                <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                                    <small className="wt-small-title">Work service</small>
                                    <h2 className="m-b5">Our great provided</h2>
                                </div>
                                <div className="title-right-detail">
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="A">Architecture design</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-mansion v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="S">smart Interior design</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-stair v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="R">Residential design</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-apartment v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="L">landscape design</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-photo v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="P">Plans and Projects</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-sketch v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large  v-icon-effect block-bg-hover bg-white">
                                        <div className="icon-content m-b30">
                                            <h4 className="wt-tilte-large m-t0" data-title="K">Kitchen design </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                                            <a href="javascript:;" className="site-button-link">Read More</a>
                                        </div>
                                        <div className="icon-xl inline-icon">
                                            <span className="icon-cell"><i className="flaticon-kitchen v-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- OUR SERVICES END --> */}


                    {/* <!-- OUR BLOG START --> */}
                    <div className="section-full p-t80 p-b50 bg-white">
                        <div className="container">
                            <div className="section-head clearfix">
                                <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                                    <small className="wt-small-title">Blog Section</small>
                                    <h2 className="m-b5">Our Latest Blog</h2>
                                </div>
                                <div className="title-right-detail">
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                                </div>
                            </div>
                            <div className="row equal-wraper">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="latest-blog-3-pattern">
                                        <div className="blog-post latest-blog-3 overlay-wraper post-overlay  large-date bg-cover bg-no-repeat bg-top-center" style={{ backgroundImage: "url(assets/images/blog/large-blog.jpg)" }}>
                                            <div className="overlay-main opacity-05 bg-black"></div>
                                            <div className="wt-post-info p-a30 text-white">
                                                <div className="post-overlay-position">
                                                    <div className="post-content-outer bdr-l-8 bdr-solid bdr-primary p-a15">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date"><strong>26</strong><span>Aug 2018</span></li>
                                                                <li className="post-author"><i className="fa fa-user-o"></i>By <a href="javascript:;">Admin</a> </li>
                                                                <li className="post-comment"><i className="fa fa-comments-o"></i> <a href="javascript:;">2 comment</a> </li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h3 className="post-title"><a href="javascript:;" className="text-white text-capitalize">Hampden-Sydney College in Virginia, looked
                                                                up one of the more obscure latin words </a></h3>
                                                        </div>
                                                        <div className="wt-post-readmore ">
                                                            <a href="javascript:;" className="site-button-link white">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-social-icon">
                                                        <ul className="social-tooltips-outer">
                                                            <li><a href="javascript:void(0);" className="fa fa-google"><span className="social-tooltips">Google</span></a></li>
                                                            <li><a href="javascript:void(0);" className="fa fa-rss"><span className="social-tooltips">Rss</span></a></li>
                                                            <li><a href="javascript:void(0);" className="fa fa-facebook"><span className="social-tooltips">Facebook</span></a></li>
                                                            <li><a href="javascript:void(0);" className="fa fa-twitter"><span className="social-tooltips">Twitter</span></a></li>
                                                            <li><a href="javascript:void(0);" className="fa fa-linkedin"><span className="social-tooltips">Linkedin</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="row latest-blog-2-outer m-t30">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray  p-a20">
                                                <div className="wt-post-info">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>25 </strong> <span>Aug 2019</span> </li>
                                                            <li className="post-author"><i className="fa fa-user-o"></i><a href="javascript:void(0);">By <span>Admin</span></a> </li>
                                                            <li className="post-comment"><i className="fa fa-comments-o"></i> <a href="javascript:void(0);">5 Comment</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h4 className="post-title"><a href="javascript:void(0);"> Never mess with a Man</a></h4>
                                                    </div>
                                                    <div className="wt-post-text ">
                                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray p-a20">
                                                <div className="wt-post-info">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>30 </strong> <span>Aug 2019</span> </li>
                                                            <li className="post-author"><i className="fa fa-user-o"></i><a href="javascript:void(0);">By <span>Admin</span></a> </li>
                                                            <li className="post-comment"><i className="fa fa-comments-o"></i> <a href="javascript:void(0);">5 Comment</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h4 className="post-title"><a href="javascript:void(0);"> Never mess with a Man</a></h4>
                                                    </div>
                                                    <div className="wt-post-text ">
                                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray p-a20">
                                                <div className="wt-post-info">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>05 </strong> <span>Sep 2019</span> </li>
                                                            <li className="post-author"><i className="fa fa-user-o"></i><a href="javascript:void(0);">By <span>Admin</span></a> </li>
                                                            <li className="post-comment"><i className="fa fa-comments-o"></i> <a href="javascript:void(0);">5 Comment</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h4 className="post-title"><a href="javascript:void(0);"> Never mess with a Man</a></h4>
                                                    </div>
                                                    <div className="wt-post-text ">
                                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray  p-a20">
                                                <div className="wt-post-info">
                                                    <div className="wt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong>22 </strong> <span>Aug 2019</span> </li>
                                                            <li className="post-author"><i className="fa fa-user-o"></i><a href="javascript:void(0);">By <span>Admin</span></a> </li>
                                                            <li className="post-comment"><i className="fa fa-comments-o"></i> <a href="javascript:void(0);">5 Comment</a> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wt-post-title ">
                                                        <h4 className="post-title"><a href="javascript:void(0);"> Never mess with a Man</a></h4>
                                                    </div>
                                                    <div className="wt-post-text ">
                                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- OUR BLOG END --> */}

                    {/* <!-- TESTIMONIAL START --> */}
                    <div className="section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center" style={{ backgroundImage: "url(assets/images/background/bg-1.jpg)" }}>
                        <div className="container">

                            <div className="section-head clearfix">
                                <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                                    <small className="wt-small-title">Best Clients</small>
                                    <h2 className="m-b5">Our Client says</h2>
                                </div>
                                <div className="title-right-detail">
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                                </div>
                            </div>

                            <div className="testimonial-slider">
                                <div id="sync1" className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-1 clearfix">
                                                <div className="testimonial-text">

                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left"></div>
                                                        <p>“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks. today we can tell you, design is concerened with how things work, how they are controled, and the nature of the interaction between people and technology. </p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name m-b5">Poul Anderson</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">Architect</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src="assets/images/testimonials/pic1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-1 clearfix">
                                                <div className="testimonial-text">

                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left"></div>
                                                        <p>“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks. today we can tell you, design is concerened with how things work, how they are controled, and the nature of the interaction between people and technology. </p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name m-b5">Poul Anderson</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">Architect</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src="assets/images/testimonials/pic2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-1 clearfix">
                                                <div className="testimonial-text">

                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left"></div>
                                                        <p>“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks. today we can tell you, design is concerened with how things work, how they are controled, and the nature of the interaction between people and technology. </p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name m-b5">Poul Anderson</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">Architect</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src="assets/images/testimonials/pic3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-1 clearfix">
                                                <div className="testimonial-text">

                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left"></div>
                                                        <p>“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks. today we can tell you, design is concerened with how things work, how they are controled, and the nature of the interaction between people and technology. </p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name m-b5">Poul Anderson</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">Architect</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src="assets/images/testimonials/pic4.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-1 clearfix">
                                                <div className="testimonial-text">

                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left"></div>
                                                        <p>“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks. today we can tell you, design is concerened with how things work, how they are controled, and the nature of the interaction between people and technology. </p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name m-b5">Poul Anderson</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">Architect</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src="assets/images/testimonials/pic5.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div id="sync2" className="owl-carousel owl-theme testimonial-1-thumb">
                                    <div className="item">
                                        <div className="wt-media">
                                            <img src="assets/images/testimonials/small/1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wt-media">
                                            <img src="assets/images/testimonials/small/2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wt-media">
                                            <img src="assets/images/testimonials/small/3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wt-media">
                                            <img src="assets/images/testimonials/small/4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="wt-media">
                                            <img src="assets/images/testimonials/small/5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <!-- TESTIMONIAL END -->  */}

                    {/* <!-- OUR TEAM START --> */}
                    <div className="section-full p-t80 p-b50 bg-white our-team-two">
                        <div className="container">

                            <div className="section-head clearfix">
                                <div className="wt-tilte-main bdr-r-3 bdr-primary bdr-solid">
                                    <small className="wt-small-title">Our Experts</small>
                                    <h2 className="m-b5">Our Best Team</h2>
                                </div>
                                <div className="title-right-detail">
                                    <p>We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great.</p>
                                </div>
                            </div>

                            <div className="section-content">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="wt-team-arc2">

                                            <div className="wt-media">
                                                <img src="assets/images/our-team1/pic1.jpg" alt="" />
                                                <div className="team-social-center">
                                                    <ul className="team-social-icon">
                                                        <li><a href="javascript:void(0);" className="fa fa-google"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="wt-info bg-white p-a30">
                                                <div className="team-detail  text-center">
                                                    <h4 className="m-t0">Taminm Alows</h4>
                                                    <p>Architect</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="wt-team-arc2">

                                            <div className="wt-media">
                                                <img src="assets/images/our-team1/pic2.jpg" alt="" />
                                                <div className="team-social-center">
                                                    <ul className="team-social-icon">
                                                        <li><a href="javascript:void(0);" className="fa fa-google"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="wt-info bg-white p-a30">
                                                <div className="team-detail  text-center">
                                                    <h4 className="m-t0">Michael Evens</h4>
                                                    <p>Architect</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="wt-team-arc2">

                                            <div className="wt-media">
                                                <img src="assets/images/our-team1/pic3.jpg" alt="" />
                                                <div className="team-social-center">
                                                    <ul className="team-social-icon">
                                                        <li><a href="javascript:void(0);" className="fa fa-google"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-rss"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-facebook"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-twitter"></a></li>
                                                        <li><a href="javascript:void(0);" className="fa fa-linkedin"></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="wt-info bg-white p-a30">
                                                <div className="team-detail  text-center">
                                                    <h4 className="m-t0">Pamela Smith</h4>
                                                    <p>Architect</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <!-- OUR TEAM END -->  */}

                    {/* <!-- OUR PARTNER START --> */}
                    <div className="section-full p-t80 p-b50 bg-white">
                        <div className="container">

                            <div className="section-content client-logo ">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w5.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w6.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 col-sm-4 col-md-3">
                                        <a href="#" className="wt-img-effect client-logo-media shadow">
                                            <img src="assets/images/client-logo/w2.png" alt="" />
                                        </a>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <!-- OUR PARTNER END -->  */}


                </div>
                {/* <!-- CONTENT END --> */}

                {/* <!-- FOOTER START --> */}
                <footer className="site-footer footer-large  footer-dark">
                    <div className="footer-social-section bg-secondry">
                        <div className="container">
                            <div className="footer-social-content">
                                <ul>
                                    <li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-vimeo"></i></a></li>
                                    <li><a href="javascript:;"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- FOOTER BLOCKES START -->   */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main"></div>
                        <div className="container-fluid">
                            <div className="row">
                                {/* <!-- RESENT POST --> */}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="widget recent-posts-entry">
                                        <h4 className="widget-title  text-uppercase">Recent Post</h4>
                                        <div className="section-content">
                                            <div className="widget-post-bx">
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src="assets/images/blog/recent-blog/pic1.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">25 Dec</li>
                                                                <li className="post-comment"> 20 Comment</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-header">
                                                            <h6 className="post-title">Planning approved for restoration town hall.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src="assets/images/blog/recent-blog/pic2.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">28 Dec</li>
                                                                <li className="post-comment"> 15 Comment</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-header">
                                                            <h6 className="post-title">Planning approved for restoration town hall.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-post clearfix">
                                                    <div className="wt-post-media">
                                                        <img src="assets/images/blog/recent-blog/pic3.jpg" alt="" />
                                                    </div>
                                                    <div className="wt-post-info">
                                                        <div className="wt-post-meta">
                                                            <ul>
                                                                <li className="post-author">30 Dec</li>
                                                                <li className="post-comment"> 11 Comment</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-header">
                                                            <h6 className="post-title">Planning approved for restoration town hall.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- ABOUT COMPANY --> */}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="widget widget_about">
                                        <h4 className="widget-title  text-uppercase">About Information</h4>
                                        <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                                    </div>

                                    <div className="widget widget_newsletter">
                                        <h4 className="widget-title  text-uppercase">Subscribe to our newsletter!</h4>
                                        <div className="newsletter-bx">
                                            <form role="search" method="post">
                                                <div className="input-group">
                                                    <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                    <span className="input-group-btn">
                                                        <button type="submit" className="site-button"><i className="fa fa-paper-plane-o"></i></button>
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
                                            <li><a href="javascript:;">About</a><a href="javascript:;">Articles</a></li>
                                            <li><a href="javascript:;">Gallery</a><a href="javascript:;">Service</a></li>
                                            <li><a href="javascript:;">Blog</a><a href="javascript:;">Our team</a></li>
                                            <li><a href="javascript:;">Portfolio</a><a href="javascript:;">Approach</a></li>
                                            <li><a href="javascript:;">Contact Us</a><a href="javascript:;">Case Studies</a></li>
                                            <li><a href="javascript:;">Career</a><a href="javascript:;">Clients</a></li>
                                            <li><a href="javascript:;">FAQ </a><a href="javascript:;">Terms & Conditions</a></li>
                                        </ul>

                                    </div>
                                </div>

                                {/* <!-- TAGS --> */}
                                <div className="col-xl-3 col-lg-6 col-md-6">
                                    <div className="widget widget_address_outer m-b20">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="widget_address">
                                            <li>92 Princess Road, parkvenue,Greater London, NW18JR, United Kingdom</li>
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
                                <a href="index.html"><img src="assets/images/logo-dark.png" alt="" /></a>
                                <span className="copyrights-text">© 2019 Your Company. Designed By thewebmax.</span>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- FOOTER END -->        */}


                {/* <!-- BUTTON TOP START --> */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>


            </div>
            {/* <!-- LOADING AREA START ===== --> */}
            {/* <div class="loading-area">
                <div class="loading-box"></div>
                <div class="loading-pic">
                    <div id="loadFacebookG">
                        <div id="blockG_1" class="facebook_blockG"></div>
                        <div id="blockG_2" class="facebook_blockG"></div>
                        <div id="blockG_3" class="facebook_blockG"></div>
                    </div>
                </div>
            </div> */}
            {/* <!-- LOADING AREA  END ====== -->  */}

            {/* <!-- JAVASCRIPT  FILES ========================================= -->  */}





        </>
    )
}
