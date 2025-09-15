// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

// This is our main layout component
function Layout() {
  return (
    <div>
      <Header />
      <main>
        {/* The Outlet component renders the current page's content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* All pages will now use the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* The default page to show at the "/" route */}
        <Route index element={<HomePage />} />
        <Route path="blogs" element={<BlogsPage />} />
        {/* You will add more routes here for Video, Support, About pages */}
      </Route>
    </Routes>
  );
}

export default App;
