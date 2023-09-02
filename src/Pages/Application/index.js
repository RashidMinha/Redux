import React from 'react'
import { Routes, Route } from "react-router-dom";
import Application from './Display';


export default () => {
  return (
      <Routes>
        <Route path='/' element={<Application />} />
        <Route path='/redux-shop' element={<Application mode="redux-shop" />} />
      </Routes>
  )
}


