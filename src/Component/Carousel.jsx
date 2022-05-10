import React from 'react';

export default function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
    <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
    </ul>
    {/* The slideshow */}
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://picsum.photos/id/200/200/300" alt="Los Angeles" width="100%" height={500} />
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/id/236/200/300" alt="Chicago" width="100%" height={500} />
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/id/237/200/300" alt="New York" width="100%" height={500} />
        </div>
    </div>
    {/* Left and right controls */}
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
    </a>
    </div>

  )
}
