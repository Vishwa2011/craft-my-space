// import React from "react";
// import Navbar from "./Navbar";
// import Box from "@mui/material/Box";
// import { filledInputClasses } from "@mui/material/FilledInput";
// import { inputBaseClasses } from "@mui/material/InputBase";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import Footers from "./Footer";

// const Getaquote = () => {
//   return (
//     <>
//       <div className="page-wraper">
//         <Navbar />
//         <div className="page-content">
//           <div
//             className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
//             data-stellar-background-ratio="0.5"
//             style={{ backgroundimage: "url(images/banner/1.jpg)" }}
//           >
//             <div className="overlay-main bg-black opacity-07"></div>
//             <div className="container">
//               <div className="wt-bnr-inr-entry">
//                 <div className="banner-title-outer">
//                   <div className="banner-title-name">
//                     <h2 className="text-white">Get Quote</h2>
//                   </div>
//                 </div>

//                 <div>
//                   <ul className="wt-breadcrumb breadcrumb-style-2">
//                     <li>
//                       <a href="/">Home</a>
//                     </li>
//                     <li>Get Quote</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//           <div className="section-full p-t30">
//             {/* <!-- LOCATION BLOCK--> */}
//             <div className="container">
//               {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
//               <div className="section-content">
//                 <div className="col-12">
//                   <div className="row">
//                     <div className="contact-form p-a30 col-6">
//                       <form
//                         className="cons-contact-form"
//                         method="post"
//                         action="form-handler.php"
//                       >
//                         <div className="contact-one">
//                           {/* <!-- TITLE START --> */}
//                           <div className="section-head text-left"  style={{marginBottom:'30px'}}>
//                             <h4 className="m-b6">Contact Us</h4>
//                             <h3>Do You Need Any Help?Send Message</h3>
//                           </div>
//                           {/* <!-- TITLE END -->   */}
//                           <div className="row">
//                             <div className="col-md-12">
//                               <Box
//                                 component="form"
//                                 sx={{
//                                   "& > :not(style)": { m: 1, width: "25ch" },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField
//                                   id="standard-basic"
//                                   label="Your Name"
//                                   variant="standard"
//                                   style={{ width: "100%" }}
//                                 />
//                               </Box>
//                             </div>
//                             <div className="col-md-6">
//                               <Box
//                                 component="form"
//                                 sx={{
//                                   "& > :not(style)": { m: 1, width: "25ch" },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField
//                                   id="standard-basic"
//                                   label="Mobile"
//                                   variant="standard"
//                                 />
//                               </Box>
//                             </div>

//                             <div className="col-md-6">
//                               <Box
//                                 component="form"
//                                 sx={{
//                                   "& > :not(style)": { m: 1, width: "27ch" },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField
//                                   id="standard-basic"
//                                   label="Subject"
//                                   variant="standard"
//                                 />
//                               </Box>
//                             </div>
//                             <div className="col-md-12">
//                               <Box
//                                 component="form"
//                                 sx={{
//                                   "& > :not(style)": { m: 1, width: "57ch" },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                               >
//                                 <TextField
//                                   id="standard-suffix-shrink"
//                                   label="Email"
//                                   variant="standard"
//                                   slotProps={{
//                                     htmlInput: {
//                                       sx: { textAlign: "right" },
//                                     },
//                                     input: {
//                                       endAdornment: (
//                                         <InputAdornment
//                                           position="end"
//                                           sx={{
//                                             alignSelf: "flex-end",
//                                             margin: 0,
//                                             marginBottom: "5px",
//                                             opacity: 0,
//                                             pointerEvents: "none",
//                                             [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
//                                               {
//                                                 opacity: 1,
//                                               },
//                                           }}
//                                         >
//                                           @gmail.com
//                                         </InputAdornment>
//                                       ),
//                                     },
//                                   }}
//                                 />
//                               </Box>
//                             </div>
//                             <div className="col-md-12">
//                               <TextField
//                                 id="standard-multiline-flexible"
//                                 label="Message"
//                                 multiline
//                                 maxRows={4}
//                                 variant="standard"
//                                 style={{ width: "100%",marginLeft:'7px' }}
//                               />
//                             </div>

