import React from 'react';
import teamGif from '../assets/teamwork.gif';
import globeGif from '../assets/around-the-world.gif';
import consultGif from '../assets/consultation.gif';
import moneyGif from '../assets/analytics.gif';
import meetimage from '../assets/meet.jpg';
import planimage from '../assets/plan.jpg';
import chartimage from '../assets/analysis.jpg';

function Home() {
  return (
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide w-80" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={meetimage} className="d-block w-100" style={{ maxHeight: "500px" }} alt="Teamwork" />
        </div>
        <div className="carousel-item">
          <img src={planimage} className="d-block w-100" style={{ maxHeight: "500px" }} alt="Globe" />
        </div>
        <div className="carousel-item">
          <img src={chartimage} className="d-block w-100" style={{ maxHeight: "500px" }} alt="Consultation" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      <div className="row row-cols-2 mt-4">
        <div className="col">
          <div className="card text-dark bg-light mb-3" >
            <div className="card-body d-flex align-items-center">
              <img src={consultGif} alt="Consultation" width="100" height="100" />
              <p className="card-text ms-3">Some quick example text to build on the card text and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3" >
            <div className="card-body d-flex align-items-center">
              <img src={teamGif} alt="Teamwork" width="100" height="100" />
              <p className="card-text ms-3">Some quick example text to build on the card text and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3" >
            <div className="card-body d-flex align-items-center">
              <img src={globeGif} alt="Globe" width="100" height="100" />
              <p className="card-text ms-3">Some quick example text to build on the card text and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-dark bg-light mb-3" >
            <div className="card-body d-flex align-items-center">
              <img src={moneyGif} alt="Money" width="100" height="100" />
              <p className="card-text ms-3">Some quick example text to build on the card text and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
