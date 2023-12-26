import React from "react";

function Support() {
  return (<>
  
  <div className="bg-gray-100 min-h-screen flex flex-col justify-between">

  <main className="container mx-auto px-4 py-8 ">
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
      <form>
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
        <button className="bg-[#efe827] text-black font-bold px-4 py-2 rounded-md " type="submit">إرسال</button>
      </form>
    </div>
  </main>
  <footer className="bg-gray-200 py-5  border-[1px] border-[#120e0e44] rounded-lg ">
    <div className="container mx-auto px-4 text-center text-gray-600">
      جميع الحقوق محفوظة &copy; 2023
    </div>
  </footer>
</div>
  
  </>)
}

export default Support;
