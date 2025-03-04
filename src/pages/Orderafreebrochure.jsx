import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import Box from "@mui/material/Box";
import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Orderafreebrochure = () => {
  const canvasRef = useRef(null);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(captchaText);
    drawCaptcha(captchaText);
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(text, 50, 40);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  return (
    <>
      <div className="page-wraper">
        <Navbar />
        <div className="page-content">
          <div
            className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/order.webp)" }}
          >
            <div className="overlay-main bg-black opacity-07"></div>
            <div className="container">
              <div className="wt-bnr-inr-entry">
                <div className="banner-title-outer">
                  <div className="banner-title-name">
                    <h2 className="text-white">Order a Free Brochure</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Order a Free Brochure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
          <div className="section-full p-t30">
  <div className="container">
    <div className="section-content">
      <div className="row">
        {/* Left Side: Form */}
        <div className="col-12 col-md-6 p-md-5 p-3">
          <form className="cons-contact-form">
            <div className="section-head text-left mb-4">
              <h2>Order a Free Brochure</h2>
            </div>

            <div className="row">
              <div className="col-12 mb-3">
                <TextField label="Your Name" variant="standard" fullWidth />
              </div>
              <div className="col-12 mb-3">
                <TextField label="Email" variant="standard" fullWidth />
              </div>
              <div className="col-12 mb-3">
                <TextField label="Mobile Number*" variant="standard" fullWidth />
              </div>
              <div className="col-12 mb-3">
                <TextField label="Address" multiline maxRows={4} variant="standard" fullWidth />
              </div>

              <div className="col-12 mb-3">
                <p>I’m looking to create a beautiful...</p>
                <div className="d-flex flex-wrap">
                  {["Fitted Wardrobe", "Living Space", "Kitchen", "Office", "Other"].map((item, index) => (
                    <label key={index} className="d-flex align-items-center me-3">
                      <Checkbox /> {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="col-12 mb-3">
                <p>I’m also interested in having a design visit</p>
                <label className="d-flex align-items-center">
                  <Checkbox /> Please phone me to arrange a time
                </label>
              </div>

              {/* CAPTCHA Section */}
              <div className="col-12 mb-3">
                <div className="d-flex align-items-center">
                  <h4 className="me-2">Code :</h4>
                  <canvas id="captcha" width="200" height="50" ref={canvasRef} className="me-3"></canvas>
                  <button type="button" className="btn btn-secondary" onClick={generateCaptcha}>
                    <i className="fa fa-refresh"></i>
                  </button>
                </div>
                <TextField label="Enter Captcha" variant="standard" fullWidth value={captchaInput} onChange={handleCaptchaChange} required />
              </div>

              {/* Submit Button */}
              <div className="col-12 mt-3">
                <button className="btn btn-dark text-uppercase w-100">Order Now</button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div
                      className="col-12 col-md-6 p-md-5 p-3 contact-info text-center m-t80 bg-gray  m-b50 col-6"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems:'center'
                      }}
                    >
                    
                        <h4 style={{ marginBottom: "30px" }}>CraftMySpace</h4>
                       <div style={{textAlign:'justify'}}>
                       <div>
                          <div className="icon-content">
                            <p>
                              <i
                                className="sl-icon-phone"
                                style={{
                                  border: "1px solid #000",
                                  borderRadius: "100%",
                                  background: "#000",
                                  color: "#fff",
                                  padding: "5px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              +01753530216
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="icon-content">
                            <p>
                              {" "}
                              <i
                                className="sl-icon-envolope"
                                style={{
                                  border: "1px solid #000",
                                  borderRadius: "100%",
                                  background: "#000",
                                  color: "#fff",
                                  padding: "5px",
                                  marginRight: "10px",
                                }}
                              ></i>
                           info@craftmyspace.uk
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="icon-content">
                            <p>
                              {" "}
                              <i
                                className="sl-icon-envolope"
                                style={{
                                  border: "1px solid #000",
                                  borderRadius: "100%",
                                  background: "#000",
                                  color: "#fff",
                                  padding: "5px",
                                  marginRight: "10px",
                                }}
                              ></i>
                                salil@craftmyspace.uk
                            </p>
                          </div>
                        </div>
                       </div>
                     
                    </div>
                


      </div>
    </div>
  </div>
</div>




        </div>
        <Footers />
        <button className="scroltop">
        <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
      </button>
      </div>
    </>
  );
};

export default Orderafreebrochure;
