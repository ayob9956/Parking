import React from "react";

function Test() {
  return(<>
  <div class="bg-gray-900 min-h-screen flex flex-col">
  <header class="bg-gradient-to-r from-purple-800 to-indigo-800 py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-white text-4xl font-bold"> الدعم</h1>
    </div>
  </header>
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
  <footer class="bg-gray-800 py-4">
    <div class="container mx-auto px-4 text-center text-white">
      <p class="text-lg">جميع الحقوق محفوظة &copy; 2023</p>
    </div>
  </footer>
</div>
  
  
  </>)
}

export default Test;
