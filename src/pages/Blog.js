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
                    <title>Blog</title>
                    <meta name="description" content="To Blog... or not to Blog" />
                    <meta name="type" content="blog" />
                    <meta name="url" content="https://cvlanes.com/portfolio" />
                    <meta property="og:image" content='https://cvlanes.com/img/blog-cover.jpeg' />
                    <meta property="og:image:width" content='1200' />
                    <meta property="og:image:height" content='630' />
                    <meta name="image:alt" content="Blog" />
                </Helmet>

                <ScrollToTop />
                <TopNavGeneric />

                <div className="blog" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className='text-light mt-5 text-shadow primary-title'>To Blog... or not to Blog</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <h2 className='text-center mt-5 primary-title display-2'>Blog</h2>
                    <div className="row p-lg-5 p-xs-3 p-sm-3">

                        <div className="col-sm-12 col-md-4 wow fadeIn d-none" data-wow-delay="0.3s">
                            <img src='../img/blog-cover.jpeg' className="w-100" alt="cover" />
                            <h5 className='mt-2'>To Blog... or not to Blog</h5>
                            <p>Coming Soon</p>
                        </div>

                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.2s">
                            <div className='m-3 blog-link'>
                                <a href='/blogs/circle-of-rhythm'>
                                    <img src='../img/blog-writing.jpg' className="w-100 blog-image" alt="cover" />
                                    <h5 className='mt-2'>Circle of Daily Rhythm</h5>
                                    <p>The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day.</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.4s">
                            <div className='m-3 blog-link'>
                                <a href='/blogs/ios-notifications'>
                                    <img src='../img/blog/iphone-mail-notifications.jpg' className="w-100 blog-image" alt="cover" />
                                    <h5 className='mt-2'>How to get notifications on iOS with personal focus on?</h5>
                                    <p>Published on Linkedin</p>
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
