import React from 'react'

import Main from './components/Main'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import View from './components/View'
import Aelement from './components/Aelement'
import Delete from './components/Update'
import Update from './components/Update'

const App = () => {
  return (
    <div>
      <Navbar/>
   
       <Routes>
     
            <Route  path="/" element={ <Main/>}></Route> 
            <Route  path="/home" element={<Main/>}></Route>
            <Route  path="/view/:ides"  element={<View/>}></Route>
            <Route  path="/addElement"  element={<Aelement/>}></Route>
            <Route  path="/updated/:rdes"  element={<Update/>}></Route>
            <Route  path="/delete/:ydis"  element={<Main/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
