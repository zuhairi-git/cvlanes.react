import React, { useState } from 'react';

const LowFidJobseekingCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="col-md-4 mb-3">
      <div id="carousel00" class="carousel carousel-dark slide p-5" data-interval="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="5" aria-label="Slide 6" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
          <button type="button" data-bs-target="#carousel00" data-bs-slide-to="7" aria-label="Slide 8" class=""></button>
        </div>
        <p>Low-Fid Exmaple</p>

        <div class="carousel-inner border-bold">
          <div class="carousel-item active">
            <img alt="image" src="../img/jobseeking/low-fid/Splash.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/Login.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/Main.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/Calendar.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/CalendarNext.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/CalendarHistory.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/Messeges.jpg" class="border-hover-primary w-100" />
          </div>
          <div class="carousel-item">
            <img alt="image" src="../img/jobseeking/low-fid/Profile.jpg" class="border-hover-primary w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel00" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel00" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default LowFidJobseekingCarousel;