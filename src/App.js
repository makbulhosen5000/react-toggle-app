

import React from 'react'
import Card from './practice/Card'
import './practice/style.css'


// import React, { useState } from 'react'
// import Message from './components/Memo/Message';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Blog from './components/reactRouting/pages/Blog';
// import Contact from './components/reactRouting/pages/Contact';
// import Home from './components/reactRouting/pages/Home';
// import Error from './components/reactRouting/pages/Error';
// import Navbar from './components/reactRouting/pages/Navbar';



const cssStyle = {
  color:"white",
  textAlign:"center",
  backgroundColor:"red",
  padding:"15px",
}



function App() {
  
  return (
  
     <div>
          <div className="pageStyle">
        <h1 style={cssStyle}>Todo App</h1>
        <Card title="Call Family" desc="this is desc1" />
        <Card title="Call Mother" desc="this is desc2" />
        <Card title="Call Father" desc="this is desc3" />
        <Card title="Call Brother" desc="this is desc4" />

         
    </div>
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
