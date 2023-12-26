import React from 'react'
import logo from '../assets/Logo.png'
import react from '../assets/react.svg'



export default function Nav() {
  return (
    <>

{/* <div className="navbar bg-base-100 shadow-md  rounded-md">

  <div className="flex-1 items-center justify-end">
    <a className="btn btn-ghost text-xl"><img className='h-8' src={react} alt="" /></a>
    
  </div>
  <div className='flex-1 justify-start gap-4'>
    <p  className="btn btn-ghost text-base">الرئيسية</p>
    <p  className="btn btn-ghost text-base">من نحن</p>
    <p  className="btn btn-ghost text-base">الدعم</p>
  </div>
  
  <div className="dropdown" dir='ltr'>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul dir='rtl' tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>الرئيسية</a></li>
        <li><a>من نحن</a></li>
        <li><a>الدعم</a></li>
      </ul></div>
</div> */}
  
  <div className="navbar bg-base-100 h-[12vh] rounded-lg border-[1px] shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>الرئيسية</a></li>
        <li>
          <a>من نحن</a>
          
        </li>
        <li><a>الدعم</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='h-8' src={react} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>الرئيسية</a></li>
        <li>
          <a>من نحن</a>
          
        </li>
        <li><a>الدعم</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn btn-primary max-sm:btn-sm ">دخول</a>
    <a className="btn btn-primary max-sm:btn-sm">تسجيل </a>

  </div>
</div>
    
    </>
  )
}
