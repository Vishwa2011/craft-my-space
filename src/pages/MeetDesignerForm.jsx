// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const MeetDesignerForm = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isFadingIn, setIsFadingIn] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     location: "",
//     preferences: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//       setTimeout(() => setIsFadingIn(true), 50); // Delay for smooth fade-in
//     }, 5000); // Show after 5 seconds

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   const handleClose = () => {
//     setIsFadingIn(false);
//     setTimeout(() => setIsVisible(false), 500); // Delay for fade-out effect
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (formData.contactNumber.length !== 10) {
//       newErrors.contactNumber = "Contact Number must be exactly 10 digits";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       navigate("/Thankyou");

//       setFormData({
//         fullName: "",
//         email: "",
//         contactNumber: "",
//         location: "",
//         preferences: "",
//       });
//     }
//   };

//   return (
//     <>
//       {isVisible && isFadingIn && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0, 0, 0, 0.7)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999,
//             opacity: isFadingIn ? 1 : 0,
//             transform: isFadingIn ? "scale(1)" : "scale(0.8)",
//             transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
//           }}
//         >
//           <div
//             style={{
//               background: "#f6f6f6",
//               padding: "40px",
//               borderRadius: "8px",
//               width: "500px",
//               boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={handleClose}
//               style={{
//                 position: "absolute",
//                 top: "15px",
//                 right: "20px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "24px",
//                 cursor: "pointer",
//               }}
//             >
//               ×
//             </button>
//             <h2>MEET A DESIGNER</h2>
//             <p>
//               Welcome to CraftMySpace, where collaboration turns your ideas into
//               reality. Let's explore materials and possibilities to create your
//               perfect space.
//             </p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 required
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Only letters allowed
//                 }}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.fullName && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.fullName}
//                 </p>
//               )}

//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.email && (
//                 <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
//               )}

//               <input
//                 type="text"
//                 required
//                 name="contactNumber"
//                 placeholder="Contact Number"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 onInput={(e) => {
//                   e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers allowed
//                 }}
//                 maxLength={10} // Maximum 10 digits
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.contactNumber && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.contactNumber}
//                 </p>
//               )}

//               <input
//                 type="text"
//                 required
//                 name="location"
//                 placeholder="Your Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               {errors.location && (
//                 <p style={{ color: "red", fontSize: "14px" }}>
//                   {errors.location}
//                 </p>
//               )}

//               <textarea
//                 name="preferences"
//                 placeholder="Share your preferences with us..."
//                 value={formData.preferences}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               ></textarea>

//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: "#000",
//                   color: "#fff",
//                   width: "100%",
//                   padding: "10px",
//                   border: "none",
//                   cursor: "pointer",
//                 }}
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MeetDesignerForm;
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Info from "./Info";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 || window.innerWidth <= 1024) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // For resizing effect
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (


     <Box
    sx={{ 
      width: { xs: 320, sm: 375, md: 400 }, 
      padding: 2, 
      // backgroundColor: "#1c1c1c", 
      color: "#fff" 
    }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2, marginTop: 2 }}>
        <img
           src="/assets/pic/CMS LOGO 1.png"
         alt="CraftMySpace"
          style={{ width: "150px" }}
        />
        <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      {/* <!-- OUR GALLERY  --> */}
      <div className=" widget_gallery mfp-gallery p-a30 ">
        <h4 className="widget-title " style={{color:'white'}}>Our Gallery</h4>
        <div className="row no-gutters justify-content-center">
          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/kl (2).jpg" className="mfp-link" > */}
                <img src="/assets/pic/kl (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/kp (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/kp (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum  m-1">
              <a href="/assets/pic/kblog (4).webp" className="mfp-link"> */}
                <img src="/assets/pic/kblog (1).webp" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/childrensblog (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/childrensblog (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/underblog (2).webp" className="mfp-link"> */}
                <img src="/assets/pic/underblog (1).webp" alt="" />
              {/* </a>
            </div> */}
          </div>

          <div className="col-6 col-sm-4 p-1">
            {/* <div className="wt-post-thum m-1">
              <a href="/assets/pic/dainingblog (2).jpg" className="mfp-link"> */}
                <img src="/assets/pic/dainingblog (1).jpg" alt="" />
              {/* </a>
            </div> */}
          </div>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "#444" }} />
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2,color:"white" }}>
        Contact Info
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <LocationOnIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Unit 9 Slough Interchange,Whittenham Close,Slough SL2 5EP" />
        </ListItem>
        <ListItem>
  <ListItemIcon>
    <EmailIcon sx={{ color: "#fff" }} />
  </ListItemIcon>
  <ListItemText
    primary={
      <a
        href="mailto:info@craftmyspace.uk"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        info@craftmyspace.uk
      </a>
    }
  />
</ListItem>

<ListItem>
  <ListItemIcon>
    <PhoneIcon sx={{ color: "#fff" }} />
  </ListItemIcon>
  <ListItemText
    primary={
      <a
        href="tel:+01753530216"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        +01753530216
      </a>
    }
  />
</ListItem>

      </List>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 1, marginTop: 2 }}
      >
        <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <FacebookIcon />
</IconButton>

<IconButton component="a" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <PinterestIcon />
</IconButton>

<IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
  <InstagramIcon />
