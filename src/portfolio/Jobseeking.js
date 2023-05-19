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
import LowFidJobseeking from '../generic/carousel/jobseeking/LowFidJobseeking';
import LowFidJobseekingNormal from '../generic/carousel/jobseeking/LowFidJobseekingNormal';
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
                    <title>Job Seeking Application</title>
                    <meta name="description" content="Job Seeking Application" />
                    <meta name="type" content="blog" />
                    <meta name="url" content="https://cvlanes.com/portfolio/jobseeking" />
                    <meta property="og:image" content='https://cvlanes.com/img/jobseeking-cover.jpeg' />
                    <meta property="og:image:width" content='1200' />
                    <meta property="og:image:height" content='630' />
                    <meta name="image:alt" content="Job Seeking Application" />
                </Helmet>
                <div className="App overflow-x-hidden">
                    <div className="jobseeking" id="jobseeking">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-6">
                                    <div className="hero-content">
                                        <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                            <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>Job Seeking</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Job Seeking Application</h2>
                            <p>In today's digital era, mobile applications are essential tools for job seekers. With millions of people using smartphones, job search apps can make the process of finding employment more convenient, efficient, and less time-consuming. </p>
                            <div className="row mt-5">
                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Project Type</h5>
                                    <p>Frontend Appliction for End User</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Timeline</h5>
                                    <p>8 Weeks</p>
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

                            <Container className='mt-3'>
                                <h2 className='primary-title'>Low-Fid Prototype</h2>
                                <div className='col-md-auto mb-5 d-none'>
                                    <div className="figma text-center">
                                        <iframe
                                            style={{ borderRadius: '10px' }}
                                            width="100%"
                                            height="auto"
                                            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGu3b0JHoN773RkYQ1iz7eV%2FLow-Fidelity-Design-Kit%3Fpage-id%3D403%253A643%26node-id%3D403-664%26viewport%3D131%252C463%252C0.48%26scaling%3Dscale-down%26starting-point-node-id%3D403%253A644"
                                            allowfullscreen >
                                        </iframe>
                                    </div>
                                </div>
                                <Row className="mt-5 d-flex justify-content-center">
                                    <Col className="text-center mb-5" md={4}>
                                        <Button className='w-100' href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGu3b0JHoN773RkYQ1iz7eV%2FLow-Fidelity-Design-Kit%3Fpage-id%3D403%253A643%26node-id%3D403-664%26viewport%3D131%252C463%252C0.48%26scaling%3Dscale-down%26starting-point-node-id%3D403%253A644" target="_blank" variant="primary">Low-Fid Prototype (Figma)</Button>
                                    </Col>
                                    <Col className="text-center mb-5" md={4}>
                                        <Button className='w-100' href="#" target="_blank" variant="primary">High-Fid Prototype (Coming Soon)</Button>
                                    </Col>
                                </Row>
                                <div className='d-flex justify-content-center text-center mb-5'>
                                    <LowFidJobseekingCarousel />
                                </div>
                            </Container>

                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <hr className='m-5 border border-lite' />
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
                                <p>What are some ways to make more money tomorrow? Is it feasible to secure a permanent job? Additionally, how can I discover a trustworthy functional app for searching temporary or permanent jobs nearby?</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Discovery</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    As the cost of living continues to rise, more and more individuals are seeking ways to supplement their income. Working on weekends is a popular option for those looking to increase their earnings, whether they are students, stay-at-home parents, or anyone else in need of extra cash. Weekend work offers flexibility and provides opportunities to develop new skills, meet new people, and pursue personal passions.
                                    There are several reasons why individuals may choose to work on weekends, including the desire for additional income, the flexibility to work around other commitments, the opportunity to develop new skills, the chance to network and meet new people, and the ability to pursue personal passions.
                                    To make this process easier, using a job-finding application that allows you to create a profile and showcase your skills and work history can be a highly efficient way to find weekend job opportunities in your local area.</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Initial Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Comparing job seeking methods and platforms can be challenging due to varying perspectives and levels of technological understanding among people. Nevertheless, the approach taken to provide job seeking services can greatly impact the outcome. One potential approach is to implement an obligatory contract after an employer-employee match has been made, which could increase the likelihood of finding work and offer a sense of security.</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Hypothesis</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>A local job provider with a focus on the local market is crucial for individuals seeking employment. While there are various platforms that offer such services, many of them have an international presence and may not prioritize the domestic market. To stand out from other providers, offering efficient and user-friendly profile creation and app usage can be significant factors.</p>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Primary Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    <i className='d-none fa fa-circle-notch fa-lg fa-spin' style={{ animationDuration: '7s', marginTop: '10px' }}></i>
                                    It is crucial at this point to identify potential test candidates who are actively searching for temporary or permanent employment. These candidates should fall under two main categories, namely temporary job seekers and permanent job seekers. Additionally, each category should be further hypothetically divided into various personas.
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
                                    <Card.Img className='w-100' variant="top" src="../img/jobseeking/UserPersonaAllen.jpeg" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>Allen</Card.Title>
                                        <Card.Text>
                                            Allen is a 20-year-old vocational school student who uses the Job Seeking app occasionally, typically only once a month or every couple of months. He doesn't have a particular preference for any type of job and uses the app mainly as a way to earn extra money when he unexpectedly has free time or runs low on funds. Despite his tendency to cancel jobs at the last minute, customers report that Kevin is a diligent worker when he does show up. He is open to hard work and evening/night shifts, which are qualities appreciated by many employers. His primary job-seeking needs are centered around finding opportunities for the following evening or weekend, when he has free time and is willing to work for some extra cash.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-5" md={12}>
                                <Card>
                                    <Card.Img className='w-100' variant="top" src="../img/jobseeking/UserPersonaJames.jpeg" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>James</Card.Title>
                                        <Card.Text>
                                            James is a university student, approximately 20-25 years old, who is determined to obtain a good diploma and pursue a career in a field that is not related to jobs offered by  Job Seeking app. Despite this, James works regularly through  Job Seeking app, typically completing 2-3 shifts per week. He has a strong preference for the restaurant industry and enjoys working the same job at the same establishment, preferably a restaurant where he is well-known. While James is occasionally willing to take on related jobs like dishwashing, his preferred role is that of a waiter at his favorite restaurant.  Job Seeking app provides James with a reliable source of supplemental income to support his student lifestyle.
                                            When seeking employment through  Job Seeking app, James prioritizes finding jobs in the same industry or at least similar to his previous work experience. He has a somewhat flexible schedule, but prefers to work at his favorite restaurants whenever possible.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-5" md={12}>
                                <Card>
                                    <Card.Img className='w-100' variant="top" src="../img/jobseeking/UserPersonaEeva.jpeg" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>Eeva</Card.Title>
                                        <Card.Text>
                                            Eeva is a 40-year-old who relies on a Job Seeking app as a regular source of income. She typically works 2-4 shifts per week through the app, which accounts for at least 20-40% of her total income. Eeva does not have any particular industry preferences and is willing to take on jobs from any sector. She has a reputation for being extremely reliable and has never canceled a job. Eeva is also a proactive planner and likes to schedule her work ahead of time, sometimes even several weeks in advance.
                                            When searching for jobs on the app, Eeva prioritizes finding positions that offer a good salary and the ability to secure work for the days she wants to work. While she does not necessarily work every day, she is available for work on many days and wants to ensure she has consistent job opportunities.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                            <h3 className='primary-title mt-5'>Product requirements</h3>
                        </div>
                            <p>
                            <b>User Registration and Profile Creation:</b> The application should allow users to create an account and build a comprehensive profile that includes their educational background, work experience, skills, and any other relevant information. This profile will be used by employers to evaluate potential candidates.
                            </p>
                            <p>
                            <b>Job Search and Filtering:</b> The app should provide users with a robust job search functionality, allowing them to search for job openings based on various criteria such as location, industry, job title, and salary range. Users should also be able to save their preferred search filters for future use.
                            </p>
                            <p>
                            <b>Alerts and Notifications:</b> The app should have a notification system that keeps users informed about relevant job opportunities based on their preferences. Users should receive notifications for new job openings, application deadlines, interview requests, and other important updates.
                            </p>
                            <p>
                            <b>Communication and Messaging:</b> The app should include a messaging system that allows users to communicate directly with employers, hiring managers, or other job seekers. This feature should facilitate easy and secure communication for scheduling interviews, asking questions, or discussing job-related matters.
                            </p>
                            <p>
                            <b>Personalized Recommendations:</b> The application should leverage user data and preferences to offer personalized job recommendations based on their skills, experience, and interests. This can help users discover relevant job opportunities that they may not have otherwise considered.
                            </p>
                            <p>
                            <b>Analytics and Insights:</b> The app should provide users with analytics and insights regarding their job search activities. This could include metrics such as the number of applications submitted, the success rate, and recommendations for improving their job search strategy.
                            </p>
                    </div>

                    <div className='brand-bg mt-5 p-5'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Epic</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>The most effective method of quickly earning money.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Journey</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <Card>
                                    <Card.Img className='w-100' variant="top" src="../img/jobseeking/JobSeekingFlow.jpg" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'></Card.Title>
                                        <Card.Text>
                                            The MVP (Minimum Viable Product) workflow facilitates a quicker and more effective initiation of idea development and application towards achieving maturity. This approach is particularly crucial for startups and independent professionals who aim to rapidly build their portfolios, as I do.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Testing</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                            </div>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Deliver Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>High Fidelity Prototype</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <Button href="#" target="_blank" variant="primary">High-Fid Prototype (Coming Soon)</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Design Reviews</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                To conduct a design review, begin with an introduction that covers the design objectives, project background, and constraints. 
                                Present the design systematically, explaining key features and how they address the problem-solving approach and project requirements. 
                                </p>
                                <p>Encourage constructive discussion and collect feedback on both positive aspects and areas needing improvement. </p>
                                <p>Summarize the discussion's key points and share a comprehensive review report with all attendees, documenting the feedback and decisions made.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Quality Assurance</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    QA in design is vital for ensuring the quality and usability of a design. It helps identify and address potential issues and errors, leading to improved user satisfaction and reduced rework. QA involves activities such as usability testing, evaluation, and functional testing, ensuring the design meets high-quality standards and is compatible across different devices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-4">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Design Documentation</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    In the final phase of the design process, creating comprehensive design documentation is crucial. This documentation serves as a future reference, facilitating collaboration and maintenance of the design. 
                                    It provides clarity on design decisions and their rationale, fostering effective communication between designers, developers, and team members.
                                </p>
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
