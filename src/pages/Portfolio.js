import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import '../css/style.css';
import TopNavGeneric from './TopNavGeneric';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
    return (

        <div>
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
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                    <h1 className='text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow primary-title'>Where Magic Happens</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center my-5 primary-title display-2">My Portfolio</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card className='border bordered-1'>
                            <Card.Img variant="top" src="../img/portfolio-cover-dark.jpeg" />
                            <Card.Body>
                                <Card.Title>Job Seeking</Card.Title>
                                <Card.Text>
                                    <p>Inprogress</p>
                                    <p>User journey and behavior analytics. User actions, awareness, consideration, loyalty, feelings, opportunities, and pain points. </p>
                                </Card.Text>
                                <Button href="/portfolio/jobseeking" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />

        </div>
    );
};
export default Portfolio;
