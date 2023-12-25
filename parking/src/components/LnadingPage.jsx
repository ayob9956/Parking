import React from 'react'
import Nav from './Nav'
import logo from '../assets/Logo.png'



"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";




export default function LnadingPage() {

//   const position = { lat: 53.54, lng: 10 };
const position = { lat: 24.853610637162078, lng: 46.713016810239395 };
const [open, setOpen] = useState(false);





  return (
    <>
    <Nav/>
    <div className='h-screen'>

    <div dir="rtl" className='h-[15vh] flex justify-center items-center'>
        <div className='flex justify-center items-center gap-4 border p-3 rounded-md'>
        <p>دخولك</p>
        <span class="material-symbols-outlined">arrow_back</span>
        <p>مكانك</p>
        <span class="material-symbols-outlined">arrow_back</span>
        <p>موقفك</p>
        <span class="material-symbols-outlined">arrow_back</span>
        <p>بياناتك</p>
        <span class="material-symbols-outlined">arrow_back</span>
        <p>وقتك</p>
        <span class="material-symbols-outlined">arrow_back</span>
        <p>الدفع والانهاء</p>
        </div>
    </div>


    <APIProvider apiKey="AIzaSyAj6Z0Nc3kdfc0KTG2ttumKZssMh6ioQO8">
      {/* <div style={{ height: "100vh", width: "100%" }}> */}

      <div className='flex justify-center'>

      <div className='h-[80vh] w-[80vw] relative'>


        
        {/* <Map zoom={18} center={position} mapId="30946c4a5f450f07"  > */}
        <Map zoom={18} center={position} mapId="30946c4a5f450f07" mapTypeId="satellite">





          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"#06b8ff"}
              borderColor={"#515cff"}
              glyphColor={"white"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>أكاديمية طويق</p>
            </InfoWindow>
          )}

{/* <div className='h-[80vh] w-[50vw] bg-black'>
<div id="carouselExampleCaptions" className="carousel slide h-[40vh] w-[50vw] flex justify-end items-end " >
    <div className=''> 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={logo} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={logo} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={logo} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div> */}


            
        {/* <div className="carousel w-[40vw]  flex justify-center  items-end h-[80vh]">
        
        <div id="slide1" className="carousel-item relative w-[40vw]">
            <p className='text-white'>lllll</p>
        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
    
    
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
    
    
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div> */}

        </Map>



   

        


       

    

        {/* </div> */}
      {/* </div> */}
      </div>
      </div>

    </APIProvider>



    </div>
    </>
  );
}
