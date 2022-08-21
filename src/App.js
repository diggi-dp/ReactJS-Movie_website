import React, { Component } from 'react'
import Footer from './components/Footer'
import Movie from './components/Movie'

export default class App extends Component {
  render() {
    return (
      <>
        <Movie placeholder='Search For Movie Title...'/>
        <Footer/>
      </>
    )
  }
}

