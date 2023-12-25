import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Nav from './Nav'
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
