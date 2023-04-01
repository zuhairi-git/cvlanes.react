import React from 'react';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import '../css/style.css';
import TopNavGeneric from './TopNavGeneric';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer';
import { Helmet } from "react-helmet";

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="App overflow-x-hidden">
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

                <ScrollToTop />
                <TopNavGeneric />

                <div className="portfolio" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className='text-light mt-5 text-shadow primary-title'>Where Magic Happens</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <h2 className='text-center mt-5 primary-title display-2'>Portfolio</h2>
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.2s">
                            <div className='m-3 blog-link'>
                                <a href='/portfolio/jobseeking'>
                                    <img src='../img/portfolio-cover-dark.jpeg' className="w-100 blog-image" alt="cover" />
                                    <h5 className='mt-2'>Job Seeking</h5>
                                    <p>Inprogress</p>
                                    <p>User journey and behavior analytics. User actions, awareness, consideration, loyalty, feelings, opportunities, and pain points. </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}

export default App;
