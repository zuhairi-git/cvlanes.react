import React from 'react';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import '../css/style.css';
import ScrollToTop from "react-scroll-to-top";
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';


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

                <div className="jobseeking" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className='primary-title text-light mt-5 text-shadow'>Job Seeking</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='m-5'>
                        <h2 className='primary-title'>Job Seeking Application</h2>
                        <p>In today's digital era, mobile applications are essential tools for job seekers. With millions of people using smartphones, job search apps can make the process of finding employment more convenient, efficient, and less time-consuming. </p>
                        <a className="btn btn-default" href='#'>Link to the project</a>
                    </div>
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-3 wow fadeIn" data-wow-delay="0.1s">
                            <h5 className='mt-2'>Project Type</h5>
                            <p>Fontend Appliction for End User</p>
                        </div>

                        <div className="col-sm-12 col-md-3 wow fadeIn" data-wow-delay="0.2s">
                            <h5 className='mt-2'>Timeline</h5>
                            <p>4 Weeks</p>
                        </div>

                        <div className="col-sm-12 col-md-3 wow fadeIn" data-wow-delay="0.3s">
                            <h5 className='mt-2'>Roles</h5>
                            <p>Product Designer | Product Manager | User Research | User Study | User Behavior Analytics</p>
                        </div>

                        <div className="col-sm-12 col-md-3 wow fadeIn" data-wow-delay="0.4s">
                            <h5 className='mt-2'>Tools</h5>
                            <p>Figma, Figma Jam, Maze</p>
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className='m-5'>
                        <h2 className='primary-title'>Application Flow</h2>
                        <img src='../img/jobseeking/JobSeekingFlow.jpg' className="w-100" alt="cover" />
                    </div>
                    <div className="m-5">
                        <p>MVP Flow</p>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='m-5'>
                        <h2 className='primary-title'>Design Process</h2>
                        <img src='../img/jobseeking/DesignProcess.jpg' className="w-100" alt="cover" />
                    </div>
                    <div className="m-5">
                        <p>Deuble Diamond Design Model</p>
                        <ul>
                            <li className='p-1'><b>Discover:</b> Text</li>
                            <li className='p-1'><b>Define:</b> Text</li>
                            <li className='p-1'><b>Develope:</b> Text</li>
                            <li className='p-1'><b>Deliver:</b> Text</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Discover Phase</h2>
                    </div>
                    <div className="m-5">
                        <p>Text</p>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Define Phase</h2>
                    </div>
                    <div className="m-5">
                        <p>Text</p>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                    </div>
                    <div className="m-5">
                        <p>Text</p>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Deliver Phase</h2>
                    </div>
                    <div className="m-5">
                        <p>Text</p>
                    </div>
                </div>
                <hr />

                <div className="mb-2">
                    <div className='p-5'>
                        <h2 className='primary-title text-center'>User Research</h2>
                    </div>
                    <div className="m-5">
                        <p>Text</p>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}

export default App;
