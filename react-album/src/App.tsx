import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "@pages/index"
import About from "@pages/about"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<MainPage />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
