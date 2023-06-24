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
import BlogAuthor from './BlogAuthor';
import BlogShare from './BlogShare';
import { Helmet } from "react-helmet";
import YoutubeShortsEmbed from "../generic/YoutubeShortsEmbed";
import { TikTok } from "react-tiktok";

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>How to get notifications on iOS with personal focus on?</title>
                    <meta name="description" content="How to get notifications on iOS with personal focus on?" />
                    <meta name="type" content="blog" />
                    <meta name="url" content="https://cvlanes.com/blogs/circle-of-rhythm" />
                    <meta property="og:image" content='https://cvlanes.com/img/iphone-mail-notifications.jpg' />
                    <meta property="og:image:width" content='1200' />
                    <meta property="og:image:height" content='630' />
                    <meta name="image:alt" content="How to get notifications on iOS with personal focus on?" />
                </Helmet>

                <ScrollToTop />
                <TopNavGeneric />

                <div className="blog01" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                        <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>It's blogging time!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='blog-width m-5 mx-auto'>
                        <h2 className='primary-title'>How to get notifications on iOS with personal focus on?</h2>
                        <BlogAuthor />
                        <p className='mb-4'>
                            Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately? Well, you're not alone! Recently, I went through a similar experience where I was not getting notifications from the Mail app on my iPhone, despite trying various email clients.
                        </p>
                        <p>After conducting some research and finding no solutions, I began playing with my phone settings to determine what the issue might be. And, after a few minutes of tinkering, I noticed the Personal icon on my lock screen, which I had activated out of curiosity some time ago and it was the cause of the problem. I realized that I needed to add people and apps to my personal focus profile to receive or see notifications.
                        </p>
                        <div className='text-center mb-5 mt-5'>
                            <div className='bg-image'>
                                <img className='w-100' src='../img/blog/ios-notifications-personal-focus.png' style={{ maxWidth: '350px', width: '100%' }} alt='Image' />
                            </div>
                        </div>
                        <p className='mb-4'>
                            This experience inspired me to create a video on <a href='https://www.tiktok.com/@zuhairi.ali/video/7211812954591743238?is_from_webapp=1&sender_device=pc&web_id=7211808504469636614'>TikTok</a> and <a href='https://youtube.com/shorts/wxHIKbD0gM4'>YouTube</a> #shorts, where I shared the steps on how to activate or deactivate and add people and apps to your personal or work focus profile. In the video, I walked viewers through the process of going to Settings > Focus > Personal > People/Apps > Add.
                        </p>
                        <div className='row'>
                            <div className='text-center'>
                                <div className='col-md-auto mb-5 d-none'>
                                    <YoutubeShortsEmbed embedId="wxHIKbD0gM4" />
                                </div>
                                <div className='col-md-auto mb-5'>
                                    <TikTok url="https://www.tiktok.com/@zuhairi.ali/video/7211812954591743238?is_from_webapp=1&sender_device=pc&web_id=7211808504469636614" />
                                </div>
                            </div>
                        </div>
                        <p>
                            This helpful feature is part of iOS 15, allowing you to specify the people and apps that can continue to notify you even when Do Not Disturb is active.
                            If you're facing similar issues, then I encourage you to watch my video, and hopefully, it will help you resolve your notification problems.
                        </p>
                        <p>
                            Also, for more information on this feature, check out this link to Apple's support page: <a href='https://support.apple.com/en-gb/HT212608'>https://support.apple.com/en-gb/HT212608</a>.</p>

                        <BlogShare />
                    </div>

                </div>
                <Footer />
            </div>

        );
    }
}

export default App;
