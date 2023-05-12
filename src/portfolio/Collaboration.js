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
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import LowFidJobseekingCarousel from '../generic/carousel/jobseeking/LowFidJobseekingCarousel';

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div> {/* className="App overflow-x-hidden" */}
                <ScrollToTop />
                <TopNavGeneric />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Collaboration Workflow Platform</title>
                    <meta name="description" content="Collaboration Workflow Platform" />
                    <meta name="type" content="blog" />
                    <meta name="url" content="https://cvlanes.com/portfolio/collaboration" />
                    <meta property="og:image" content='https://cvlanes.com/img/jobseeking-cover.jpeg' />
                    <meta property="og:image:width" content='1200' />
                    <meta property="og:image:height" content='630' />
                    <meta name="image:alt" content="Collaboration Workflow Platform" />
                </Helmet>
                <div className="App overflow-x-hidden">
                    <div className="collaboration" id="collaboration">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-6">
                                    <div className="hero-content">
                                        <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                            <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>Collaboration Workflow Platform</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Collaboration Workflow Platform</h2>
                            <h5 className='mt-4'>Introduction</h5>
                            <p>At the core of Collaboration Workflow Platform lies creativity, interconnectivity, and collaboration. As the name suggests, our service is designed to facilitate effective teamwork and streamline workflows, but we want to delve deeper into how our platform can help unleash your creative potential.
                                Our Collaboration Workflow Platform is designed to foster a culture of creativity by providing a seamless and efficient platform for live collaboration on documents. With our suite of tools and features, team members can work together in real-time, exchanging feedback and finalizing deals and content faster.
                                In addition, our platform promotes interconnectivity by removing communication barriers and enabling customers and team members to connect across various locations, time zones, and devices. This integration ensures that everyone is on the same page, improving communication and collaboration.
                                Lastly, Collaboration Workflow Platform emphasizes collaboration by providing a space for teamwork to thrive. Our platform allows team members to work together seamlessly, sharing documents and resources, and leveraging each other's strengths. This collaborative approach encourages individuals to work towards common goals, resulting in greater outcomes.
                                In conclusion, Collaboration Workflow Platform offers a comprehensive solution that fosters creativity, interconnectivity, and collaboration. By using our platform, individuals can unlock their creative potential, connect with others, and achieve common goals more efficiently.</p>
                            <div className="row mt-5">
                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Project Type</h5>
                                    <p>Landing Page, Collaboration Workflow Platform (Web and Mobile), Mobile Application</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Timeline</h5>
                                    <p>24 Weeks</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Roles</h5>
                                    <p>Product Designer | Product Manager | User Research | Testing | User Behavior Analytics</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Tools</h5>
                                    <p>Figma, Figma Jam, Maze</p>
                                </div>
                                <hr className='m-5 border border-lite' />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Objectives</h2>
                        </div>

                        <div className="m-lg-5 m-xs-3 m-sm-3">
                            <p>
                                If a service becomes too complex and involves advanced features, it can be problematic for users who don't have the time or need to learn new technologies, making it difficult for them to use the service. <br />
                                Therefore, companies should consider delivering their services on different levels based on the needs of different user groups. <br />
                                A highly sophisticated service may provide a wide range of advanced options and customization, but can be challenging for users who are not familiar with the technology. <br />
                                In contrast, a simple service may have fewer features and options, but it can be more straightforward to understand and use even for those without technical expertise. <br />
                                Ultimately, the choice between sophistication and simplicity depends on the user's priorities and how they intend to use the service.
                            </p>
                            <p>My Objectives In This Project:</p>
                            <ul>
                                <li className='p-1'><b>User-Friendly:</b> Clarify the purpose behind each step.</li>
                                <li className='p-1'><b>Intuitive:</b> Using marketing business logic for communication.</li>
                                <li className='p-1'><b>Customizable:</b> More control over the UI</li>
                                <li className='p-1'><b>Consistent:</b> Consistency in design, colors, and icons should convey the same meaning across all interfaces.</li>
                                <li className='p-1'><b>Mobile Friendly:</b> Develop the design with a mobile-first approach in mind.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="full-image mt-5" style={{ backgroundImage: 'url("../img/jobseeking/WorkFlowBG-2.jpg")' }}>
                        <div className="container-fluid">
                            <div className='m-lg-5 m-xs-3 m-sm-3'>
                                <h2 className='primary-title mb-3 mt-5'>Application Flow</h2>
                                <Col className="mb-5" md={12}>
                                    <Card>
                                        <Card.Img className='w-100 border border-1' variant="top" src="" />
                                        <Card.Body>
                                            <Card.Title className='primary-title'></Card.Title>
                                            <Card.Text>
                                                The MVP (Minimum Viable Product) workflow facilitates a quicker and more effective initiation of idea development and application towards achieving maturity. This approach is particularly crucial for startups and independent professionals who aim to rapidly build their portfolios, as I do.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Design Process</h2>
                            <img src='../img/jobseeking/DesignProcess.jpg' className="w-100" alt="cover" />
                        </div>
                        <div className="m-lg-5 m-xs-3 m-sm-3">
                            <p>Double Diamond Design Model</p>
                            <ul>
                                <li className='p-1'><b>Discover:</b> Gain a comprehensive understanding of the problem domain by conducting research and collecting insights from interviews.</li>
                                <li className='p-1'><b>Define:</b> Establish the extent of the challenge by utilizing the insights and research collected during the Discover phase.</li>
                                <li className='p-1'><b>Develope:</b> Generate concepts for potential digital solutions.</li>
                                <li className='p-1'><b>Deliver:</b> Perform user testing and refine the solution based on feedback received.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Discover Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Challenge</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Text</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Discovery</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    Text
                                </p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Initial Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    Text
                                </p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Hypothesis</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    Text
                                </p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Primary Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    <i className='d-none fa fa-circle-notch fa-lg fa-spin' style={{ animationDuration: '7s', marginTop: '10px' }}></i>
                                    Text
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Define Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                            <h3 className='primary-title mt-5'>Personas</h3>
                        </div>

                        <Row className='mb-5 mt-4'>
                            <Col className="mb-5" md={12}>
                                <Card>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <img src="../img/collaboration/avatars/john.png" className="avatars" />John J.
                                        </Card.Title>
                                        <Card.Text>
                                            Text
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-5" md={12}>
                                <Card>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <img src="../img/collaboration/avatars/julia.png" className="avatars" />Julia Romes
                                        </Card.Title>
                                        <Card.Text>
                                            Text
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Epic</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Text</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Journey</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Deliver Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Test - Session 1</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Coming Soon</p>
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