//                             <div className="col-md-12" style={{marginTop:'30px', display:'flex' , justifyContent:'start'}}>
//                               <div className="text-right">
//                                 <button
//                                   name="submit"
//                                   type="submit"
//                                   value="Submit"
//                                   className="site-button radius-no text-uppercase font-weight-600"
//                                   style={{background:'#000' , color:'#fff'}}
//                                 >
//                                   Submit
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </form>
//                     </div>

//                     <div className="contact-info text-center m-t80 bg-gray  m-b50 col-6" style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
//                         <div>
//                         <h4 style={{marginBottom:'30px'}}>Craft My Space</h4>
//                         <div>
//                               <div className="icon-content">
//                                    <p><i className="sl-icon-phone" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>+01753530216</p>
//                                </div> 
//                         </div>
//                         <div>
//                         <div className="icon-content">
                              
//                               <p> <i className="sl-icon-envolope" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>info@gmail.com</p>
//                             </div>
//                         </div>
//                         <div>
//                         <div className="icon-content">
                              
//                               <p> <i className="sl-icon-envolope" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>demo@gmail.com</p>
//                             </div>
//                         </div>
// </div>
                     
//                     </div>
                 
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div >
//                      <iframe 
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95592831590437!3d-37.8172097420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd5bb%3A0x2e3f35dd18f56b1d!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632983659483!5m2!1sen!2sin" 
//   width="1500" 
//   height="450" 
//   style={{border:'0'}}
//   allowfullscreen="" 
//   loading="lazy">
// </iframe>
//                      </div>
//                      <Footers />
//       </div>
//     </>
//   );
// };

// export default Getaquote;
import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Footers from "./Footer";
import "@mui/material/FilledInput";
import "@mui/material/InputBase";

const Getaquote = () => {
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <div className="page-content">
        <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundimage: "url(images/banner/1.jpg)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Get A Quote </h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li> Get A Quote</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="section-full p-t30">
            <div className="container">
              <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="contact-form p-a30 col-md-6 col-12">
                  <form className="cons-contact-form" method="post" action="form-handler.php">
                    <div className="contact-one">
                      <h4 className="m-b6">Contact Us</h4>
                      <h3>Do You Need Any Help? Send Message</h3>
                      <Box sx={{ width: '100%' }}>
                        <TextField fullWidth label="Your Name" variant="standard" margin="normal" />
                        <TextField fullWidth label="Mobile" variant="standard" margin="normal" />
                        <TextField fullWidth label="Subject" variant="standard" margin="normal" />
                        <TextField fullWidth label="Email" variant="standard" margin="normal" InputProps={{
                          endAdornment: <InputAdornment position="end">@gmail.com</InputAdornment>
                        }} />
                        <TextField fullWidth label="Message" multiline rows={4} variant="standard" margin="normal" />
                      </Box>
                      <button className="site-button" style={{ background: '#000', color: '#fff', padding: '10px 20px', marginTop: '20px' }}>Submit</button>
                    </div>
                  </form>
                </div>
                
                <div className="contact-info col-md-6 col-12 text-center bg-gray p-4" style={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
                <div>
                        <h4 style={{marginBottom:'30px'}}>Craft My Space</h4>
                        <div>
                              <div className="icon-content">
                                   <p><i className="sl-icon-phone" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>+01753530216</p>
                               </div> 
                        </div>
                        <div>
                        <div className="icon-content">
                              
                              <p> <i className="sl-icon-envolope" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>info@gmail.com</p>
                            </div>
                        </div>
                        <div>
                        <div className="icon-content">
                              
                              <p> <i className="sl-icon-envolope" style={{border:'1px solid #000',borderRadius:'100%',background:'#000',color:'#fff',padding:'5px',marginRight:'10px'}}></i>demo@gmail.com</p>
                            </div>
                        </div>
</div>
                     
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95592831590437!3d-37.8172097420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcd5bb%3A0x2e3f35dd18f56b1d!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1632983659483!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: '0' }}
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
          
          <Footers />
        </div>
      </div>
    </>
  );
};

export default Getaquote;
