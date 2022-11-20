import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './css/style.css';
import TypewriterComponent from 'typewriter-effect';
import Hero from './img/hero.png'
import MyCV from './pdf/CV-18-18-2022.pdf'
import TopNavHTML from './pages/TopNavHTML';
import ScrollToTop from "react-scroll-to-top";


class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="App">
                <ScrollToTop />
                <TopNavHTML />

                <div className="hero" id="home">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start">
                                        <p>I'm</p>
                                        <h1>Ali Zuhairi</h1>
                                        <h2 style={{ fontSize: '1.4rem' }}>
                                            <TypewriterComponent
                                                options={{
                                                    strings: ['Professional Product Designer', 'Web Designer', 'Workflow Management Developer', 'Web UI Developer', 'Front End UI Developer', 'App Designer', 'App UI Developer'],
                                                    autoStart: true,
                                                    delay: 30,
                                                    deleteSpeed: 10,
                                                    loop: true,
                                                }}
                                            />
                                        </h2>
                                    </div>
                                    <div className="hero-btn">
                                        <a className="btn mb-2" href="#team">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-md-block">
                                <div className="hero-image pe-0">
                                    <img src={Hero} alt="Ali" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 mt-5">
                                <div className="about-content">
                                    <div className="section-header text-left">
                                        <p className='sectionSeparator'>About Me</p>
                                        <h2>10 Years Experience</h2>
                                    </div>
                                    <div className="about-text">
                                        <p>
                                            Creating user-centric and business-relevant design is my true
                                            passion. Getting a well-designed product that reflects the brand
                                            identity into the hands of compassionate users is my calling.
                                            I have the privilege to work with professional partners, marketers,
                                            sales directors, and consultants. Also, participating closely with
                                            developers with different backgrounds allowed me to create the
                                            core functionality for a sophisticated solution that supports
                                            many platforms.
                                        </p>
                                    </div>
                                    <a className="btn m-2" href="#team">Keep in touch with me</a>
                                    <a className="btn m-2" href={MyCV}>My CV (PDF)</a>

                                </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                                <div className="about-content">
                                    <div className="skills">
                                        <div className="skill-name text-start">
                                            <p>UI/UX - Figma & Adobe XD</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Adobe CC</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Design Systems (Google, Apple, Atlassian)</p><p></p>
                                        </div>
                                        <ProgressBar now={80} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Project Management</p><p></p>
                                        </div>
                                        <ProgressBar now={80} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Test Management - Zephyr Scale for Jira</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Web / Mobile App UI Development</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>WordPress and HubSpot CMS</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Agile Methodology</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>Office 365 / SharePoint Admin</p><p></p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div className="skill-name text-start">
                                            <p>React JS, Programming, and Linux Servers</p><p></p>
                                        </div>
                                        <ProgressBar now={55} label={``} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience" id="experience">
                    <div className="container">
                        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>My Resume</p>
                            <h2>Working Experience</h2>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">2017 - Present</div>
                                    <h2>Professional Product Designer</h2>
                                    <h4>Reslink, Espoo, Finland</h4>
                                    <p>
                                        Workflow Management, WebApp (SaaS), and Mobile. @Reslink Solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">2016 - Present</div>
                                    <h2>Senior UI/UX Designer</h2>
                                    <h4>Reslink, Helsinki, Finland</h4>
                                    <p>
                                        Web Application UI/UX and Android UI Development
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">2014 - 2016</div>
                                    <h2>Graphic Designer UI/UX</h2>
                                    <h4>Reslink, Helsinki, Finland</h4>
                                    <p>
                                        Graphic and Website Designer, Android and iOS Graphics and Prototype.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">2000 - 2014</div>
                                    <h2>Freelance Web and Mobile UI Designer</h2>
                                    <h4>From Damascus to Espoo</h4>
                                    <p>
                                        Website and Android Developer.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">Long time a go</div>
                                    <h2>Graphic Designer and Publisher</h2>
                                    <h4>Various Magazines and Newspapers — Tehran, Iran</h4>
                                </div>
                            </div>
                            <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">Once upon a time</div>
                                    <h2>Junior Publisher - Junior IT Expert</h2>
                                    <h4>Study and Work</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='separator'></div>

                <div className="wow zoomIn" id="achievements" data-wow-delay="0.1s">
                    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p className='sectionSeparator'>My Achievements</p>
                        <h2>To do or not to do</h2>
                    </header>
                    <div className="row m-3 justify-content-md-center mb-5">
                        <div className="col-md-5 col-sm-12">
                            <h3 className="text-start">Ongoing</h3>
                            <ul className="">
                                <li className="text-start">Prototyping the new Android UI and UX based on Google practices (Material UI 3) to stay competitive in the market.</li>
                                <li className="text-start">Developing the new Android UI with Android Studio.</li>
                                <li className="text-start">Taking the lead on developing and introducing a new UI framework for the backend(Modular SaaS) next version and modernizing the UI and UX and improving the security.</li>
                                <li className="text-start">And adding to my skills, I started to create a Testing framework in Jira to improve and fix the bugs in the new and the next version using best practices. It will save time for future testing and it could be also used as documentation for future references.</li>
                                <li className="text-start">Creating a variety of Workflow for different applications (Web, Mobile, and eCommerce).</li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <h3 className="text-start">Done</h3>
                            <ul className="">
                                <li className="text-start">Taking the lead on designing the UI for the backend(Modular SaaS) legacy versions.</li>
                                <li className="text-start">Developing UI and UX frameworks for all company's platforms.</li>
                                <li className="text-start">Taking the lead on developing the backend(Modular SaaS) new version and delivering a platform the company uses today.</li>
                                <li className="text-start">Meeting goals by designing and developing 3 eCommerce platforms for the company and our B2B2C customers + Linux server setup (LAMP).</li>
                                <li className="text-start">Meeting goals by designing and developing 3 company websites + Linux server setup (LAMP).</li>
                                <li className="text-start">Create and develop the blog in HubSpot and participate in sales and marketing.</li>
                                <li className="text-start">Participating in creating documentation.</li>
                                <li className="text-start">Significantly improve Android UI, UX, and refactoring code.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='separator mt-5'></div>

                <div className="team mb-5 mt-5" id="team">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>Social Media</p>
                            <h2>Get in touch with me</h2>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={require("./img/takeAction.jpg")} alt="Ali" />
                                    </div>
                                    <div className="team-text text-start">
                                        <h2>Ali Zuhairi</h2>
                                        <h4>Professional Product Designer</h4>
                                        <p>
                                            Thinking outside the box
                                        </p>
                                        <div className="team-social">
                                            <a className="btn" href="https://twitter.com/AliZohairi"><i className="fab fa-twitter"></i></a>
                                            <a className="btn" href="https://www.linkedin.com/in/ali-zuhairi/"><i className="fab fa-linkedin-in"></i></a>
                                            <a className="btn" href="https://www.facebook.com/zuhairi.one"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn" href="mailto:zohairi@live.com"><i className="fa fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='separator'></div>

                <div className="review wow fadeInUp mt-5" data-wow-delay="0.1s" id="review">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>Thank You for the</p>
                            <h2>Recommendations</h2>
                        </div>

                        <div className="review-icon">
                            <i className="fa fa-quote-left"></i>
                        </div>
                        <div className="reviews-carousel row">
                            <div className="col-md-6 col-xs-12">
                                <div className="review-item">
                                    <div className="review-img">
                                        <img src={require("./img/review-2.jpg")} alt="Buda" />
                                    </div>
                                    <div className="review-text">
                                        <p className='text-start'>
                                            Ali is an exceptional and experienced UI/UX designer with more than ten years of professional experience specialising in product design for technology companies. Ali believes that design is not about deliverables and beautiful pixels but about solving problems and achieving business and user goals. As a product designer, Ali focuses on usability, user experience, and user research in his designs. He has worked with small and large teams as well as a freelancer and enjoys the challenge of solving user problems. He always delivers on time and on budget.</p>
                                        <h3>Constantin Buda</h3>
                                        <h4>CMO at Vidalico Digital</h4>
                                        <h4>Hubspot Agency Partner</h4>
                                        <h4>SicTic Member</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div className="review-item">
                                    <div className="review-img">
                                        <img src={require("./img/review-1.jpg")} alt="M" />
                                    </div>
                                    <div className="review-text">
                                        <p className='text-start'>
                                            Ali is a creative product designer. You will find a lot of artists with too busy layouts and art forms. But Ali takes a lead in impressive yet simple and relevant product designs. He has this cunning ability to solve complex problem with simple solutions using his design skills. His arts speaks visually, does the job perfectly and leaves a long lasting impression. I've worked with Ali in past and it was truly a fun experience. Would love to do that again and I highly recommend Ali too.</p>
                                        <h3>Fahad M</h3>
                                        <h4>IT Contractor</h4>
                                        <h4>Travelodge Hotels Limited</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer" className="footer wow fadeIn" data-wow-delay="0.2s">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="footer-info">
                                <h2>Ali Zuhairi</h2>
                                <h3>Espoo, Suurpelto</h3>
                                <div className="footer-menu">
                                    <p className="text-light">044 2 844 844</p>
                                    <p className="text-light">zohairi@live.com</p>
                                </div>
                                <div className="footer-social">
                                    <img src={require("./img/CV-Lane-h.png")} className="w-25" alt="Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="container copyright">
                            <p>&copy; CV Lanes 2022 | Made With React.js</p>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default App;
