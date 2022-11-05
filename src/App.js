import css from "./App.css"
import Navbar from './components/navbar';
import Home from "./components/title";
import Service from "./components/service";
import Webelieve from "./components/webelieve";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import Footer from "./components/footer";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
  <>
    <Navbar/>  
     
      <Routes>
          <Route path="/" element={  <Home/>} /> 
          <Route path="/Service" element={ <Service/>} />    
           {/* <Webelieve/> */}
           <Route path="/Feature" element={ <Feature/>} />    
           <Route path="/Pricing" element={<Pricing/> } />   
           <Route path="/Faq" element={ <Faq/>} />     
       </Routes>
    <Footer/>

    </>
  );
}

export default App;
