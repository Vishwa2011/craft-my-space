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
            {/* <!-- LOCATION BLOCK--> */}
            <div className="container">
              {/* <!-- GOOGLE MAP & CONTACT FORM --> */}
              <div className="section-content">
                <div className="col-12">
                  <div className="row">
                    <div className="contact-form p-a30 col-6">
                      <form
                        className="cons-contact-form"
                        method="post"
                        action="form-handler.php"
                      >
                        <div className="contact-one">
                          {/* <!-- TITLE START --> */}
                          <div
                            className="section-head text-left"
                            style={{ marginBottom: "30px" }}
                          >
                            <h2>Order a Free Brochure</h2>
                          </div>
                          {/* <!-- TITLE END -->   */}
                          <div className="row">
                            <div className="col-md-12">
                              <Box
                                component="form"
                                sx={{
                                  "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  id="standard-basic"
                                  label="Your Name"
                                  variant="standard"
                                  style={{ width: "100%" }}
                                />
                              </Box>
                            </div>

                            <div className="col-md-12">
                              <Box
                                component="form"
                                sx={{
                                  "& > :not(style)": { m: 1, width: "57ch" },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  id="standard-suffix-shrink"
                                  label="Email"
                                  variant="standard"
                                  slotProps={{
                                    htmlInput: {
                                      sx: { textAlign: "right" },
                                    },
                                    input: {
                                      endAdornment: (
                                        <InputAdornment
                                          position="end"
                                          sx={{
                                            alignSelf: "flex-end",
                                            margin: 0,
                                            marginBottom: "5px",
                                            opacity: 0,
                                            pointerEvents: "none",
                                            [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                                              {
                                                opacity: 1,
                                              },
                                          }}
                                        >
                                          @gmail.com
                                        </InputAdornment>
                                      ),
                                    },
                                  }}
                                />
                              </Box>
                            </div>
                            <div className="col-md-12">
                              <Box
                                component="form"
                                sx={{
                                  "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  id="standard-basic"
                                  label="Mobile number*"
                                  variant="standard"
                                  style={{ width: "100%" }}
                                />
                              </Box>
                            </div>
                            <div className="col-md-12">
                              <TextField
                                id="standard-multiline-flexible"
                                label=" Address"
                                multiline
                                maxRows={4}
                                variant="standard"
                                style={{ width: "100%", marginLeft: "7px" }}
                              />
                            </div>

                            <div>
                              <div style={{ padding: " 9px 22px" }}>
                                <p style={{ marginBottom: "0px" }}>
                                  I’m looking to create a beautiful...
                                </p>
                                <div>
                                  <form>
                                    <label
                                      style={{
                                        color: "#000000a8",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {" "}
                                      <Checkbox {...label} /> Fitted Wardrobe
                                    </label>
                                    <label
                                      style={{
                                        color: "#000000a8",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {" "}
                                      <Checkbox {...label} /> Living Space
                                    </label>
                                    <label
                                      style={{
                                        color: "#000000a8",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {" "}
                                      <Checkbox {...label} /> Kitchen
                                    </label>
                                    <label
                                      style={{
                                        color: "#000000a8",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {" "}
                                      <Checkbox {...label} /> Office
                                    </label>
                                    <label
                                      style={{
                                        color: "#000000a8",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      <Checkbox {...label} /> Other
                                    </label>
                                  </form>
                                </div>
                                <div>
                                  <p style={{ marginBottom: "0px" }}>
                                    I’m also interested in having a design visit
                                  </p>
                                  <label
                                    style={{
                                      color: "#000000a8",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    {" "}
                                    <Checkbox {...label} /> Please phone me to
                                    arrange a time
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div style={{padding:'10px 20px'}}>
                              <div className="mb-3 d-flex align-items-center">
                                <h4 style={{ marginRight: "5px" }}>Code : </h4>
                                <canvas
                                  id="captcha"
                                  width="200"
                                  height="50"
                                  ref={canvasRef}
                                  style={{ marginRight: "15px" }}
                                ></canvas>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  onClick={generateCaptcha}
                                >
                                  <i className="fa fa-refresh"></i>
                                </button>
                              </div>

                              <div className="mb-3">
                                {/* <input
          type="text"
          className="form-control"
          id="captcha-input"
          value={captchaInput}
          onChange={handleCaptchaChange}
          required
        /> */}
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": { m: 1, width: "57ch" },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    label="Enter Captcha "
                                    variant="standard"
                                    type="text"
                                    className="form-control"
                                    id="captcha-input"
                                    value={captchaInput}
                                    onChange={handleCaptchaChange}
                                    required
                                   
                                  />
                                </Box>
                              </div>
                            </div>
                            <div
                              className="col-md-12"
                              style={{
                                marginTop: "30px",
                                display: "flex",
                                justifyContent: "start",
                              }}
                            >
                              <div className="text-right">
                                <button
                                  name="submit"
                                  type="submit"
                                  value="Submit"
                                  className="site-button radius-no text-uppercase font-weight-600"
                                  style={{ background: "#000", color: "#fff" }}
                                >
                                  Order Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className="contact-info text-center m-t80 bg-gray  m-b50 col-6"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems:'center'
                      }}
                    >
                      {/* <div> */}
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
                      {/* </div> */}
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
