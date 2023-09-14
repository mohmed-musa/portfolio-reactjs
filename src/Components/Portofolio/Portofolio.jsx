import React from "react";
import img1 from "../../assetss/poert1.png";
import img2 from "../../assetss/port2.png";
import img3 from "../../assetss/port3.png";
import img4 from "../../assetss/poert1.png";
import img5 from "../../assetss/port2.png";
import img6 from "../../assetss/port3.png";
import './Portoflio.css'

const Portofolio = () => {



  return (
    <>
      <app-portfolio>
        
        <div className=" m d-flex justify-content-center align-items-center my-5 min-vh-100">
          <div className="pt-4 mt-5">
            <app-star
              title="portfolio component"
              customcolor="#2c3e50"
              _nghost-ppb-c6="">
              <div className="portfolio text-center pt-4">
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                  portfolio component
                </h2>
                <div className="head-one d-flex align-items-center justify-content-center mb-3">
                  <div className="line-one me-3"></div>
                  <i className="fa-solid fa-star fs-3"></i>
                  <div className="line-five ms-3"></div>
                </div>
              </div>
            </app-star>
            <div className="container">
              <div className="row g-5">
               
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img1}
                      alt=""
                      className="w-100 rounded-3"
                      
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img2}
                      alt=""
                      className="w-100 rounded-3"
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img3}
                      alt=""
                      className="w-100 rounded-3"
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img4}
                      alt=""
                      className="w-100 rounded-3"
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img5}
                      alt=""
                      className="w-100 rounded-3"
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img
                      src={img6}
                      alt=""
                      className="w-100 rounded-3"
                    
                    />
                    <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
            <img src="" alt="" />
          </div>
        </div>
      </app-portfolio>
    </>
  );
};

export default Portofolio;
