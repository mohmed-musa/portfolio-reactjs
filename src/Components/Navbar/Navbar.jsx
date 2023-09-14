import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import $ from 'jquery'


const Navbar = () => {
  $(function(){
    var navbar = $('.navbar');
    
    $(window).scroll(function(){
      if($(window).scrollTop() <= 10){
        navbar.removeClass('navbar-scroll');
      } else {
        navbar.addClass('navbar-scroll');
      }
    });
  });
  // $(window).scroll(() => {
  //   console.log($('#Home').outerHeight(true));
  //   if($(window).scrollTop() > $('#Home').outerHeight(true)){
  //     $('.navbar').css('height', '10px')
  //   }else{
  //     $('.navbar').css('height', '100px')
  //   }

  // })

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary z-10 fixed-top">
  <div className="container">
    <Link className="navbar-brand text-white fs-3 fw-bolder" to="Home#">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto px-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bold" aria-current="page" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bold" to="portofolio">Portofolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 fw-bold" to="contact">Contact</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    </>
    
  )
}

export default Navbar
