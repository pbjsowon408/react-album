import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "@pages/index"
import About from "@pages/about"

function App() {
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<MainPage/>}/>
      <Route index path='/about' element={<About/>}/>
      </Routes>
  </BrowserRouter>
  return <div>App 컴포넌트 화면입니다.</div>;
};

export default App;
