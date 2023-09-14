import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <app-about>
        <div class="about bg-dark text-white d-flex justify-content-center align-items-center min-vh-100">
          <div>
            <app-star>
              <div class="text-center pt-4">
                <h2 class="text-uppercase mb-3 fs-1 fw-bolder">
                  about component
                </h2>
                <div
              
                  class="line d-flex align-items-center justify-content-center mb-3">
                  <div
                
                    class="line-one me-3"
                    >

                    </div>
                  <i _ngcontent-uuw-c6="" class="fa-solid fa-star"></i>
                  <div
                    class="line-Two ms-3 bg-white"
                    ></div>
                </div>{" "}
              </div>
            </app-star>
            <div class="container">
              <div class="row px-5">
                <div class="col-md-6 ps-md-5">
                  <p>
                    {" "}
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.{" "}
                  </p>
                </div>
                <div class="col-md-6 pe-5">
                  <p>
                    {" "}
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </app-about>{" "}
    </>
  );
};

export default About;
