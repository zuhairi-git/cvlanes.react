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


class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="App overflow-x-hidden">
                <ScrollToTop />
                <TopNavGeneric />

                <div className="blog" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className='text-light mt-5 text-shadow'>To Blog... or not to Blog</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <h1 className='text-center mt-5'>Blog</h1>
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.2s">
                            <a href='/blogs/circle-of-rhythm'>
                            <img src='../img/blog-cover.jpeg' className="w-100" alt="cover" />
                            <h5 className='mt-2'>Circle of Daily Rhythm</h5>
                            <p>Coming Soon</p>
                            </a>
                        </div>
                        
                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.3s">
                            <img src='../img/blog-cover.jpeg' className="w-100" alt="cover" />
                            <h5 className='mt-2'>To Blog... or not to Blog</h5>
                            <p>Coming Soon</p>
                        </div>

                        <div className="col-sm-12 col-md-4 wow fadeIn" data-wow-delay="0.4s">
                            <img src='../img/blog-cover.jpeg' className="w-100" alt="cover" />
                            <h5 className='mt-2'>To Blog... or not to Blog</h5>
                            <p>Coming Soon</p>
                        </div>

                    </div>
                    </div>

                <Footer />
            </div>

        );
    }
}

export default App;
