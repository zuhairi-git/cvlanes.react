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

const BlogPage = () => {
    return (

        <div className='blog-bg'> {/* className="App overflow-x-hidden" */}
            <Helmet>
                <meta charSet='utf-8' />
                <title>Blog</title>
                <meta property='og:title' content='Blog' />
                <meta name="description" content="To Blog... or not to Blog" />
                <meta property='og:type' content='blog' />
                <meta property='og:url' content='https://cvlanes.com/blog' />
                <meta property="og:image" content='https://cvlanes.com/img/blog-cover.jpeg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta name='image:alt' content="Blog" />
            </Helmet>

            <ScrollToTop />
            <TopNavGeneric />
            <div className="blog" id="blog">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                    <h1 className='text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow primary-title'>To Blog... or not to Blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center my-5 primary-title display-2">My Blog</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img variant="top" src="../img/blog-writing.jpg" />
                            <Card.Body>
                                <Card.Title>Circle of Daily Rhythm</Card.Title><br />
                                <Card.Text>
                                    The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day.
                                </Card.Text>
                                <Button href="/blogs/circle-of-rhythm" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-5'>
                        <Card className='border bordered-1'>
                            <Card.Img variant="top" src="../img/blog/iphone-mail-notifications.jpg" />
                            <Card.Body>
                                <Card.Title>How to get notifications on iOS with personal focus on?</Card.Title>
                                <Card.Text>
                                    Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately?
                                </Card.Text>
                                <Button href="/blogs/ios-notifications" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='d-none'>
                        <Card className="my-4">
                            <Card.Body>
                                <Card.Title>Recent Posts</Card.Title>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Blog Post Title</a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card className="my-4">
                            <Card.Body>
                                <Card.Title>Categories</Card.Title>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">Category 1</a>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />

        </div>
    );
};
export default BlogPage;
