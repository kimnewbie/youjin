import './App.css';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <>
      <Header />
      <main class="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;