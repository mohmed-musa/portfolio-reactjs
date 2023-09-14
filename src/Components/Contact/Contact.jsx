import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <app-contact >
        <div className="my-5">
          <div className="pt-3 conatiner pt-5">
            <app-star
             
              title="conatct section"
              customcolor="#2c3e50"
              >
              <div
               
                className="contact-title text-center pt-4"
               >
                <h2
                 
                  className="text-uppercase mb-3 fs-1 fw-bolder">
                  conatct section
                </h2>
                <div
                 
                  className="head-three d-flex align-items-center justify-content-center mb-3">
                  <div
                   
                    className="line-three me-3"
                    ></div>
                  <i className="fa-solid fa-star"></i>
                  <div
                   
                    className="line-four ms-3"
                   ></div>
                </div>
              </div>
            </app-star>
            <form
              novalidate=""
              action=""
              className="w-50 p-3 mx-auto my-5 ng-untouched ng-pristine ng-valid">
              <input              
                id="userName"
                type="text"
                placeholder="userName"
                name="userName"
                className="w-100 border-0  border-bottom py-3 my-2 position-relative ng-untouched ng-pristine ng-valid"
              />
              <input
                id="userAge"
                type="text"
                placeholder="userAge"
                name="userName"
                className="w-100 border-0  border-bottom py-3 my-2 position-relative ng-untouched ng-pristine ng-valid"
              />
              <input               
                id="userEmail"
                type="text"
                placeholder="userEmail"
                name="userName"
                className="w-100 border-0  border-bottom py-3 my-2 position-relative ng-untouched ng-pristine ng-valid"
              />
              <input               
                id="userPassword"
                type="text"
                placeholder="userPassword"
                name="userName"
                className="w-100 border-0  border-bottom py-3 my-2 position-relative ng-untouched ng-pristine ng-valid"
              />
              <button
               
                className="btn mt-4 text-white bg-success"
                >
                {" "}
                send Message{" "}
              </button>
            </form>
          </div>
        </div>
      </app-contact>
    </>
  );
};

export default Contact;
