import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import SignUp from './components/signup';
import SignIn from './components/signin';
import MainComponents from './components/mainComponents';
import MyInfo from './components/myInfo/index';

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
          <Route path="/myInfo" element={<MyInfo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;