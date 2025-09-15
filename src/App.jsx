// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import ArticlePage from "./pages/ArticlePage";
import VideoPage from "./pages/VideoPage"; // Import
import SupportPage from "./pages/SupportPage"; // Import
import AboutPage from "./pages/AboutPage"; // Import
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div>
      <Header />
      {/* Apply the container to the main content area */}
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<ArticlePage />} />
        <Route path="video" element={<VideoPage />} /> {/* Add route */}
        <Route path="support" element={<SupportPage />} /> {/* Add route */}
        <Route path="about" element={<AboutPage />} /> {/* Add route */}
      </Route>
    </Routes>
  );
}

export default App;