</IconButton>
        {/* <IconButton sx={{ color: "#fff" }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}>
          <HomeIcon />
        </IconButton> */}
      </Box>
    </Box>
  
  );

  return (
    <div className="page-wraper">
   

    <div className="infonone">
    <Info />
    </div>

      {/* <header className="site-header header-style-1 header-fixed nav-wide" > */}
      <header className={` site-header ${isScrolled ? "scrolled" : "" }`}>
        <div className="main-bar-wraper">
          <div className="main-bar p-t5" >
            <div className="">
              <div className="logo-header" style={{marginLeft:'10px'}}>
                <div className="logo-header-inner logo-header-one">
                  <a href="/">
                    <img src="/assets/pic/CMSLOGO.png" alt="" />
                  </a>
                </div>
              </div>
              {/* Toggle button for mobile */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{ color: "#141b1f", justifyContent: "flex-end" }}
              >
                ☰
              </button>
              {/* MAIN Nav */}
              <div className={`header-nav ${menuOpen ? "open" : ""}`}>
                <ul className="nav navbar-nav scroll">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/WhyCraftMySpace">Why CraftMySpace?</a>
                    <ul className="sub-menu">
                      <li><a  href="/Mission">Our Mission</a></li>
                      <li><a  href="/Vision">Our Vision</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/fitted-bedroom">Fitted Bedrooms</a>
                      </li>
                      <li>
                        <a href="/FittedWardrobes">Fitted Wardrobes</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/HingedDoorWardrobes">
                              Hinged Door Wardrobes
                            </a>
                          </li>
                          <li>
                            <a href="/SlidingWardrobedDoorsByCMS">
                              Sliding Wardrobe Doors By CMS
                            </a>
                          </li>
                          <li>
                            <a href="/Slidingwardrobed">Sliding Wardrobes</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="/ChildrensBedroomSlidingDoorWardrobes">
                                  Children’s Bedroom Sliding Door Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingHallwayWardrobes">
                                  Sliding Hallway Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingHomeOfficeWardrobes">
                                  Sliding Home Office Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingLivingAreaWardrobes">
                                  Sliding Living Area Wardrobes
                                </a>
                              </li>
                              <li>
                                <a href="/SlidingBedroomWardrobes">
                                  Sliding Bedroom Wardrobes
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/Walkinwardrobed">Walk-in Wardrobes</a>
                          </li>
                          <li>
                            <a href="/ChildrenFittedBadrooms">
                              Children's Fitted Bedrooms
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/FittedLiving">Fitted Living</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Bathroom">Bathroom</a>
                          </li>
                          <li>
                            <a href="/DiningRoom">Dining Room</a>
                          </li>
                          <li>
                            <a href="/HomeOffice">Home Office</a>
                          </li>
                          <li>
                            <a href="/Kitchens">Kitchens</a>
                          </li>
                          <li>
                            <a href="/MediaRoom">Media Room</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/AwkwardSpaces">Awkward Spaces</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Alcoves">Alcoves</a>
                          </li>
                          <li>
                            <a href="/BayWindows">Bay Windows</a>
                          </li>
                          <li>
                            <a href="/LandingHallways">Landing & Hallways</a>
                          </li>
                          <li>
                            <a href="/SlopingCeilings">Sloping Ceilings</a>
                          </li>
                          <li>
                            <a href="/UnderStairs">Under Stairs</a>
                          </li>
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
                  <li>
                    <a href="">Gallery</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Recentwork">Recent Work</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Get Quote</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="/GetaQuote">Get A Quote</a>
                      </li>
                      <li>
                        <a href="/Orderafreebrochure">Order A Free Brochure</a>
                      </li>
                      <li>
                        <a href="/PrivacyPolicy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/Termandcondition">Terms & Conditions</a>
                      </li>
                    </ul>
                  </li>
                  {/* <li style={{marginRight:'22px'}}>
                  <div className="extra-nav" style={{height:'0px'}}>
                                <div className="extra-cell" style={{display:"block"}}>											
                                    <a href="#search" className=" text-white">
                                    	<i className="fa fa-search" style={{fontSize:'20px'}}></i>
                                    </a>
                                </div>
                            </div>
                        
                            <div id="search"> 
                                <span className="close"></span>
                                <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                    <div className="input-group">
                                        <input className="form-control" value="" name="q" type="search" placeholder="Type to search"/>
                                        <span className="input-group-append"><button type="button" className="search-btn"><i className="sl-icon-magnifier"></i></button></span>
                                    </div>   
                                </form>
                            </div> 
                  </li> */}
                  <li>
          
                            
                    <div>
                      <IconButton
                        onClick={() => setOpen(!open)}
                        className="icon_focus"
                        style={{ color: "#141b1f", padding: "0px" }}
                      >
                        <AppsIcon />
                      </IconButton>
                      <Drawer
                        anchor="right"
                        open={open}
                        onClose={toggleDrawer(false)}
                      >
                        {list}
                      </Drawer>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style>{`
      .css-y7ab46-MuiPaper-root-MuiDrawer-paper{
      background: #1c1c1c;
      }
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: white;
            position: absolute;
            right: 20px;
            top: 22px;
          }
          .header-nav {
            display: none;
          }
          .header-nav.open {
            display: block;
            width: 250px; 
            height: 100vh;
            overflow: scroll;
          }
          .icon_focus{
            display:none;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none;
          }
          .header-nav {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;