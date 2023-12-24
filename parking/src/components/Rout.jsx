import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LnadingPage from './LnadingPage'


export default function Rout() {
  return (
    <>
    <Routes>
        <Route path='/' element={<LnadingPage/>}></Route>
        

    </Routes>  
    </>
  )
}
