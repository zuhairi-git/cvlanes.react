import React, { useState } from 'react';

const LowFidJobseekingCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div class="col-md-4 mb-3 m-3 d-flex justify-content-center text-center">
      <div class="p-3 w-250px">
        <div id="carousel00" class="carousel carousel-dark slide" data-interval="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel00" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#carousel00" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img alt="image" src="images/ss-mobile/Light/001 - Intros.png" class="mt-2 mb-2 border border-secondary border-hover-primary rounded-custom w-100" />
            </div>
            <div class="carousel-item">
              <img alt="image" src="images/ss-mobile/Dark/001 - Intros.png" class="mt-2 mb-2 border border-secondary border-hover-primary rounded-custom w-100" />
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
      </div>
    </div>
  );
};

export default LowFidJobseekingCarousel;