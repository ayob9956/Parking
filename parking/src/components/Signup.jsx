import React from "react";
import google from "../google.png"
import  { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { GoogleAuthProvider,signInWithPopup } from '@firebase/auth';
import { auth } from '../components/firebase/firebaseConfig';



     

function Signup() {

  
  const [validated, setValidated] = useState(false);
  const [UeserName, setUeserName] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post("https://6552c0675449cfda0f2dca61.mockapi.io/uesers", {
          UeserName: UeserName,
          Email: Email,
          phone: phone,
          Password: Password
        })
        .then((response) => {
         
        })
    
    }

    setValidated(true);

    }

      const handelgoogel = async (e)=>{
    const provider = await  new GoogleAuthProvider ();
    return signInWithPopup( auth, provider);

  }
  return (<>
  {/* the Page container */}
  <div className="w-full h-[100vh] flex justify-center items-center bg-[#e5e5e645]  ">

    {/* the Contents container */}
    <div className="w-[75%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1]">

      {/* the Image contents */}
        <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
            <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
        </div>
        {/* Registration card container */}

         <div className="w-[50%] h-[80vh]  flex items-center flex-col   ">

          {/* Logo Image */}
           <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
          {/* Registration description */}
            <div className="w-full flex flex-col items-center ">
            <p className="font-bold text-[20px]">تسجيل جديد</p>
            <p className="text-[#969696] text-[12px]">قم بالتسجيل والاستفادة من ركنة</p> 
            </div>
            {/* Data User Entry */}
             <Form className='w-full h-[38vh] max-sm:w-full max-w-sm flex flex-col justify-center items-center gap-2' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group  controlId="formUserName">
        <Form.Control className=' text-[12px] placeholder:text-[12px]   w-[5vh] h-[5vh] rounded-md border-[1px] shadow-sm'
          required
          type="text"
          placeholder="Enter user name"
          pattern=".{4,}"
          value={UeserName}
          onChange={(e) => setUeserName(e.target.value)}
        />
        <Form.Control.Feedback className="h-3 font-sm"  type="invalid">
          Please enter a user name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
  
        <Form.Control className='text-[12px] placeholder:text-[12px]  w-[5vh] h-[5vh] rounded-md border-[1px] shadow-sm'
          required
          type="email"
          placeholder="Enter email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback className="h-3 text-sm"  type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="text-[12px] placeholder:text-[12px]" controlId="formPhone">
        <Form.Control className='text-[12px] placeholder:text-[12px] w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm text-right placeholder:text-right'
          required
          type="tel"
          placeholder="Enter phone number"
          pattern="05[0-9]{8}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Form.Control.Feedback className="h-3 font-medium" type="invalid">
          Please enter a valid phone number.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="formPassword">
        <Form.Control className='text-[12px] placeholder:text-[12px] w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm'
          required
          type="password"
          placeholder="Enter password"
          pattern=".{6,}"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback className="h-3 font-sm"  type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
      </Form.Group>
        <div className='w-full flex justify-center pt-2 '>
      <Button  style={{background:"#fbf429", color: "black" }} className='bg-[#fbf429]  w-[30vh] rounded-md font-bold shadow-md text-[12px]' type="submit">Submit</Button>
      </div>
    </Form>

            {/* Description of registration options */}
            <div className="w-full flex flex-col justify-center items-center pt-3">
            <div className=" w-full flex items-center justify-center gap-3">
            <hr className="border-[1px] w-[20%]"></hr>
            <p className="text-[12px] text-[#5d5b5b]">او</p>
            <hr className="border-[1px] w-[20%]"></hr>
            </div>

       
            <button onClick={handelgoogel} className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#efefef]">
              <img className="w-[5%]" src={google}alt="" />

              التسجيل عن بأستخدام قوقل
            </button>

           
          </div>


          <div className="text-center">
            <p className="text-[#969696] text-xs">لدي حساب لتسجيل ?? <a className="text-blue-400 font-bold" href="/">تسجيل دخول</a></p>
          </div>
        </div>
      </div>
    </div>
</>

  
  
  )
}

export default Signup;