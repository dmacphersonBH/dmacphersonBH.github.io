import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Issue from './pages/Issue';
import Archive from "./pages/Archive"
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues/:issueSlug" element={<Issue />} />
            {/* Placeholder routes for the other pages in the menu */}
            <Route path="/archive" element={<Archive />}  />
            <Route path="/about" element={<About />}  />
            <Route path="/submit" element={<div style={{padding: '8rem'}}>Submit coming soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}