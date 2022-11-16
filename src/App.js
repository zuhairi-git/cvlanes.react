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
import TopNav from './pages/TopNav';


class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="App">
                <TopNav />
                <div className="hero" id="home">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div class="hero-text text-start">
                                        <p>I'm</p>
                                        <h1>Ali Zuhairi</h1>
                                        <h2>
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
                                        <a className="btn" href="#team">Contact Me</a>
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
                                        <p>Learn About Me</p>
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
                                    <a className="btn" href="#team">Keep in touch with me</a>

                                </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                                <div className="about-content">
                                    <div class="skills">
                                        <div class="skill-name text-start">
                                            <p>UI/UX - Figma & Adobe XD</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Adobe CC</p><p>75%</p>
                                        </div>
                                        <ProgressBar now={75} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Project Management</p><p>80%</p>
                                        </div>
                                        <ProgressBar now={80} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Test Management - Zephyr Scale for Jira</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Web / Mobile App UI Development</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>WordPress and HubSpot CMS</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Apple, Google, GitHub Development Portal Admin</p><p>75%</p>
                                        </div>
                                        <ProgressBar now={75} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Agile Methodology</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Office 365 / SharePoint Admin</p><p>85%</p>
                                        </div>
                                        <ProgressBar now={85} label={``} />

                                        <div class="skill-name text-start">
                                            <p>Programming and Linux Servers</p><p>55%</p>
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
                            <p>My Resume</p>
                            <h2>Working Experience</h2>
                        </header>
                        <div className="timeline">
                            <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                <div className="timeline-text text-start">
                                    <div className="timeline-date">2017 - Present</div>
                                    <h2>Professional Product Designer</h2>
                                    <h4>Reslink, Espoo, Finland</h4>
                                    <p>
                                        Workflow Management, WebApp (SaaS), and Mobile. @Reslink Solutions August 2017 - present.
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
                <div className="wow zoomIn achievement mt-5" id="achievements" data-wow-delay="0.1s">
                    <div className="section-header text-center">
                        <h2 className="text-light">My Achievments</h2>
                        <span className="text-light text-uppercase subtitle-light">As a Senior UI / UX and Product Designer</span>
                    </div>
                    <div className="row m-1 justify-content-md-center mb-5">
                        <div className="col-md-9 col-sm-12">
                            <h3 className="text-light text-start">Achieved</h3>
                            <ul className="text-light">
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
                        <div className="col-md-9 col-sm-12">
                            <h3 className="text-light text-start">Achieving</h3>
                            <ul className="text-light">
                                <li className="text-start">Prototyping the new Android UI and UX based on Google practices (Material UI 3) to stay competitive in the market.</li>
                                <li className="text-start">Developing the new Android UI with Android Studio.</li>
                                <li className="text-start">Taking the lead on developing and introducing a new UI framework for the backend(Modular SaaS) next version and modernizing the UI and UX and improving the security.</li>
                                <li className="text-start">And adding to my skills, I started to create a Testing framework in Jira to improve and fix the bugs in the new and the next version using best practices. It will save time for future testing and it could be also used as documentation for future references.</li>
                                <li className="text-start">Creating a variety of Workflow for different applications (Web, Mobile, and eCommerce).</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="team" id="team">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p>Social Media</p>
                            <h2>Get in touch with me</h2>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={require("./img/ali.jpg")} alt="Ali" />
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
                            <p>&copy; CV Lanes, All Right Reserved</p>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default App;
