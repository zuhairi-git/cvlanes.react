import React from 'react';

class TopNavHTML extends React.Component {
  render() {
    return (
      <div className="navbar nav navbar-expand-lg bg-light navbar-light" id="navbar">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand"><img src="img/CV-Lane-h.png" alt="Logo" /></a>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <a href="#home" className="nav-item nav-link active">Home</a>
              <a href="#about" className="nav-item nav-link">About</a>
              <a href="#service" className="d-none nav-item nav-link">Service</a>
              <a href="#experience" className="nav-item nav-link">Experience</a>
              <a href="#achievements" className="nav-item nav-link">Achievements</a>
              <a href="#price" className="d-none nav-item nav-link">Price</a>
              <a href="#team" className="nav-item nav-link">Social Media</a>
              <a href="#review" className="nav-item nav-link">Recommendations</a>
              <a href="#blog" className="d-none nav-item nav-link">Blog</a>
              <a href="#footer" className="nav-item nav-link">Contact</a>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default TopNavHTML;