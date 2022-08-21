import React, { Component } from 'react'
import style from './style.module.css'

export default class MovieItem extends Component {

    state = {
        hover :'',
    }

    onMouseEnterHandler(e){
        this.setState({
            hover : style.hover,
        })
        
    }
    onMouseLeaveHandler(e){
        this.setState({
            hover : '',
        })
        
    }

    render() {
        return (
            <>
                <li className={this.state.hover} onMouseEnter={(e)=>this.onMouseEnterHandler(e)} onMouseLeave={(e)=>this.onMouseLeaveHandler(e)}>
                    <div className={style.movie}>
                        <figure>
                            <img src={this.props.moviedata.Poster} alt='img loading error' />
                            <figcaption>
                                <h2 className={style.movie_title}>{this.props.moviedata.Title}</h2>
                            </figcaption>
                        </figure>
                    </div>
                </li>
            </>
        )
    }
}
