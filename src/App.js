import css from "./App.css"
import Navbar from './components/navbar';
import Title from "./components/title";
import Service from "./components/service";
import Webelieve from "./components/webelieve";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import Footer from "./components/footer";
function App() {
  return (<>
    <Navbar/>
    <Title/>
    <Service/>
    <Webelieve/>
    <Feature/>
    <Pricing/>
    <Faq/>
    <Footer/>
    </>
  );
}

export default App;
