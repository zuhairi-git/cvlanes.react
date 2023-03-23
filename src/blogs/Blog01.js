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
import BlogAuthor from '../blogs/BlogAuthor';
import BlogShare from '../blogs/BlogShare';


class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div className="App overflow-x-hidden">
                <ScrollToTop />
                <TopNavGeneric />

                <div className="blog01" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.3s">
                                        <h1 className='primary-title text-light mt-5 text-shadow'>It's blogging time!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='blog-width m-5 mx-auto'>
                        <h2 className='primary-title'>Circle of Daily Rhythm</h2>
                        <BlogAuthor />
                        <p className='mb-4'>
                            The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day. This can include things like waking up, eating, preparing, working or studying, exercising, and sleeping. Taking notes about the circle of one's daily rhythm can be a useful exercise in understanding and optimizing one's daily routine.

                            Here are some tips for writing about the circle of daily rhythm:
                        </p>
                        <div className='text-center mb-5 mt-5'>
                            <div className='p-5 bg-image hover-zoom'>
                                <img className='w-100 image-circle' src='../img/blog-writing.jpg' />
                            </div>
                        </div>
                        <h2>Brainstorming</h2>
                        <p className='mb-4'>Take a few minutes to write down all the activities and behaviors that make up your typical day. Don't worry about organizing them yet, just write down everything that comes to mind.</p>

                        <h2>Natural rhythms</h2>
                        <p className='mb-4'>Think about what times of day you feel most energized, productive, and focused. This can help you plan your day around your natural rhythms, so you can optimize your productivity and wellbeing.</p>

                        <h2>Organizing</h2>
                        <p className='mb-4'>Once you have a list (written or digital) of all your daily activities, create a schedule that includes specific times for each activity. Be realistic about how long each activity will take, and don't forget to include breaks and downtime.</p>

                        <h2>Agility</h2>
                        <p className='mb-4'>Your daily rhythm may change from day to day, depending on unplanned events and other factors. Be open to adjusting your routine as needed, while still maintaining some consistency.</p>

                        <h2>Reflection</h2>
                        <p className='mb-4'>
                            Take some time each day to reflect on how your daily rhythm is working for you.
                            Ask yourself some question, like:
                            Are you making progress towards your objectives?
                            Are you feeling balanced and energized?
                            Use this reflection to make adjustments to your routine as needed.</p>
                        <p className='mb-4'>
                            By committing to these guidelines, it is possible to establish a daily routine that fosters your aspirations, and hopefully boosts your health, and facilitates a satisfying existence.
                        </p>
                        <hr className='m-5' />
                        <div className='text-center m-5'>
                            <img className='w-100 image-circle' src='../img/circle-daily-rhythm.jpg' />
                        </div>

                        <h2 className='primary-title'>Here's a glimpse into my daily routine</h2>
                       <p className='mb-4'>
                            My daily routine can be broken down into different parts. Typically, I sleep from midnight until 6:00 am, although there are times when I wake up earlier.
                        </p>
                        <h4>Morning</h4>
                        <p className='mb-4'>
                            From 7:00 am to 12:00 pm, I am most active and productive. I spend this time organizing my day, working on my portfolio, designing, and keeping up to date with the latest technologies.
                        </p>
                        <h4>Afternoon</h4>
                        <p className='mb-4'>
                            In the afternoon, from 1:00 pm to 3:00 pm, I tend to slow down and become less productive. It feels like time is passing slowly, almost like watching a slow-motion video. However, after 4:00 pm, I switch to a more reactive mode. During this time, I plan the rest of my day and often visit my family.
                        </p>
                        <h4>Evening</h4>
                        <p className='mb-4'>
                            From 6:00 pm to 11:00 pm, I head to the gym and then return home to wind down. I enjoy watching TV during this time, particularly comedy programs.
                        </p>
                        <p className='mb-4'>
                            Overall, this is a rough outline of my daily rhythm.
                        </p>
                        
                        <BlogShare />
                    </div>

                </div>
                <Footer />
            </div>

        );
    }
}

export default App;
