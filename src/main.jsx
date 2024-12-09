import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"


import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './stores/contex/Usecontex'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Cartprovider>
 
  <App/>
  </Cartprovider>
  </BrowserRouter>
  
)



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { Cartprovider } from './stores/contex/Usecontex'; 

// createRoot(document.getElementById('root')).render(
//     // <StrictMode>
//         <BrowserRouter>
//             <Cartprovider>
//                 <App />
//             </Cartprovider>
//         </BrowserRouter>
//     // </StrictMode>
// );

