import React from 'react'
import Navbar from './Navbar'

const Getaquote = () => {
  return (
    <>
           <div className="page-wraper">
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
                  <h2 className="text-white">Get Quote</h2>
                </div>
              </div>

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Get Quote</li>               
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
          <div className='col-12'>
            <div className='row'>
                        <div className="contact-form p-a30 col-6"> 

                            <form className="cons-contact-form" method="post" action="form-handler.php">

                                <div className="contact-one">
                                
                                    {/* <!-- TITLE START --> */}
                                    <div className="section-head text-left">
                                        <h2 className="m-b5">Get In Touch</h2>
                                    </div>
                                    {/* <!-- TITLE END -->   */}
                                    <div className="row"> 
                                        <div className="col-md-6">                               
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" rows="4" className="form-control " required placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-right">
                                                <button  name="submit" type="submit" value="Submit" className="site-button radius-no text-uppercase font-weight-600" >Submit</button>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </form>
                        </div>
                        
                        <div className="contact-info text-center m-t80 bg-gray  m-b50 col-6">
 
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-4">                              
                                    <div className="wt-icon-box-wraper center m-b30">
                                    	<div className="icon-md m-b20"><i className="sl-icon-phone"></i></div>
                                        <div className="icon-content">
                                            <h5 className="m-t0 font-weight-500">Phone number</h5>
                                            <p>+1 (456) 789 10 12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4"> 
                                    <div className="wt-icon-box-wraper center m-b30">
                                        <div className="icon-md m-b20"><i className="sl-icon-envolope"></i></div>
                                        <div className="icon-content">
                                            <h5 className="m-t0 font-weight-500">Email address</h5>
                                            <p>demo@gmail.com</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4"> 
                                    <div className="wt-icon-box-wraper center m-b30">
                                        <div className="icon-md m-b20"><i className="sl-icon-map"></i></div>
                                        <div className="icon-content">
                                            <h5 className="m-t0 font-weight-500">Address info</h5>
                                            <p>55/11 Land Street, Modern New Yourk City, USA</p>
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
              
           </div>
           </div>
    </>
  )
}

export default Getaquote
