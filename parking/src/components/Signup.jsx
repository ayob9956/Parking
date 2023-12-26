import React from "react";
import google from "../google.png"
import { Link } from 'react-router-dom'

function Signup() {
  return (<>
  {/* the Page container */}
  <div className="w-full h-[90vh] flex justify-center items-center bg-[#e5e5e645]  ">
    {/* the Contents container */}
    <div className="w-[75%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1]">
      {/* the Image contents */}
        <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
            <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
        </div>
        {/* Registration card container */}
         <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col gap-5  ">
          {/* Logo Image */}
           <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
          {/* Registration description */}
            <div className="w-full flex flex-col items-center gap-2">
            <p className="font-bold text-[20px]">تسجيل جديد</p>
            <p className="text-[#969696] text-[12px]">قم بالتسجيل والاستفادة من ركنة</p> 
            </div>
            {/* Data User Entry */}
            <div className="flex flex-col gap-6">
            <input className="text-[12px] p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/>    
            <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm placeholder:text-right text-left" type="email" placeholder="ادخل البريد الإلكتروني"/>  
            <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm  placeholder:text-right" type="tel" placeholder="دخل رقم الجوال"/>  
            <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="password" placeholder="ادخل كلمة المرور"/>      
            <button className="w-[35vh] h-[5vh] rounded-md  bg-[#fbf429] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">انشاء الحساب</button>
            </div>
            {/* Description of registration options */}
            <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className=" w-full flex items-center justify-center gap-2">
            <hr className="border-[1px] w-[20%]"></hr>
            <p className="text-[12px] text-[#5d5b5b]">او</p>
            <hr className="border-[1px] w-[20%]"></hr>
            </div>
       
            <button className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#efefef]">
              <img className="w-[5%]" src={google}alt="" />
              التسجيل عن بأستخدام قوقل
            </button>
            <p className="text-[#969696] text-[12px] ">لدي حساب لتسجيل ??  <a className="text-blue-400 font-bold" href="/">تسجيل دخول</a></p>
           
            </div>
        </div>
    </div>

</div>
 <footer className="bg-gray-200 py-5  border-[1px] border-[#120e0e44] rounded-lg">
    <div className="container mx-auto px-4 text-center text-gray-600">
      جميع الحقوق محفوظة &copy; 2023
    </div>
  </footer>
  
  
  </>)
}

export default Signup;
// bg-gradient-to-t from-[#d9d9d942] to-[#1038ff11]