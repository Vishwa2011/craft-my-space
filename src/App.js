import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FittedBedroom from "./pages/FittedBedroom";
import FittedWardrobes from "./pages/FittedWardrobes";
import FittedLiving from "./pages/FittedLiving";
import AwkwardSpaces from "./pages/AwkwardSpaces";
import Joinery from "./pages/Joinery";
import Inspiration from "./pages/Inspiration";
import Recentwork from "./pages/Recentwork";
import Getaquote from "./pages/Getaquote";
import Orderafreebrochure from "./pages/Orderafreebrochure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./pages/Footer";
import HingedDoorWardrobes from "./pages/HingedDoorWardrobes";
import SlidingWardrobedDoorsByCMS from "./pages/SlidingWardrobedDoorsByCMS";
import Slidingwardrobed from "./pages/Slidingwardrobed";
import ChildrensBedroomSlidingDoorWardrobes from "./pages/ChildrensBedroomSlidingDoorWardrobes";
import WhyCraftMySpace from "./pages/WhyCraftMySpace";
import Walkinwardrobed from "./pages/Walkinwardrobed";
import ChildrenFittedBadrooms from "./pages/ChildrenFittedBadrooms";
import SlidingHallwayWardrobes from "./pages/SlidingHallwayWardrobes";
import SlidingHomeOfficeWardrobes from "./pages/SlidingHomeOfficeWardrobes";
import SlidingLivingAreaWardrobes from "./pages/SlidingLivingAreaWardrobes";
import SlidingBedroomWardrobes from "./pages/SlidingBedroomWardrobes";
import Bathroom from "./pages/Bathroom";
import DiningRoom from "./pages/DiningRoom";
import HomeOffice from "./pages/HomeOffice";
import Kitchens from "./pages/Kitchens";
import MediaRoom from "./pages/MediaRoom";
import Alcoves from "./pages/Alcoves";
import BayWindows from "./pages/BayWindows";
import LandingHallways from "./pages/LandingHallways";
import SlopingCeilings from "./pages/SlopingCeilings";
import UnderStairs from "./pages/UnderStairs";
// import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitted-bedroom" element={<FittedBedroom />} />
        <Route path="/FittedWardrobes" element={<FittedWardrobes />} />
        <Route path="/FittedLiving" element={<FittedLiving />} />
        <Route path="/AwkwardSpaces" element={<AwkwardSpaces />} />
        <Route path="/Joinery" element={<Joinery />} />
        <Route path="/Inspiration" element={<Inspiration />} />
        <Route path="/Recentwork" element={<Recentwork />} />
        <Route path="/Getaquote" element={<Getaquote />} />
        <Route path="/Orderafreebrochure" element={<Orderafreebrochure/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/HingedDoorWardrobes" element={<HingedDoorWardrobes/>} />
        <Route path="/SlidingWardrobedDoorsByCMS" element={<SlidingWardrobedDoorsByCMS/>} />
        <Route path="/Slidingwardrobed" element={<Slidingwardrobed/>} />
        <Route path="/fitted-bedroom/ChildrensBedroomSlidingDoorWardrobes" element={<ChildrensBedroomSlidingDoorWardrobes/>} />
        <Route path="/WhyCraftMySpace" element={<WhyCraftMySpace />} />
        <Route path="/Walkinwardrobed" element={<Walkinwardrobed />} />
        <Route path="/ChildrenFittedBadrooms" element={<ChildrenFittedBadrooms />} />
        <Route path="/fitted-bedroom/Slidingwardrobed/SlidingHallwayWardrobes" element={<SlidingHallwayWardrobes />} />
        <Route path="/fitted-bedroom/Slidingwardrobed/SlidingHomeOfficeWardrobes" element={<SlidingHomeOfficeWardrobes />} />
        <Route path="/fitted-bedroom/Slidingwardrobed/SlidingLivingAreaWardrobes" element={<SlidingLivingAreaWardrobes />} />
        <Route path="/fitted-bedroom/Slidingwardrobed/SlidingBedroomWardrobes" element={<SlidingBedroomWardrobes />} />
        <Route path="/FittedLiving/Bathroom" element={<Bathroom />} />
        <Route path="/FittedLiving/DiningRoom" element={<DiningRoom />} />
        <Route path="/FittedLiving/HomeOffice" element={<HomeOffice />} />
        <Route path="/FittedLiving/Kitchens" element={<Kitchens />} />
        <Route path="/FittedLiving/MediaRoom" element={<MediaRoom />} />
        <Route path="/AwkwardSpaces/Alcoves" element={<Alcoves />} />
        <Route path="/AwkwardSpaces/BayWindows" element={<BayWindows />} />
        <Route path="/AwkwardSpaces/BayWindows" element={<BayWindows />} />
        <Route path="/AwkwardSpaces/LandingHallways" element={<LandingHallways />} />
        <Route path="/AwkwardSpaces/SlopingCeilings" element={<SlopingCeilings />} />
        <Route path="/AwkwardSpaces/UnderStairs" element={<UnderStairs />} />


        












      </Routes>
    </>
  );
}

export default App;
