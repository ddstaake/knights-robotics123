export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Sponsors</h2>
          <p>
            <b>Thanks to all of our Sponsors!</b>
            <br /> To become a Team Sponsor please email: info@knights.team
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  {" "}
                  <a
                    href="img/portfolio/01.jpg"
                    title="Project Title"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>First Robotics</h4>
                    </div>
                    <img
                      src="img/portfolio/01.jpg"
                      className="img-responsive"
                      alt="Sponsor Name"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
