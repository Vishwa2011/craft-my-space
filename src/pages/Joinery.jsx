import React, { useState } from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from "framer-motion";

const Joinery = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Can CRM software integrate with other tools we already use?",
      answer:
        "Yes, most modern CRM solutions offer integration capabilities with popular business tools such as email marketing platforms, accounting software, customer support systems, and more. Integration ensures seamless data flow and enhances overall efficiency.",
    },
    {
      question: "How does CRM software help with customer service?",
      answer:
        "CRM software improves customer service by centralizing customer information, enabling personalized interactions, tracking customer issues and inquiries, and facilitating timely responses and resolutions.",
    },
    {
      question: "What is CRM software, and how can it benefit my business?",
      answer:
        "CRM (Customer Relationship Management) software helps businesses manage interactions with current and potential customers, streamline processes, and improve customer relationships. It centralizes customer data, automates sales and marketing tasks, and provides insights to enhance decision-making and business efficiency.",
    },
    {
      question: "How do I know if my business needs CRM software?",
      answer:
        "If your business struggles with managing customer relationships, tracking sales opportunities, or maintaining efficient communication across teams, CRM software can significantly benefit you. It helps businesses of all sizes enhance productivity, boost sales, and improve customer satisfaction.",
    },
    {
      question: "How does CRM software help with sales and marketing efforts?",
      answer:
        "CRM software enhances sales and marketing efforts by providing tools for lead generation, lead nurturing, campaign management, customer segmentation, personalized marketing communications, and performance analytics to optimize strategies.",
    },
    {
      question: "Is CRM software difficult to implement and use?",
      answer:
        "The ease of implementation and use varies depending on the CRM solution. Look for platforms that offer user-friendly interfaces, intuitive design, and comprehensive training and support options to facilitate adoption among your team members.",
    },
    {
      question: "What type of support and training do you offer for implementing CRM software?",
      answer:
        "We provide comprehensive support, including initial setup assistance, training sessions for your team, ongoing technical support, and access to a knowledge base or help center to address any questions or issues.",
    },
    {
      question: "Is my data secure with CRM software?",
      answer:
        "Yes, ensuring data security is a priority. Our CRM software complies with industry standards and regulations, employs encryption protocols, conducts regular security audits, and offers features for user permissions and access control to protect your sensitive information.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
                    <h2 className="text-white">Bespoke Joinery</h2>
                  </div>
                </div>

                <div>
                  <ul className="wt-breadcrumb breadcrumb-style-2">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Bespoke Joinery</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
              {/* card start  */}
        <div className="container mt-5">
          <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
            <div>
              <h3>Joinery Production</h3>
              <p>Combining advanced technology with artisanal expertise, our joinery production delivers precision-crafted woodwork tailored to your needs. Our skilled craftsmen, trained in leading European techniques, transform premium-quality wood into elegant furniture, custom doors, decorative wall and ceiling panels, arches, columns, beams, and staircases. Whether for residential or commercial spaces, we ensure every piece reflects exceptional craftsmanship, durability, and timeless aesthetics, elevating interiors with bespoke joinery solutions</p>
            </div>
            <div className="masonry-item cat-1 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic1.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Ceilings
                  </h4>
                
                </div>
              </div>
            </div>
            <div className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic2.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Bespoke Kitchens
                  </h4>
                 
                </div>
              </div>
            </div>
            <div className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic3.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Furniture
                  </h4>
                 
                </div>
              </div>
            </div>

            <div className="masonry-item cat-4 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic1.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Walk in Wardrobes
                  </h4>
                  
                </div>
              </div>
            </div>
            <div className="masonry-item cat-5 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic2.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wooden Windows
                  </h4>
                
                </div>
              </div>
            </div>
            <div className="masonry-item cat-6 col-lg-4 col-md-6 col-sm-12 m-b30">
              <div className="project-img-effect-1">
                <img
                  src="assets/images/gallery/pic3.jpg"
                  alt=""
                />
                <div className="wt-info">
                  <h4 className="wt-tilte text-white  m-b10 m-t0">
                  Wall Panels
                  </h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card end  */}
        {/* <!-- OUR STORY SECTION START --> */}
            <div class="bg-white">
                    
                <div class="section-content">                    
             		<div class="row awards-win-section">    
                  <div className='col-lg-6 col-md-12'>
                    <div className='awards-win'>
                    <h3>Joinery and Furniture Production</h3>
                    <p>Our joinery and furniture production combines traditional craftsmanship with modern technology to create bespoke woodwork of the highest quality. From custom doors, windows, and staircases to elegant furniture and architectural wood elements, we manufacture pieces that seamlessly blend functionality and aesthetics.</p>
                        <div class="  awards-win-section-left bg-cover bg-no-repeat bg-center bg-gray" >
                         <img src='assets/images/background/bg-8.jpg'/>
                        	<div class="awards-win-left-content">
                            </div>
                        </div>
                        </div>
                  </div>                                     	
                        
                        <div class="col-lg-6 col-md-12 awards-win-section-right bg-gray">
                        	<div class="awards-win-right-content">
                                <div class="awards-win">
                               
                                <div>
                                       <h3>Benefits of Custom Joinery</h3>
                                       <p>Our in-house joinery production is structured into three key areas: precision-crafted windows, expertly designed doors, and the creation of bespoke furniture, staircases, and other interior and exterior wood elements. By maintaining full control over production, we ensure exceptional quality, seamless customization, and the perfect blend of aesthetics and durability.</p>
                                  </div>
                                    <ul>
                                                                            
                                        {/* <!-- COLUMNS 2 --> */}
                                        <li>
                                            <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                            <h4 class=" m-b10">Superior Craftsmanship & Precision</h4>
                                            <p>Utilizing state-of-the-art Italian woodworking equipment, a team of over 100 skilled carpenters, and advanced automation, we ensure unmatched precision in every joinery product. </p>
                                        </li>                                   
                                        {/* <!-- COLUMNS 3 --> */}
                                        <li>
                                            <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                            <h4 class=" m-b10">Uncompromising Quality & Finish</h4>
                                            <p>Our premium craftsmanship is achieved through meticulous material selection, precise preparation, and expert finishing techniques.</p>
                                        </li>                                    
                                        {/* <!-- COLUMNS 4 --> */}
                                        <li>
                                           <h2 class="title-year"><img src="https://bravolondon.co.uk/wp-content/uploads/2022/10/h1.png" alt="" /></h2>
                                           <h4 class=" m-b10">End-to-End Joinery Solutions</h4>
                                           <p>Our team guarantees careful delivery and professional, mess-free installation, bringing your project to life with perfection and ease.</p>
                                       </li>                                    
                                                                          
                                    </ul>
                                
                                </div>
                            </div>
                        </div>                                        
                    </div>
                </div>
            </div>       
            {/* <!-- OUR STORY SECTION END -->    */}

            {/* customer start  */}
          <div className="bg-gray overflow-hide v-title-outer">
            <div className="section-content">
              <div className="custom-block-outer clearfix bg-cover">
                {/* <div className="custom-right-part "> */}
                <div className="custom-right-part-content ">
                  {/* <div className="video-section-outer"> */}
                  <div className="our-ability m-t50">
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          1856  
                          </h1>
                          <h4 className="wt-tilte m-b0">Completed Projects</h4>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                          1498 
                          </h1>
                          <h4 className="wt-tilte m-b0">Satisfied Clients</h4>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-4">
                        <div className="m-b30 text-black wt-icon-box-wraper center">
                          <h1 className="counter font-weight-800 m-b5 site-text-primary">
                            12
                          </h1>
                          <h4 className="wt-tilte m-b0">Years in Business</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* customer end  */}

        {/* faq start */}
        <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h6 className="text-blue-600 font-semibold text-lg">FAQs</h6>
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full p-5 text-left text-gray-800 font-medium text-lg hover:bg-gray-200 transition-all duration-200"
              >
                {faq.question}
                <span className={`text-xl transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-600" : ""}`}>
                  ⌄
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 border-t border-gray-300 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* faq end */}

          {/* <!-- WELCOME SECTION START --> */}
          <div className="section-full p-t80 p-b80 bg-gray overflow-hide home-2-about-outer">
                <div className="container">
                    <div className="section-content">
                    	<div className="row">
                   
                    		<div className="col-xl-5  col-lg-6 col-md-12" style={{zIndex:'999'}}>
                            	<div className="home-2-about-left-outer">
                                    <div className="section-head clearfix">
                                        <div className="wt-tilte-main">
                                            <small className="wt-small-title">Our Company</small>
                                            <h2 className="m-b5">About Detail</h2>
                                        </div>
                                    </div>
                                    <div className="home-2-about-left">
                                        <div className="home-2-about-left-content  bg-secondry p-a50 text-white">
                                            <h2 className="m-t0 wt-title">Exploring the Quality Ways through Design.</h2>
                                            <p>We are uncompetitor in architectural solutions Friendly neighbour there that power.Keep away Architecture who try to Ambitions people do that really </p>
                                            <a href="javascript:;" className="site-button-link white">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        	<div className="col-xl-7 col-lg-6 col-md-12">
                          <div className="blog-post date-style-1 blog-detail text-black">
              <div className="wt-post-media">
                <div className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30">
                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="assets/images/blog/default/thum1.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="assets/images/blog/default/thum2.jpg" alt="" />
                    </div>
                  </div>

                  <div className="item">
                    <div className="wt-thum-bx">
                      <img src="assets/images/blog/default/thum3.jpg" alt="" />
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
            {/* <!-- WELCOME  SECTION END --> */}
        </div>
        <Footers />
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
        </div>
    </>
  )
}

export default Joinery
