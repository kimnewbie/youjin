import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import ScrollUp from './components/scrollup';
import Main from './components/main';
import { Routes, useNavigate, withRouter } from 'react-router-dom';
import RestrictRoute from './restrict';

function App() {
  // const NonBlockApp = withRouter(Routes);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="main">
        {/* <Main /> */}
        <RestrictRoute component={navigate} />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;