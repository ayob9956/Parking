import React from 'react'
import {Routes,Route} from 'react-router-dom'


import LnadingPage from './LnadingPage'
import TestEvreyThing from './TestEvreyThing'
import BookInfo from './BookInfo'
import Signup from './Signup'
import Singnin from './Singnin'
import Support from './Support'
import UserData from './UserData'
import Test from './Test'



export default function Rout() {
  return (
    <>
    {/* <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />

    </Routes>   */}

    {/* <Singnin/> */}
    {/* <Signup/> */}
    {/* <Support/> */}
    {/* <UserData/> */}
    {/* <Test/> */}
    {/* <LnadingPage/> */}
    <BookInfo/>
 

    </>
  )
}
