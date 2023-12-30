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
import Com from './Com'
import TsetComponet from './TsetComponet'


export default function Rout() {
  return (
    <>
    <Routes>
        {/* <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/addCard' element={<AddCard/>}/> */}
         <Route path='/' element={<Signup/>}/>
          <Route path='/Singnin' element={<Singnin/>}/>
          <Route path='/Signup' element={<Signup/>}/>


    </Routes>  
  
    {/* <Singnin/> */}
    {/* <Signup/> */}
    {/* <Support/> */}
    {/* <UserData/> */}
    {/* <Test/> */}
     {/* <Nav/> */}
  {/* <Testt/>
  <Com/> */}
  {/* <Com/> */}
  {/* <TsetComponet/> */}
    {/* <BookInfo/> */}
 
 {/* <LnadingPage/>  */}

    </>
  )
}
