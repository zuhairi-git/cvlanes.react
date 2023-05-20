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
                                    <p>18 Weeks</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Roles</h5>
                                    <p>Product Designer | Product Manager | User Research | Testing | User Behavior Analytics</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Tools</h5>
                                    <p>Figma, Figma Jam, Maze</p>
                                </div>
                                <div>
                                    <img src='/img/collaboration/Platforms.png' className='w-100 mt-4 border-thin pill-image'></img>
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

                    <div className="d-none full-image mt-5" style={{ backgroundImage: 'url("../img/jobseeking/WorkFlowBG-2.jpg")' }}>
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
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Challenges</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    <ul>
                                        <li><b>Team-to-team and team-to-customer communication:</b> Clear and efficient communication between teams is crucial when designing and delivering services at different levels. Teams working on advanced features need to communicate effectively with those working on simpler versions to ensure consistency and avoid misunderstandings regarding capabilities, limitations, and dependencies.</li>
                                        <li><b>User research and feedback:</b> Understanding the needs and preferences of different user groups is essential. Collaboration between simple and advanced users in user research can provide valuable data and feedback that shape the development process and guide decisions on feature inclusion or simplification.</li>
                                        <li><b>Training:</b> Collaboration between different user levels requires training for advanced users to support and guide basic users effectively. Ensuring that even advanced features are presented in a way that all user levels can understand and use is crucial for effective collaboration.</li>
                                        <li><b>Documentation and support:</b> Providing comprehensive documentation and support for users across different levels, including technical writers, support teams, and developers, is necessary. Addressing common user questions and problems proactively and providing resources to assist users in utilizing the service optimally is essential.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Discovery</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>

                                <p>During the discovery phase, the focus intensifies on addressing challenges and establishing a connection between users, the service, and the competition.</p>
                                <p>When dealing with a complex product that encompasses varying levels of technicality, it becomes crucial to engage extensively with basic-level users while simultaneously refining and enhancing the solution to cater to sophisticated needs.
                                    This approach ensures a harmonious blend of simplicity and clarity on one hand, while incorporating advanced features that offer automation capabilities to basic users on the other. </p>
                                <p>By striking this balance, the product aims to provide a user experience that is both streamlined and comprehensive.</p>

                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Initial Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Hypothesis</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Primary Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                            </div>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Define Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <Row className='m-lg-5 m-xs-2 m-sm-2 mt-3 mt-3'>
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Personas</h3>
                            </div>

                            <Col className="mb-5" md={9}>
                                <Card className='mb-4'>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <Row>
                                                <Col className='col-auto'>
                                                    <img src="../img/collaboration/avatars/john.png" className="avatars" />

                                                </Col>
                                                <Col className='col-auto'>
                                                    John J.
                                                    <p className='avatars-job'><small>Marketing Manager</small></p>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            <p><b>Name:</b> John J.</p>
                                            <p><b>Age:</b> 35</p>
                                            <p><b>Profession:</b> Marketing Manager</p>
                                            <p><b>Background:</b> John J. has been working in the marketing industry for the past ten years. He has experience working in various roles such as digital marketing, content marketing, and product marketing. John is a highly skilled marketing professional with excellent communication and leadership skills. He has a passion for innovation and is always looking for ways to improve the marketing strategies of his company.</p>
                                            <p><b>Goals:</b> John's primary goal is to increase the revenue of his company by implementing effective marketing strategies. He wants to achieve this by collaborating with his team and stakeholders efficiently and effectively. John is always on the lookout for new technologies and tools that can help him achieve his goals.</p>
                                            <p><b>Challenges:</b> John faces several challenges in his role as a marketing manager. One of the most significant challenges is managing his team's workload and ensuring that they are working collaboratively and effectively. He also struggles with keeping up with the latest trends and technologies in the industry and ensuring that his team is utilizing them effectively.</p>
                                            <p><b>Persona:</b> John is a highly motivated and driven individual who is always looking for ways to improve his work and the work of his team. He is a strategic thinker who is not afraid to take risks and try new things. John is an excellent communicator and is always willing to listen to his team's ideas and feedback. He values collaboration and believes that working together is the key to success.</p>
                                            <p>John is highly tech-savvy and is always on the lookout for new technologies and tools that can help him achieve his goals. He is a quick learner and is not afraid to experiment with new technologies to see how they can benefit his team and the company.</p>
                                            <p>Overall, John is a dedicated marketing professional who is always looking for ways to improve his work and the work of his team. He is a natural leader and collaborator who values innovation and is always willing to try new things to achieve success.</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <Row>
                                                <Col className='col-auto'>
                                                    <img src="../img/collaboration/avatars/julia.png" className="avatars" />

                                                </Col>
                                                <Col className='col-auto'>
                                                    Julia Romes
                                                    <p className='avatars-job'><small>Sales Director</small></p>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            <p><b>Name:</b> Julia Romes</p>
                                            <p><b>Age:</b> 30</p>
                                            <p><b>Profession:</b> Sales Director</p>
                                            <p> <b>Background:</b> Julia has been working in sales for the past 5 years and has a proven track record of success. She has worked for several companies in the past and has experience in various sales roles, including sales representative, sales manager, and sales director. Julia is a highly skilled sales professional with excellent communication, leadership, and organizational skills. She is dedicated to achieving her sales targets and growing her team.</p>
                                            <p><b>Goals:</b> Julia's primary goal is to increase the sales revenue of her company by implementing effective sales strategies. She wants to achieve this by collaborating with her team and stakeholders efficiently and effectively. Julia is always on the lookout for new technologies and tools that can help her achieve her goals.</p>
                                            <p><b>Challenges:</b> Julia faces several challenges in her role as a sales director. One of the most significant challenges is managing her team's workload and ensuring that they are working collaboratively and effectively. She also struggles with keeping up with the latest trends and technologies in the industry and ensuring that her team is utilizing them effectively.</p>
                                            <p><b>Persona:</b> Julia is a highly driven and results-oriented sales professional who is always looking for ways to improve her work and the work of her team. She is a strategic thinker who is not afraid to take risks and try new things. Julia is an excellent communicator and is always willing to listen to her team's ideas and feedback. She values collaboration and believes that working together is the key to success.</p>
                                            <p>Julia is always on the go, and she needs a mobile application that is simple and easy to use to stay connected with her team and stakeholders. She wants a platform that allows her to communicate with her team, share files, and manage tasks on the go. Julia values her time and wants a platform that is quick and easy to use, so she can focus on achieving her sales targets.</p>
                                            <p>Overall, Julia is a dedicated sales professional who is always looking for ways to improve her work and the work of her team. She is a natural leader and collaborator who values innovation and is always willing to try new things to achieve success. Julia needs a simple and easy to use mobile application that can help her stay connected with her team and stakeholders while she is on the go.</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Product requirements</h3>
                            </div>

                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <ol className='mb-5'>
                                    <li className='list-text-style'>
                                        <b>Team-to-team and team-to-customer communication:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Develop a clear and efficient communication system that facilitates seamless collaboration between teams working on different levels of service complexity.
                                            </li>
                                            <li>
                                                Implement communication channels and tools that enable effective information sharing, such as chat platforms, project management systems, and regular team meetings.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>User research and feedback:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Conduct user research activities involving both simple and advanced users to gain insights into their needs, preferences, and pain points.
                                            </li>
                                            <li>
                                                Establish channels for gathering user feedback, such as surveys, interviews, or feedback forms, to capture valuable data that guides decision-making during the development process.
                                            </li>
                                            <li>
                                                Utilize user feedback to prioritize feature inclusion or simplification, ensuring that the product addresses the diverse requirements of different user groups effectively.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>Training:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Develop comprehensive training materials and resources for advanced users to support and guide basic users in utilizing the service.
                                            </li>
                                            <li>
                                                Create training programs or workshops that enable advanced users to effectively communicate and collaborate with basic users, fostering a productive and inclusive environment.
                                            </li>
                                            <li>
                                                Ensure that training materials and resources are accessible and easily understandable for users across different levels of technical proficiency.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>Documentation and support:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Provide comprehensive and user-friendly documentation that covers all aspects of the service, including instructions, troubleshooting guides, and FAQs.
                                            </li>
                                            <li>
                                                Regularly update documentation and support resources based on user feedback and evolving service requirements, ensuring accuracy and relevance.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className='brand-bg p-5'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Epic</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>It can be challenging to find a platform that offers a comprehensive end-to-end solution while also catering to the diverse needs of users across different levels of complexity. Such a platform must strike a delicate balance between sophistication and simplicity to meet the expectations of various user groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Journey</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
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
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>High Fidelity Prototype</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <Button href="#" target="_blank" variant="primary">High-Fid Prototype (Coming Soon)</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
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
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
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
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Design Documentation</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    Maintaining documentation for sophisticated solutions can be a significant challenge due to the workload and intensive collaboration involved in keeping the design relevant and consistent. However, in the final phase of the design process, creating comprehensive design documentation becomes crucial.
                                    This documentation serves as a valuable point of reference for the future, enabling seamless collaboration and ensuring the ongoing maintenance of the design. By providing clarity on design decisions and their underlying rationale, it fosters effective communication among designers, developers, and team members.
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
