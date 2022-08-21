import React, { PureComponent } from 'react'
import style from './style.module.css'
import axios from 'axios'
import MovieItem from './MovieItem'

export default class Movie extends PureComponent {
state = {
    movieData : [],
    searchQuery:'',
    filterMovieData : [],
}

filteredDataHandler =(e)=>{
    let filteredData = this.state.movieData.filter(elem=> elem.Title.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      searchQuery : e.target.value,
      filterMovieData : filteredData
    })
  }

getApiData = ()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => this.setState({
        movieData : res.data.Search
    }))
    .catch(err => console.log(err))
}

componentDidMount(){
this.getApiData();
}

  render() {

    return (
      <>
        <form className={style.search}>
            <input type="search" onChange={(e)=>this.filteredDataHandler(e)} value={this.state.searchQuery} placeholder={this.props.placeholder}/>
         </form>

        <ul className={style.movies}>
        {this.state.filterMovieData.length !==0 && this.state.searchQuery.length !==0 ?
        this.state.filterMovieData.map((elem,idx)=><MovieItem moviedata={elem} key={idx}/>)
        :
        this.state.movieData.map((elem,idx)=><MovieItem moviedata={elem} key={idx}/>)
        }
        </ul>
      </>
    )
  }
}
