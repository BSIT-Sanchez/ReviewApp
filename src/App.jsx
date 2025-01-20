import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Subscribe from "./Pages/Subscribe";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/subscribe" element={<Subscribe/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

  )
}
export default App;