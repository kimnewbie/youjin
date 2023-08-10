import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import ScrollUp from './components/scrollup';
import Main from './components/main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </BrowserRouter>
  );
}

export default App;