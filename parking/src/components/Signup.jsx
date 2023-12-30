import React from "react";
import google from "../google.png"
import  { useState } from "react";
import axios from "axios";



     

function Signup() {

  
     const [UeserName, setUeserName] = useState('');
      const [Usernameerro, setUsernameerro] = useState('');

     const [Email, setEmil] = useState("");
     const [Emilerro, setEmailerro] = useState("");

     const [phone, setphone] = useState("");
     const [phoneerro, setphoneerro] = useState("");

     const [Password, setPassword] = useState("");
     const [Passworderro, setPassworderro] = useState("");

    

     const handelSingUP = ()=>{

     if (UeserName.length < 4) {
    setUsernameerro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>User name must be at least 4 characters</span>);

    } else if (!/^[a-zA-Z0-9.]+@gmail.com$/.test(Email)) {
  setEmailerro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>Email address must end with @gmail.com</span>);

  } else if (!/^05\d{8}$/.test(phone)) {
  setphoneerro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>Invalid phone number. Phone number must start with 05 and consist of 10 digits.</span>);

}else if (!/^[a-zA-Z0-9]+$/.test(Password) || Password.length < 6) {
    setPassworderro(<span style={{ color: "#c23e3ec7", fontFamily: "initial" }}>Password must be at least 6 characters and contain only letters and numbers</span>);

  }else {
    alert("goood")
    axios.post("https://6552c0675449cfda0f2dca61.mockapi.io/uesers",{
    UeserName : UeserName,
    Email : Email,
    phone : phone,
    Password : Password,
    })
  
    .catch(error => console.error(error));

    }}
  return (
  <>
  {/* the Page container */}
  <div className="w-full h-[100vh] flex justify-center items-center bg-[#e5e5e645]  ">
    {/* the Contents container */}
    <div className="w-[75%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1]">
      {/* the Image contents */}
        <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
            <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
        </div>
        {/* Registration card container */}
         <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col gap-3  ">
          {/* Logo Image */}
           <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
          {/* Registration description */}
            <div className="w-full flex flex-col items-center gap-2">
            <p className="font-bold text-[20px]">تسجيل جديد</p>
            <p className="text-[#969696] text-[12px]">قم بالتسجيل والاستفادة من ركنة</p> 
            </div>
            {/* Data User Entry */}
            <div className="card shrink-0 w-full  max-sm:w-full max-w-sm justify-center items-center flex flex-col gap-8">
              <form className="card-body ">
            <input value={UeserName} onChange={(e)=>{setUeserName(e.target.value);}} className="text-[12px] p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="text" placeholder="ادخل اسم المستخدم" required/>   
        
            <input value={Email} onChange={(e)=>{setEmil(e.target.value);}} className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm  " type="email" placeholder="ادخل البريد الإلكتروني"/>  
        
            <input value={phone} onChange={(e)=>{setphone(e.target.value);}} className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm text-right placeholder:text-right" type="tel" placeholder="ادخل رقم الجوال"/>  
        
            <input value={Password} onChange={(e)=>{setPassword(e.target.value);}} className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="password" placeholder="ادخل كلمة المرور"/>    
         
           
            <div className="form-control">
            <button onClick={handelSingUP} className="btn btn-primary w-[35vh] h-[5vh] rounded-md  bg-[#fbf429] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">انشاء الحساب</button>
            </div>
             </form>  
            </div>
            {/* Description of registration options */}
            <div className="w-full flex flex-col justify-center items-center gap-3">
            <div className=" w-full flex items-center justify-center gap-2">
            <hr className="border-[1px] w-[20%]"></hr>
            <p className="text-[12px] text-[#5d5b5b]">او</p>
            <hr className="border-[1px] w-[20%]"></hr>
            </div>
      <div className="w-full items-center flex justify-center">
         <button className="w-full md:w-auto px-4 py-2 rounded-md border font-bold text-xs shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#efefef]">
              <img className="w-6 h-6" src={google} alt="Google"/>
              التسجيل عن بأستخدام قوقل
            </button>

           
          </div>


          <div className="text-center">
            <p className="text-[#969696] text-xs">لدي حساب لتسجيل ?? <a className="text-blue-400 font-bold" href="/">تسجيل دخول</a></p>
          </div>
        </div>
      </div>
    </div>

<<<<<<< HEAD
</div>
</>
  
  
=======

  </div>
  </>
>>>>>>> a74e5812d8001a81463b4028dcd26386c0f8024c
  )
}

export default Signup;