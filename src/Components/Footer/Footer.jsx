import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
<div className="footer">
  <div className="container">
    <div className="row">
    <div className="col-md-4 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
    </div>
    <div className="col-md-4 text-center">
    <h3>AROUND THE WEB</h3>
                <div className="icons">
                  <i
                    className="fa-brands fa-facebook mx-1 icon"></i>
                  <i
                    className="fa-brands fa-twitter mx-1 icon"></i>
                  <i
                    className="fa-brands fa-linkedin-in mx-1 icon"></i>
                  <i
                    className="fa-solid fa-globe mx-1 icon"></i>
                </div>
    </div>
    <div className="col-md-4 text-center">
              <h3>ABOUT FREELANCER</h3>
                <p>
                  {" "}
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route{" "}
                </p>
    </div>
    </div>
  </div>
</div>
<div className="p text-center bg-dark text-white py-2">
          <p>Copyright © Your Website 2021</p>
        </div>


      <app-footer>
      </app-footer>
    </>
  );
};

export default Footer;
