import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projekte" element={<ProjectsPage />} />
          <Route path="/projekte/:slug" element={<ProjectDetailPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
