import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Skills from './components/skills';
import Services from './components/services/index';

function App() {
  return (
    <>
      <Header />
      <main class="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;