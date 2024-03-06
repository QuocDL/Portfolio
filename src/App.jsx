import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar.";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
        <Cursor/>
    <section id="Trang chủ">
      <Navbar/>
      <Hero/>
    </section>
     <section id="Dịch vụ">
      <Parallax type="services"/>
      </section> 
    <section>
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio/>
    <section id="Liên hệ"> 
        <Contact/>
    </section> 

  </div>
};

export default App;
