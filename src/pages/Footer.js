import React from 'react';
import DayOfMylife from '../vector/DayOfMylife.svg'

class App extends React.Component {
    render() {
        return (
            <div className="App overflow-x-hidden">
                <div id="footer" className="footer wow fadeIn" data-wow-delay="0.2s">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    <div className="footer-info">
                                        <div className="footer-social">
                                            <img src={require("../img/cvlanes-bg.png")} style={{ height: '256px' }} alt="Logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 align-items-center text-center">
                                    <div className="footer-info">
                                        <img src={DayOfMylife} alt="Ali" style={{ height: '230px' }} />
                                        <h3>A Day Of My Life</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 mb-2">
                                    <div className="footer-info hidden-sm hidden-xs hidden-xxs">
                                        <p className='mt-3 lh-lg fs-5 text-start ps-3 text-white border-start border-2'><b>Ali Zuhairi</b> <br /> Espoo, Suurpelto <br /> 044 2 844 844 <br /> zohairi@live.com</p>
                                    </div>
                                    <div className="footer-info hidden-md hidden-lg hidden-xl hidden-xxl copyright">
                                        <p className='mt-3 lh-lg fs-5 text-center ps-3 text-white'><b>Ali Zuhairi</b> <br /> Espoo, Suurpelto <br /> 044 2 844 844 <br /> zohairi@live.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container copyright">
                            <p>&copy; CV Lanes 2022 | Made With React JS</p>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default App;
