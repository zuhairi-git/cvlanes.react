import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import '../css/style.css';
import TopNavGeneric from './TopNavGeneric';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import BlogList from './BlogList';

const BlogPage = () => {
    return (

        <div className='blog-bg'> {/* className="App overflow-x-hidden" */}

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
                <BlogList />
            </Container>
            <Footer />

        </div>
    );
};
export default BlogPage;
