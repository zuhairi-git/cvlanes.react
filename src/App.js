import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

import Portfolio from "./pages/Portfolio";
import Jobseeking from "./portfolio/Jobseeking";

import Blog from "./pages/Blog";
import Blog01 from "./blogs/Blog01";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/jobseeking" element={<Jobseeking />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/circle-of-rhythm" element={<Blog01 />} />
      </Routes>
    </>

  );
}

export default App;
