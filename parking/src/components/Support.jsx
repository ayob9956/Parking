import React from "react";
import Nav from "./Nav";

function Support() {
  return (<>
  <Nav/>
  <div className="bg-gray-100 min-h-[88vh] flex items-center">
  <main className="container mx-auto px-4 py-8 ">
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="name">الاسم</label>
          <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="text"  placeholder="ادخل اسمك" />
        </div>
        <div class="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="email">البريد الإلكتروني</label>
          <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="email"  placeholder="ادخل بريدك الإلكتروني" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="message">الرسالة</label>
          <textarea className="border border-gray-300 rounded-md px-4 py-2 w-full h-32" id="message" placeholder="اكتب رسالتك هنا"></textarea>
        </div>
        <button className="bg-[#f5d329] text-[#00000088]  px-4 py-2 rounded-md font-semibold" type="submit">إرسال</button>
     
    </div>
  </main>
 
</div>
  
  </>)
}

export default Support;
