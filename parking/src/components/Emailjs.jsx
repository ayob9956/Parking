import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';
    
    
     

    
function Emailjs() {
    const form = useRef();
    
     const sendEmail = (e) => {
       e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
       emailjs.sendForm('service_mhcfiw6', 'template_5qqbpym', form.current, 'rY2L4SmEgvfjPNQ01')
       .then((result) => {
       console.log('SUCCESS!', response.status, response.text);
         }, (error) => {
          console.log('FAILED...', error);
        });
     };
  return (
    <div className='w-full '>
    

       <section class="bg-white ">
    <div class="container  w-[50dvw] px-6 py-12 mx-auto">
        <div  >
            <p class="font-medium text-yellow-500">تواصل معنا</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">راسل فريقنا الرهيب</h1>

            <p class="mt-3 text-gray-500">نود أن نسمع منك. الرجاء تعبئة هذا النموذج  .</p>
        </div>

        <div class="    w-[50dvw] gap-12 mt-10 ">
            

            <div class="p-4 py-6  rounded-lg bg-gray-50 md:p-8">
                <form ref={form}  onSubmit={sendEmail}>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600">الاسم</label>
                            <input  name="user_name" type="text" placeholder="الاسم " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                       
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600">الايميل</label>
                        <input name="user_email" type="email" placeholder="example@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600">الرسالة</label>
                        <textarea name="message" class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="مرحبا فريق ركنة...."></textarea>
                    </div>

                    <button type="submit" value="Send" class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-300 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        ارسال
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
    
    </div>
  )
}

export default Emailjs