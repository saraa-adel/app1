import React, { useState,useEffect ,useRef } from 'react';
import { Link } from 'react-router-dom'
import style from './BeforeAfter.module.css'
import after from '../../Assets/images/Website_BeforeAfter_NewTummyTuck04_A.jpg'
import girl from '../../Assets/images/girl.jpg'
import carousel from '../../Assets/images/RPRR01_CarouselC.jpg'
import carousel2 from '../../Assets/images/RPRR04_CarouselD-512x512.jpg'
import video1 from '../../Assets/images/img1.jfif'

export default function BeforeAfter() {
  const [activeLink, setActiveLink] = useState('All')
  const [getImage, setGetImage] = useState('')
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isArrowsVisible, setIsArrowsVisible] = useState(false);
  const overlayRef = useRef(null);

  function linkClick(linkName){
    setActiveLink(linkName)
  }

  function openCard(imageSrc){
      setGetImage(imageSrc);
      setIsOverlayVisible(true)
  }

  function closeCard() {
    setGetImage('');
    setIsOverlayVisible(false)
    setIsArrowsVisible(false)
  }
  
  function openCarousel(imageSrc){
      openCard(imageSrc)
      setIsArrowsVisible(true)
  }

  return <>
  <div className="text-white montserrat mb-5">

                                                              {/* Header */}

    <div className="position-relative row gx-0 cover mb-sm-5 mb-3" style={{ height: '318px' }}>
      <div className="layerC position-absolute top-0 bottom-0 start-0 end-0 z-1"></div>
      <div className='offset-1 col-10 px-lg-4 px-md-3 px-2 d-flex align-items-center h-100'>
          <div className='mt-3 d-flex flex-column justify-content-end position-absolute z-3' style={{ height: '200px' }}>
              <h4 className='fs-2 fw-semibold'>Before & After</h4>
              <p className='fs-4 fw-light mb-0'>Procedures by Dr. William Miami</p>
          </div>
      </div>
    </div>

                                                              {/* Body of cards */}

    <div className="row gx-0 mb-5">
      <div className='offset-1 col-10 px-4'>
        <ul className="nav text-uppercase justify-content-center py-2 px-3">
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'All' ? 'active' : ''}`} aria-current="page" to={'/before-after'} onClick={() => linkClick('All')}>All</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Augmentation' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Augmentation')}>Breast Augmentation</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Reductiont' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Reductiont')}>Breast Reductiont</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'BBL' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('BBL')}>BBL</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Lift' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Lift')}>Breast Lift w/ Implants</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Tummy' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Tummy')}>Tummy Tuck</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Mommy' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Mommy')}>Mommy Makeover</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Implant' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Implant')}>Implant Exchange</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link border-bottom px-4 text-decoration-none text-center py-3 display-6 ${activeLink === 'Breast' ? 'active' : ''}`} to={'/before-after'} onClick={() => linkClick('Breast')}>Breast Lift</Link>
        </li>
        </ul>
        <div className="row gy-2">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className='me-xl-5 me-sm-4 card cursor-pointer border border-1 border-black rounded-1 overflow-hidden' onClick={() => openCard(after)}>
            <img src={after} className='w-100' alt="before&after" />
          </div>
        </div>
        </div>
      </div>
    </div>

                                                              {/* Body of carousels */}

    <div className="row gx-0 bg-light py-5 pt-4 mb-5">
      <p className='display-6 text-center fw-semibold blueT p-2'>Real Patients. Real Results.</p>
      <div className='offset-1 col-10 px-md-5 px-4'>
        <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className='me-xl-5 me-sm-4 cursor-pointer overflow-hidden'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000"  onClick={() => openCarousel(carousel)}>
              <img src={carousel} className="d-block w-100" alt="First Slide" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={carousel2} className="d-block w-100" alt="Second Slide"  onClick={() => openCarousel(carousel2)}/>
            </div>
          </div>
          <button className="carousel-control-prev prev opacity-100" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <i className="fa-solid fa-angle-left cursor-pointer darkCyan py-1 px-2 text-white" aria-hidden="true"></i>
          </button>
          <button className="carousel-control-next next opacity-100" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <i className="fa-solid fa-angle-right cursor-pointer darkCyan py-1 px-2 text-white" aria-hidden="true"></i>
          </button>
        </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

                                                              {/* Body of videos */}

    <div className="row gx-0 montserrat mb-5">
      <div className='offset-1 col-10 px-4'>
        <div className="row gx-4 gy-5">
          <div className='col-sm-6'>
              <div className='text-center border-bottom border-secondary-subtle'>
                <p className='fw-semibold text-body-secondary fs-5 mb-1'>Breast Augmentation</p>
                <p className='text-body-tertiary fw-medium pb-3'>Patient Results</p>
              </div>
              <div className='row'>
              <div className='offset-3 col-6 pt-4 px-0'>
                <div>
                  {/* video */}
                  <img className='w-100' src={video1} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

                                                          {/* Overlay of card */}

      {isOverlayVisible? <>
        <div ref={overlayRef} className="vh-100 montserrat row position-fixed z-3 overlay top-0 bottom-0 start-0 end-0 align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-8 col-10">
            <div className='w-100 px-5'>
              <div className="text-end w-100">
                <i className="fa-solid fa-xmark cursor-pointer fs-4 x" onClick={closeCard}></i>
              </div>
              <div className='py-2'>
                <img src={getImage} className={`w-100 ${style.imageSize}`} alt="before&after" />
              </div>
              <span className='text-white'>Abdominoplasty</span>
            </div>
          </div>
        {
          isArrowsVisible? <>
          <button class="carousel-control-prev opacity-100" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <div className="cursor-pointer rounded-circle d-flex justify-content-center align-items-center circleSize position-relative">
            <i className="fa-solid fa-angle-left anglePositionOverlay" aria-hidden="true"></i>
          </div>
        </button>
        <button class="carousel-control-next opacity-100" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <div className="cursor-pointer rounded-circle d-flex justify-content-center align-items-center circleSize position-relative rotateArrow">
            <i className="fa-solid fa-angle-left anglePositionOverlay" aria-hidden="true"></i>
          </div>
        </button>
          </>:''}
        </div>
      </>:''}
    </>
}
