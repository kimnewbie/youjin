import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Skills from './components/skills';
import Services from './components/services/index';
import Qualification from './components/qualification';
import Testimonial from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollUp from './components/scrollup';
import Work from './components/work';

function App() {
  return (
    <>
      <Header />

      <main class="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonial /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;