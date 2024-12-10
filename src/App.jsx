import React from 'react'
import "./App.css";
import LandingPages from './stores/pages/LandingPages';
import {Routes,Route} from 'react-router-dom'
import Mobilepage from './stores/pages/Mobilepage'
import Computerpage from './stores/pages/Computerpage';
import Menpage from './stores/pages/Menpage';
// hii
import Womenpage from './stores/pages/Womenpage'
import Watchspage from './stores/pages/Watchspage';
import Furniturepage from './stores/pages/Furniturepage';
import Kitchenpage from './stores/pages/Kitchenpage';
import Fridgepage from './stores/pages/fridgepage';

import Tvpage from './stores/pages/Tvpage';
import Speakerpage from './stores/pages/Speakerpage';
import Bookspage from './stores/pages/Bookspage';
import Acpage from './stores/pages/Acpage';

//Single folder//
import Mobilesingle from './stores/singles/Mobilesingle';
import Womensingle from './stores/singles/Womensingle';
import Watchsingle from './stores/singles/Watchsingle';
import Mensingle from './stores/singles/Mensingle';
import Furnituresingle from './stores/singles/Furnituresingle';
import Fridgesingle from './stores/singles/Fridgesingle';
import Computersingle from './stores/singles/Computersingle';
import Tvsingle from './stores/singles/Tvsingle';
import Acsingle from './stores/singles/Acsingle';
import Booksingle from './stores/singles/Booksingle';
import Speakersingle from './stores/singles/Speakersingle';
import Kitchensingle from './stores/singles/Kitchensingle';



import UserCart from './stores/UserCart';
import Loginpage from './stores/componets/Loginpage';
import Registerpage from './stores/componets/RegisterPage';


// Not found
import NotFound from "./stores/componets/NotFound";

import { SearchProvider } from './stores/componets/SearchContext';














const App = () => {

  
  return (
    <SearchProvider >
    <div>
     
      <Routes>
    
        {/* home page */}
       {/* <Route path='/login'element={<Login/>}/> */}
       <Route path='/*' element={<NotFound/>}/>
        <Route path="/home" element={<LandingPages/>}/>
     
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/register" element={<Registerpage/>}/>

      
        {/* products pages */}
        <Route path="/Mobiles" element={<Mobilepage/>}/>
      
       <Route path="/Computers" element={<Computerpage/>}/>
       <Route path="/MenFashion" element={<Menpage />}/>
        <Route path="/WomenFashion" element={<Womenpage/>}/>
        <Route path="/Watchs" element={<Watchspage/>}/>
        <Route path="/Furniture" element={<Furniturepage/>}/>
        <Route path="/Kitchen" element={<Kitchenpage/>}/>
        <Route path="/Fridges" element={<Fridgepage/>}/>
        <Route path="/Tv's" element={<Tvpage/>}/>
        <Route path="/Speakers" element={<Speakerpage/>}/>
        <Route path="/Books" element={<Bookspage/>}/>
        <Route path="/Ac's" element={<Acpage/>}/>
        {/* Dynamic routing */}
        <Route path="/Mobiles/:id" element={<Mobilesingle/>}/>
        <Route path="/cart" element={<UserCart/>}/>
        <Route path="/Computers/:id" element={<Computersingle/>}/>
       <Route path="/MenFashion/:id" element={< Mensingle/>}/>
        <Route path="/WomenFashion/:id" element={<Womensingle/>}/>
        <Route path="/Watchs/:id" element={<Watchsingle/>}/>
        <Route path="/Furniture/:id" element={<Furnituresingle/>}/>
        <Route path="/Kitchen/:id" element={<Kitchensingle/>}/>
        <Route path="/Fridges/:id" element={< Fridgesingle/>}/>
        <Route path="/Tv/:id" element={<Tvsingle />}/>
        <Route path="/Speakers/:id" element={<Speakersingle/>}/>
        <Route path="/Books/:id" element={<Booksingle/>}/>
        <Route path="/Ac/:id" element={<Acsingle/>}/>
       

       
  
       

      </Routes>
     
     
      
    </div>
    </SearchProvider>
  )
}

export default App
