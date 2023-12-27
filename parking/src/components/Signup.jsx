import React from "react";
import google from "../google.png";

function Signup() {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full max-w-4xl h-auto bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border shadow-md border-[#d1d1d1] flex flex-col md:flex-row overflow-hidden">
        
        {/* Image Section */}
        <div className="md:w-1/2 bg-[url('Screenshot.png')] bg-cover bg-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
        </div>

        {/* Registration Form Section */}
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          

          <div className="text-center mb-6">
            <p className="font-bold text-lg">تسجيل جديد</p>
            <p className="text-[#969696] text-sm">قم بالتسجيل والاستفادة من ركنة</p>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <input className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/>
            <input className="text-sm p-2 rounded-md border shadow-sm" type="email" placeholder="ادخل البريد الإلكتروني"/>
            <input className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="ادخل رقم الجوال"/>
            <input className="text-sm p-2 rounded-md border shadow-sm" type="password" placeholder="ادخل كلمة المرور"/>
            <button className="rounded-md bg-[#fbf429] font-bold shadow-md text-sm transition duration-500 hover:bg-[#faf4509e]">انشاء الحساب</button>
          </div>

          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <hr className="border w-1/5"/>
              <p className="text-xs text-[#5d5b5b]">او</p>
              <hr className="border w-1/5"/>

            </div>
      <div className="w-full items-center flex justify-center">
         <button className="w-full md:w-auto px-4 py-2 rounded-md border font-bold text-xs shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#efefef]">
              <img className="w-6 h-6" src={google} alt="Google"/>
              التسجيل عن بأستخدام قوقل
            </button>
      </div>
           
          </div>


          <div className="text-center">
            <p className="text-[#969696] text-xs">لدي حساب لتسجيل ?? <a className="text-blue-400 font-bold" href="/">تسجيل دخول</a></p>
          </div>
        </div>
      </div>
    </div>


  
  
  )
}

export default Signup;