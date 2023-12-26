import React from 'react'
import logo from '../assets/Logo.png'
import react from '../assets/react.svg'



export default function Nav() {
  return (
    <>

   
  <div dir='rtl' className='w-full'>


  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <img src={react} className='h-20 mr-4'></img>

    {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className=''>

    <div class="collapse navbar-collapse w-[80vw] justify-between" id="navbarText">
        <div className='mr-4'>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 font-bold">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">الرئيسية</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">من نحن</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">الدعم</a>
        </li>
      </ul>
      </div>

      <div>
      <span className="">
        <button className='bg-[#ede74d] text-black font-bold ml-12 pl-4 pr-4 py-2 rounded-md '>
        تسجيل دخول
        </button>
      </span>
      </div>


    </div>
    </div>

  </div>
</nav>

  </div>
    
    </>
  )
}
