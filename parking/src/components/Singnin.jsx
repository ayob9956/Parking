import React from "react";
import google from "../google.png";

function Singnin() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center  p-5">
        <div className="w-full max-w-4xl h-auto bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border shadow-md border-[#d1d1d1] flex flex-col md:flex-row overflow-hidden">
          
          {/* Image */}
          <div className="md:w-1/2 bg-[url('Screenshot.png')] bg-cover bg-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          </div>

          {/* Sign-in  */}
          <div className="md:w-1/2  p-4 flex flex-col justify-center gap-8">
            

            <div className="text-center">
              <p className="font-bold text-lg">تسجيل دخول</p>
              <p className="text-gray-500 text-sm">يرجى تسجيل الدخول للمتابعة إلى حسابك.</p> 
            </div>

            <div className="flex flex-col gap-4">
              <input className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/>
              <input className="text-sm p-2 rounded-md border shadow-sm" type="password" placeholder="ادخل كلمة المرور"/>
              <a href="#" className="text-gray-500 text-sm self-end">نسيت كلمة المرور؟</a>
              <button className="rounded-md bg-[#efe827] font-bold shadow-md text-sm transition duration-500 hover:bg-[#faf4509e]">تسجيل دخول</button>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <hr className="border w-1/5"/>
                <p className="text-xs text-gray-500">او</p>
                <hr className="border w-1/5"/>
              </div>
        <div className="flex w-full items-center justify-center">
              <button className="w-full md:w-auto px-4 py-2 rounded-md border font-bold text-xs shadow-md mb-5 flex items-center justify-center gap-2 transition duration-500 hover:bg-gray-200">
                <img className="w-6 h-6 " src={google} alt="Google" />
                التسجيل دخول بأستخدام قوقل
              </button>
              </div>
              <p className="text-gray-500 text-xs">ليس لدي حساب لتسجيل ؟؟ <a className="text-blue-400 font-bold" href="/">انشاء حساب</a></p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Singnin;