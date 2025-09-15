// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import ArticlePage from "./pages/ArticlePage"; // 1. Import the new page
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

        {/* 2. Add the dynamic route here */}
        {/* The ':' signifies that 'articleId' is a URL parameter */}
        <Route path="blogs/:articleId" element={<ArticlePage />} />

        {/* We'll add routes for Video, Support, About later */}
      </Route>
    </Routes>
  );
}

export default App;
