import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="slider">
        <div className="container sliderimage">
          <div className="row">
            <img
              className="rounded slide"
              alt="ImageBigHome"
              src="gambar/imgHeader.jpg"
              height="400"
            />
          </div>
        </div>
        <div className="container notive">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-danger danger" role="alert">
                <p className="text-white text-center">
                  A simple success, check it out!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end home image */}

        <div className="container slide">
          <div className="row">
            {/* Start Of Slide show */}
            <div className="col-md-8">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      alt="ImageSlide1"
                      src="gambar/slide1.jpg"
                      height="463"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt="ImageSlide4"
                      src="gambar/slide2.jpg"
                      height="463"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt="ImageSlide3"
                      src="gambar/slide3.jpg"
                      height="463"
                    />
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Of Slide Show */}
            <div className="col-md-4">
              <img
                className="rounded slide "
                alt="MiniImage"
                src="gambar/gambar1.jpg"
                height="236"
                width="100%"
              />

              <img
                className="rounded "
                alt="ImageHome"
                src="gambar/gambar2.jpg"
                height="236"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
