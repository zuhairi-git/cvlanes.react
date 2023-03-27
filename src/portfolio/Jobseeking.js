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
                            <li className='p-1'><b>Discover:</b> Gain a comprehensive understanding of the problem domain by conducting research and collecting insights from interviews.</li>
                            <li className='p-1'><b>Define:</b> Establish the extent of the challenge by utilizing the insights and research collected during the Discover phase.</li>
                            <li className='p-1'><b>Develope:</b> Generate concepts for potential digital solutions.</li>
                            <li className='p-1'><b>Deliver:</b> Perform user testing and refine the solution based on feedback received.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Discover Phase</h2>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Challenge</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>What are some ways to make more money tomorrow? Is it feasible to secure a permanent job? Additionally, how can I discover a trustworthy functional app for searching temporary or permanent jobs nearby?</p>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Discovery</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>
                                As the cost of living continues to rise, more and more individuals are seeking ways to supplement their income. Working on weekends is a popular option for those looking to increase their earnings, whether they are students, stay-at-home parents, or anyone else in need of extra cash. Weekend work offers flexibility and provides opportunities to develop new skills, meet new people, and pursue personal passions.
                                There are several reasons why individuals may choose to work on weekends, including the desire for additional income, the flexibility to work around other commitments, the opportunity to develop new skills, the chance to network and meet new people, and the ability to pursue personal passions.
                                To make this process easier, using a job-finding application that allows you to create a profile and showcase your skills and work history can be a highly efficient way to find weekend job opportunities in your local area.</p>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Initial Research</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Hypothesis</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>A local job provider with a focus on the local market is crucial for individuals seeking employment. While there are various platforms that offer such services, many of them have an international presence and may not prioritize the domestic market. To stand out from other providers, offering efficient and user-friendly profile creation and app usage can be significant factors.</p>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Primary Research</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>Text</p>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Define Phase</h2>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Personas</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <h5 className='primary-title'>Allen</h5>
                            <p>
                                Allen is a 20-year-old vocational school student who uses the Job Seeking app occasionally, typically only once a month or every couple of months. He doesn't have a particular preference for any type of job and uses the app mainly as a way to earn extra money when he unexpectedly has free time or runs low on funds. Despite his tendency to cancel jobs at the last minute, customers report that Kevin is a diligent worker when he does show up. He is open to hard work and evening/night shifts, which are qualities appreciated by many employers. His primary job-seeking needs are centered around finding opportunities for the following evening or weekend, when he has free time and is willing to work for some extra cash.</p>
                            <h5 className='primary-title'>James</h5>
                            <p>
                                James is a university student, approximately 20-25 years old, who is determined to obtain a good diploma and pursue a career in a field that is not related to jobs offered by  Job Seeking app. Despite this, James works regularly through  Job Seeking app, typically completing 2-3 shifts per week. He has a strong preference for the restaurant industry and enjoys working the same job at the same establishment, preferably a restaurant where he is well-known. While James is occasionally willing to take on related jobs like dishwashing, his preferred role is that of a waiter at his favorite restaurant.  Job Seeking app provides James with a reliable source of supplemental income to support his student lifestyle.
                                When seeking employment through  Job Seeking app, James prioritizes finding jobs in the same industry or at least similar to his previous work experience. He has a somewhat flexible schedule, but prefers to work at his favorite restaurants whenever possible.
                            </p>
                            <h5 className='primary-title'>Eeva</h5>
                            <p>
                                Eeva is a 40-year-old who relies on a Job Seeking app as a regular source of income. She typically works 2-4 shifts per week through the app, which accounts for at least 20-40% of her total income. Eeva does not have any particular industry preferences and is willing to take on jobs from any sector. She has a reputation for being extremely reliable and has never canceled a job. Eeva is also a proactive planner and likes to schedule her work ahead of time, sometimes even several weeks in advance.
                                When searching for jobs on the app, Eeva prioritizes finding positions that offer a good salary and the ability to secure work for the days she wants to work. While she does not necessarily work every day, she is available for work on many days and wants to ensure she has consistent job opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>Epic</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>The most effective method of quickly earning money.</p>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>User Journey</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>Text</p>
                        </div>
                    </div>
                </div>

                <div className="mb-2">
                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Deliver Phase</h2>
                    </div>
                    <div className="row m-5">
                        <div className='col-sm-12 col-md-3 mb-5'>
                            <h3 className='primary-title'>User Test - Session 1</h3>
                        </div>
                        <div className='col-sm-12 col-md-9 mb-5'>
                            <p>Text</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}

export default App;
