import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Technologies />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
