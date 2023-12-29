import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';
    
    
     
    
    
function Emailjs() {
    const form = useRef();
    
     const sendEmail = (e) => {
       e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
       emailjs.sendForm('service_mhcfiw6', 'template_5qqbpym', form.current, 'rY2L4SmEgvfjPNQ01')
       .then((result) => {
             // show the user a success message
         }, (error) => {
             // show the user an error
         });
     };
  return (
    <div className='w-full flex'>
    
       <form className='flex bg-slate-600 flex-col w-full ' ref={form} onSubmit={sendEmail}>
         <label>Name</label>
         <input type="text" name="user_name" />
         <label>Email</label>
         <input type="email" name="user_email" />
         <label>Message</label>
         <textarea name="message" />
         <input type="submit" value="Send" />
       </form>
    
    
    </div>
  )
}

export default Emailjs