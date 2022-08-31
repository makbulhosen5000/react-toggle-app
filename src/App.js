
// import React, { useState } from 'react'
// import Message from './components/Memo/Message';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Blog from './components/reactRouting/pages/Blog';
// import Contact from './components/reactRouting/pages/Contact';
// import Home from './components/reactRouting/pages/Home';
// import Error from './components/reactRouting/pages/Error';
// import Navbar from './components/reactRouting/pages/Navbar';


import React from 'react'
import MyApp from './practice/MyApp';




function App() {
  
  return (
  
     <div>
          <MyApp/>
     </div>




    // <BrowserRouter>
    // <Navbar/>
    //     <Routes>
    //     <Route path="/" element={  <Home />} />
    //     <Route path="/contact" element={<Contact/>}  />
    //     <Route path='/blog' element={<Blog/>} />
    //     <Route path='*' element={<Error/> } />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
