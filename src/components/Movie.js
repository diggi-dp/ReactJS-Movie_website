import React, { Component } from 'react'
import style from './style.module.css'
import MovieItem from './MovieItem'
import { flushSync } from 'react-dom';
import { getMovie, searchMovie } from './services'

export default class Movie extends Component {
  state = {
    movieData: [],
    searchQuery: '',
  }

  filteredDataHandler = (e) => {
    flushSync(() => {
      this.setState({
        searchQuery: e.target.value,
      })
    })

    if (this.state.searchQuery.length >= 3) {
      searchMovie(this.state.searchQuery)
        .then(res => {
          this.setState({
            movieData: res.data.Search,
          })
        })
        .catch(err => console.log(err))
    }

  }

  getApiData = () => {
    getMovie()
      .then(res => this.setState({
        movieData: res.data.Search
      }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getApiData();
  }

  render() {

    return (
      <>
        <form className={style.search}>
          <input type="search" onChange={(e) => this.filteredDataHandler(e)} value={this.state.searchQuery} placeholder={this.props.placeholder} />
        </form>

        <ul className={style.movies}>
          {
            this.state.movieData?.map((elem, idx) => <MovieItem moviedata={elem} key={idx} id={idx} />)
          }
        </ul>
      </>
    )
  }
}
