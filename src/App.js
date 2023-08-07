import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Skills from './components/skills';

function App() {
  return (
    <>
      <Header />
      <main class="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;