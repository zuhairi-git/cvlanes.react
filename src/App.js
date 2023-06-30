import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from "./pages/Home";

import Portfolio from "./pages/Portfolio";
import Jobseeking from "./portfolio/Jobseeking";
import Collaboration from "./portfolio/Collaboration";

import Blog from "./pages/Blog";
import Blog01 from "./blogs/Blog01";
import Blog02 from "./blogs/Blog02";
import Blog03 from "./blogs/Blog03";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } />

        <Route path="/portfolio" element={
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Portfolio</title>
              <meta name="description" content="Where Magic Happens" />
              <meta name="type" content="blog" />
              <meta name="url" content="https://cvlanes.com/portfolio" />
              <meta property="og:image" content='https://cvlanes.com/img/portfolio-cover-dark.jpeg' />
              <meta property="og:image:width" content='1200' />
              <meta property="og:image:height" content='630' />
              <meta name="image:alt" content="Portfolio" />
            </Helmet>
            <Portfolio />
          </>
        } />


        <Route path="/portfolio/jobseeking" element={<Jobseeking />} />
        <Route path="/portfolio/collaboration" element={<Collaboration />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/circle-of-rhythm" element={<Blog01 />} />
        <Route path="/blogs/ios-notifications" element={<Blog02 />} />
        <Route path="/blogs/premitive-human" element={<Blog03 />} />
      </Routes>
    </>

  );
}

export default App;
