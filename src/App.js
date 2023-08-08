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
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;