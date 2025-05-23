
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Info from "./Info"; 
import {  LocalPhone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
const menuItems = [
  {
    title: "Fitted Wardrobes",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "ALL RANGES", links: ["Styles", "Handles"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "WALK-IN WARDROBES", links: ["Finishes", "Headboards"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "WARDROBE INTERIORS", links: ["Colours", "Mirrors"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "WARDROBE INTERIORS", links: ["Matching Bedroom Furniture", "Stools"] },
    ],
  },
  {
    title: "Sliding Wardrobes",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "All Ranges", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "FINISHES", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "COLOURS", links: ["White", "Black"] },
    ],
  },
  {
    title: "Home Office",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "ALL RANGES", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "STYLES", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "FINISHES", links: ["White", "Black"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "COLOURS", links: ["White", "Black"] },
    ],
  },
  {
    title: "Fitted Living",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "FITTED LIVING", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "DINING ROOM", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "MEDIA ROOM", links: ["White", "Black"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "BOOT ROOM", links: ["White", "Black"] },
    ],
  },
  {
    title: "Understairs",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " CONTEMPORARY ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "SAPONETTA ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "SHAKER ", links: ["White", "Black"] },
      
    ],
  },
  {
    title: "Awkward Spaces",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " ALCOVES ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "SAPONEBAY WINDOWES ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "OVER BED ", links: ["White", "Black"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " SLOPING CEILINGS", links: ["White", "Black"] },
    ],
  },
  {
    title: "Why Hammonds",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " OVER MENIFESTO ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "THE WELL-MADE DRAWER ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "WHY CHOOS FITTED FURNITURE  ", links: ["White", "Black"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " Endorsed by Which? Trusted Traders", links: ["White", "Black"] },
    ],
  },
  {
    title: "Inspiration",
    content: [
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: " CONTEMPORARY ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "SAPONETTA ", links: ["Wood", "Glass"] },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CTeKI8V8rkJw611EJ_biOM6Er_mHyBJHMA&s", label: "SHAKER ", links: ["White", "Black"] },
    ],
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = React.useState(false);
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
     backgroundColor: "#1c1c1c", 
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
    <div>
      <Info />
      
    <div onMouseLeave={() => setActiveMenu(null)}>
    <div>
        <div className="row">
          <div className="col-4"> </div>
          <div className="col-4">
            <img  src="/assets/pic/craft.jpg" style={{height:'83px',padding:'4px'}}/>
          </div>
          <div className="col-4" style={{justifyContent:'end',display:'flex',paddingRight:'65px'}}>
          <Box display="flex" alignItems="center" gap={1}>
            
          <LocalPhone fontSize="small" />
         <a href="tel:+01753530216" style={{color:'#000'}}>
          <Typography variant="body2" > 01753530216</Typography>
          </a> 
          
          
                            
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
        
        </Box>

          </div>
        </div>
        </div>
      {/* Navigation Bar */}
      <nav className={` site-header ${isScrolled ? "scrolled" : "" }`} style={{background:'#000',color:'#fff'}}>
        <ul className="flex justify-center space-x-8 text-sm font-semibold" style={{ display: 'flex' ,marginBottom:'0px'}}>
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveMenu(item.title)}
              style={{padding:'10px 20px',listStyle:'none'}}
            >
              {item.title } <span className="text-xs"><KeyboardArrowDownIcon /></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Dropdown Content */}
      {activeMenu && (
        <div className="bg-white p-6 shadow-lg" onMouseEnter={() => setActiveMenu(activeMenu)} style={{paddingTop:'20px',zIndex:"999"}}>
          <div className="grid grid-cols-4 gap-6" style={{ display: 'flex', padding:'20px' }}>
            {menuItems
              .find((menu) => menu.title === activeMenu)
              ?.content.map((item, index) => (
                <div key={index} className="text-center" style={{padding:'0px 20px'}}>
                  <img src={item.img} alt={item.label} className="w-full h-40 object-cover" />
                  <h3 className="mt-2 font-semibold" style={{fontSize:'18px' ,justifyContent:'start',display:'flex',textDecoration:'underline'}}>{item.label}</h3>
                  <div className="mt-2">
                    {item.links.map((link, i) => (
                      <p key={i} className="text-gray-600" style={{background:'#c5c9cb54',padding:'7px'}}>{link}</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;


