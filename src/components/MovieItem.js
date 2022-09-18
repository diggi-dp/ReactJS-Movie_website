import React, { Component } from 'react'
import style from './style.module.css'

export default class MovieItem extends Component {

    render() {
        return (
            <>
                <li>
                        <div className={style.movie}>
                            <figure title={this.props.moviedata.Title}>
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
