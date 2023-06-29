import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import TopNavGeneric from './TopNavGeneric';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer';
import { Link } from 'react-router-dom';

const BlogPage = ({ id, title, image, content }) => {
  return (
    <div className='blog-bg'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name="description" content={content} />
        <meta property='og:type' content='blog' />
        <meta property='og:url' content={`https://cvlanes.com/blogs/${id}`} />
        <meta property="og:image" content={image} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='image:alt' content={title} />
      </Helmet>

      <ScrollToTop />
      <TopNavGeneric />
      <div className="blog" id="blog">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                  <h1 className='text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow primary-title'>{title}</h1>
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
        <div className="card">
          <img src={image} className="card-img-top" alt="Blog Image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <Link to={`/blogs/${id}`} className="btn btn-primary">Read More</Link>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogPage;
