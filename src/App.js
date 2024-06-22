import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-100 min-h-screen p-[16px]">
        <Navbar />
        <br />
        <div id="carousel">
          <Carousel />
        </div>
        <br />
        <div id="about">
          <About />
        </div>
        <br />
        <div id="gallery">
          <Gallery />
        </div>
        <br />
        <div id="contact">
          <Contact />
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
