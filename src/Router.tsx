import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";

// Lazy-loaded demo pages
const NavDemo = lazy(() => import("./pages/NavDemo.tsx"));
const SlideshowDemo = lazy(() => import("./pages/SlideshowDemo.tsx"));
const InfiniteScrollDemo = lazy(() => import("./pages/InfiniteScrollDemo.tsx"));
const LazyLoadDemo = lazy(() => import("./pages/LazyLoadDemo.tsx"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/navDemo" element={<NavDemo />} />
          <Route path="/slideshowDemo" element={<SlideshowDemo />} />
          <Route path="/infiniteScrollDemo" element={<InfiniteScrollDemo />} />
          <Route path="/lazyLoadDemo" element={<LazyLoadDemo />} />
          {/* Optional: 404 Page */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
