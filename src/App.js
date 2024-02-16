import './App.css';
import { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Contactus from './pages/contact';
import Header from './components/header';
import BlogPage from './pages/blog';
import AboutUsPage from './pages/Aboutus';
import Preloader from './components/preloader';
import Basic from './blog/cybersecurity_basic';
import Attacks from './blog/cyber_attack';
import Ipaddress from './blog/ip_address';
import Cryptography from './blog/cryptography';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Cyph3r.git" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/blog/cybersecurity-basic" element={<Basic />} />
            <Route path="/blog/cyber_attack" element={<Attacks />} />
            <Route path="/blog/ip_address" element={<Ipaddress />} />
            <Route path="/blog/cryptography" element={<Cryptography />} />



          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
