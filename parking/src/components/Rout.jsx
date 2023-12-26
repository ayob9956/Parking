import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Nav from './Nav'
import LnadingPage from './LnadingPage'
import TestEvreyThing from './TestEvreyThing'
import BookInfo from './BookInfo'


export default function Rout() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />

    </Routes>  
    </>
  )
}
