import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Skills from './components/skills';
import Services from './components/services/index';
import Qualification from './components/qualification';
import Technicals from './components/technicals';

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
        <Technicals />
      </main>
    </>
  );
}

export default App;