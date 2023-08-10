import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import SignUp from './components/signup';
import SignIn from './components/signin';
import MainComponents from './components/mainComponents';

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route element={<MainComponents />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;