import React from 'react'
import {Routes,Route} from 'react-router-dom'


import LnadingPage from './LnadingPage'
import TestEvreyThing from './TestEvreyThing'
import BookInfo from './BookInfo'
import Payment from './Payment'
import AddCard from './AddCard'
import Signup from './Signup'
import Singnin from './Singnin'
import Support from './Support'
import UserData from './UserData'
import Test from './Test'
import Nav from './Nav'

import CheckoutForm from './CheckoutForm'
 import Ticket from './Ticket'

 import {Elements} from '@stripe/react-stripe-js';
 import {loadStripe} from '@stripe/stripe-js';
 import Checkout from './Checkout'
 
 // Make sure to call `loadStripe` outside of a component’s render to avoid
 // recreating the `Stripe` object on every render.
 const stripePromise = loadStripe('pk_test_51OS4liBEKzJHwgwjOgTTCfeco9oWGRtB8MNvhMDzGc9HxPc8eCsqUxIN26UCfJKbauiMzGukK8iolSM6OqN7qAsl00y9SkWZYz');


 import ParkingAPI from './ParkingAPI'





export default function Rout() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
    <>
    {/* <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />

        <Route path='/userdata' element={<UserData/>} />


        <Route path='/payment' element={<Payment/>}/>
        <Route path='/addCard' element={<AddCard/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/signin' element={<Singnin/>}/>

        <Route path='/support' element={<Support/>}/>

        <Route path='/ticket' element={<Ticket/>}/>
       
          <Route path='/checkout' element={<Checkout/>}/>





    </Routes>   */}


 
 {/* <LnadingPage/>  */}

    </>
  )
}