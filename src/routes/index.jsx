import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/sign-up" element={ <SignUp/> }/>
      <Route path="/sign-in" element={ <SignIn/> }/>
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
