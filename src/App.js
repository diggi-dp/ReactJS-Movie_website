import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Movie from './components/Movie'

export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Movie placeholder='Search For Movie Title...'/>} ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
    )
  }
}

