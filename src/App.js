//import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import PreNavbar from './Components/PreNavbar';
// import Modal from './Modal/Modal';
//import Crud from './CRUD/Crud';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Slider from './Components/Slider';
//import {banner} from './data/data.json'
import Offers from './Components/Offers';
import data from './data/data.json'
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReview from './Components/ProductReview';
import Videos from './Components/Videos';
import Footer from './Components/Footer';
function App() {
 
  return (
    // <div className="App">
    //   {/* <button className='w-[150px] my-6 rounded-lg bg-red-500 text-2xl font-bold px-6 py-2'
    //     onClick={()=>setShow(true)}
      
    //   >Modal</button>
    //   <Modal show={show} onClose={()=>setShow(false)}/> */}
    //   {/* <Crud /> */}
     
    // </div>

    <Router>
    
       <PreNavbar />
     <Navbar />
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProduct StarProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu ></HotAccessoriesMenu>
     <Routes>
     <Route exact path='/music'
      element={<HotAccessories   music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}  >
     </Route>
     </Routes>
     <Routes>
     <Route exact path='/smartDevice'
      element={<HotAccessories   smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDeviceCover}/>}  >
     </Route>
     </Routes>
     <Routes>
     <Route exact path='/home'
      element={<HotAccessories   home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.homeCover}/>}  >
     </Route>
     </Routes>
     <Routes>
     <Route exact path='/lifestyle'
      element={<HotAccessories   lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifestyleCover}/>}  >
     </Route>
     </Routes>
     <Routes>
     <Route exact path='/mobileAccessories'
      element={<HotAccessories   mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}  >
     </Route>
     </Routes>
     <Heading  text="PRODUCT REVIEWS"/>
     <ProductReview productReview={data.productReviews}/>
     <Heading  text="VIDEOS" />
     <Videos video={data.videos} />
     <Footer />
    </Router>
  );
}

export default App;
