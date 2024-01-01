import React from 'react'
import {Routes,Route} from 'react-router-dom'


import LnadingPage from './LnadingPage'
import TestEvreyThing from './TestEvreyThing'
import BookInfo from './BookInfo'
import Payment from './Payment'
import AddCard from './AddCard'
import Support from './Support'
import UserData from './UserData'
import Test from './Test'
import Nav from './Nav'
import Signup from './Signup'
import Data from './Data'

import Signin from './Signin'

import CheckoutForm from './CheckoutForm'
 import Ticket from './Ticket'
 import Checkout from './Checkout'

//  import {Elements} from '@stripe/react-stripe-js';
//  import {loadStripe} from '@stripe/stripe-js';
//  import Checkout from './Checkout'
 
 // Make sure to call `loadStripe` outside of a component’s render to avoid
 // recreating the `Stripe` object on every render.
//  const stripePromise = loadStripe('pk_test_51OS4liBEKzJHwgwjOgTTCfeco9oWGRtB8MNvhMDzGc9HxPc8eCsqUxIN26UCfJKbauiMzGukK8iolSM6OqN7qAsl00y9SkWZYz');


 import ParkingAPI from './ParkingAPI'






export default function Rout() {
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
    <>
    {/* <Routes> */}
        {/* <Route path='/' element={<LnadingPage/>}></Route>

    <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />

        <Route path='/userdata' element={<UserData/>} />


        <Route path='/payment' element={<Checkout/>}/>

        {/* <Route path='/addCard' element={<AddCard/>}/> */}
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/Signin' element={<Signin/>}/>


        <Route path='/support' element={<Support/>}/>

        <Route path='/ticket' element={<Ticket/>}/>
       
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/CheckoutForm' element={<CheckoutForm/>}/>
          <Route path='/sendemail' element={<Emailjs/>}/>


        <Route path='/About' element={<About/>}/>


    </Routes>   



         {/* <Route path='/' element={<LnadingPage/>}/>
        <Route path='/bookinfo' element={<BookInfo/>} />

        <Route path='/userdata' element={<UserData/>} />


        <Route path='/payment' element={<Payment/>}/>

        <Route path='/addCard' element={<AddCard/>}/> */}

        <Routes> 

        <Route path='/' element={<LnadingPage/>}/>

        <Route path='/Signup' element={<Signup/>}/>

        <Route path='/Signin' element={<Signin/>}/>

         <Route path='/LnadingPage' element={<LnadingPage/>}/>

          <Route path='/Data' element={<Data/>}/>
          <Route path='/Data' element={<Data/>}/>

        </Routes> 

        {/* <Route path='/support' element={<Support/>}/>

        <Route path='/ticket' element={<Ticket/>}/>
       
          <Route path='/checkout' element={<Checkout/>}/> */}

  
{/* <Singnin/> */}


 
 {/* <LnadingPage/>  */}

 {/* <Signup/> */}

    </>
  )
}