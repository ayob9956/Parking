import React from "react";

function Data() {
  return <div>
<div className="bg-[#F2F2F2] w-full h-[85vh] flex flex-col items-center justify-center ">
    <div className="w-[75%] h-[35vh] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a1c3bc58223521.59f3b659acbf7.jpg')] bg-cover bg-center rounded-2xl shadow-2xl flex flex-col justify-between p-4 pr-9">
        <div className="w-[8%] pt-2 pb-3 text-[#d7d7d7] text-center rounded-md shadow-2xl max-w-screen-sm  bg-[#97989050]">حسابي </div>
            <div className="text-[#d7d7d7] font-semibold text-2xl ">
              <p>User</p>
        </div>
    </div>

<div className=" bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] w-[75%] h-[45vh] m-3 bg-white rounded-2xl shadow-2xl">
    <div className=" w-full h-[45vh] rounded-2xl shadow-2xl flex flex-col gap-2 px-8 py-3">
        <div class="block text-gray-700 text-xl font-bold mb-2 "><p >بياناتي</p> 
        <hr className="w-[20%] mt-2 "></hr>
        </div>
         <div class="mb-1">
            <label class="block text-gray-700 font-bold mb-1 p-1" for="username">اسم المستخدم:</label>
                <p class="text-gray-800 text-base rounded-md shadow-md truncate w-[40%] border-[1px] p-2" id="username"> Tariq</p>
        </div>
  <div class="mb-1">
    <label class="block text-gray-700 font-bold mb-2 p-1" for="email">البريد الإلكتروني:</label>
     <p class="text-gray-800 text-base rounded-md shadow-md truncate w-[40%] border-[1px] p-2" id="email">tgg.80@example.com</p>
  </div>
  <div>

</div>
    </div>
</div>

</div>
  </div>;
}

export default Data;
