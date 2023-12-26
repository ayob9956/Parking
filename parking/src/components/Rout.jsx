import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LnadingPage from './LnadingPage'
import TestEvreyThing from './TestEvreyThing'
import BookInfo from './BookInfo'
import Payment from './Payment'
import AddCard from './AddCard'

export default function Rout() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        <Route path='/bookinfo' element={<BookInfo/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/addCard' element={<AddCard/>}/>


    </Routes>  
    </>
  )
}
