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
        <Route path="/fitted-bedroom/HingedDoorWardrobes" element={<HingedDoorWardrobes/>} />
        <Route path="/fitted-bedroom/SlidingWardrobedDoorsByCMS" element={<SlidingWardrobedDoorsByCMS/>} />
        <Route path="/fitted-bedroom/Slidingwardrobed" element={<Slidingwardrobed/>} />
        <Route path="/fitted-bedroom/ChildrensBedroomSlidingDoorWardrobes" element={<ChildrensBedroomSlidingDoorWardrobes/>} />
        <Route path="/WhyCraftMySpace" element={<WhyCraftMySpace />} />

      </Routes>
    </>
  );
}

export default App;
