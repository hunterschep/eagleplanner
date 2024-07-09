import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
      <Router>
      <div className="appContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Home />} />
          // Add additional routes here
        </Routes>
        <Footer />
      </div>
    </Router>
    );
}


export default App;
