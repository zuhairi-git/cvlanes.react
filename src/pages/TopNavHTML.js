import React from 'react';

class TopNavHTML extends React.Component {
  render() {
    return (
      <div class="navbar nav navbar-expand-lg bg-light navbar-light" id="navbar">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand"><img src="img/CV-Lane-h.png" alt="Logo" /></a>

          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <div class="navbar-nav ml-auto">
              <a href="#home" class="nav-item nav-link active">Home</a>
              <a href="#about" class="nav-item nav-link">About</a>
              <a href="#service" class="d-none nav-item nav-link">Service</a>
              <a href="#experience" class="nav-item nav-link">Experience</a>
              <a href="#achievements" class="nav-item nav-link">Achievements</a>
              <a href="#price" class="d-none nav-item nav-link">Price</a>
              <a href="#team" class="nav-item nav-link">Social Media</a>
              <a href="#review" class="nav-item nav-link">Recommendations</a>
              <a href="#blog" class="d-none nav-item nav-link">Blog</a>
              <a href="#footer" class="nav-item nav-link">Contact</a>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default TopNavHTML;