import google from "../google.png"

function Singnin() {
  return(<>
   {/* the Page container */}
   <div className="w-full h-[90vh] flex justify-center items-center bg-[#e5e5e645]">
    {/* the Contents container */}
    <div className="w-[70%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1] ">
      {/* the Image contents */}
        <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
        <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
        </div>
        {/* Registration card container */}
         <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col j gap-8  ">
          {/* Logo Image */}
           <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
          {/* Registration description */}
            <div className="w-full flex flex-col items-center gap-4">
            <p className="font-bold text-[20px]">تسجيل دخول</p>
            <p className="text-[#969696] text-[12px]">يرجى تسجيل الدخول للمتابعة إلى حسابك. </p> 
            </div>
            {/* Data User Entry */}
            <div className="flex flex-col gap-6">
            <input className="text-[12px] p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/> 
            <div className="flex flex-col gap-2">  
            <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm " type="password" placeholder="ادخل كلمة المرور "/> 
            <p className="text-[#969696] text-[12px]"><a href="">نسيت كلمة المرور؟ </a> </p> 
            </div>      
            <button className="w-[35vh] h-[5vh] rounded-md  bg-[#efe827] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">تسجيل دخول</button>
            </div>
            {/* Description of registration options */}
            <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className=" w-full flex items-center justify-center gap-2">
            <hr className="border-[1px] w-[20%]"></hr>
            <p className="text-[12px] text-[#5d5b5b]">او</p>
            <hr className="border-[1px] w-[20%]"></hr>
            </div>
       
            <button className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#dedede5d]">
              <img className="w-[5%]" src={google}alt="" />
              التسجيل دخول بأستخدام قوقل
            </button>
            <p className="text-[#969696] text-[12px] ">ليس لدي حساب لتسجيل ؟؟  <a className="text-blue-400 font-bold" href="/">انشاء حساب</a></p>
           
            </div>
        </div>
    </div>

</div>
 <footer className="bg-gray-200 py-5  border-[1px] border-[#120e0e44] rounded-lg ">
    <div className="container mx-auto px-4 text-center text-gray-600">
      جميع الحقوق محفوظة &copy; 2023
    </div>
  </footer>

  </>)
}

export default Singnin;
