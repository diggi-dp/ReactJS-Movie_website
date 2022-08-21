import React, { Component } from 'react'
import style from './style.module.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className={style.footer}>
                    <p>© 2022 Digpal Singh Mandloi </p>
                    <p>
                        <a href="digpalsinghmandloi10@gmail.com">
                            <i className="fa fa-envelope fa-fw"></i>
                        </a>
                        <a href="https://github.com/diggi-dp" target="_blank" rel="noreferrer">
                            <i className="fa fa-github fa-fw"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/digpal-singh-mandloi-bb0b00237/" target="_blank" rel="noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <i className="fa fa-codepen"></i>
                        </a>

                        <a href="/" target="_blank" rel="noreferrer">
                            (<i className="fa fa-fire fa-fw"></i>)
                        </a></p>
                </footer>
            </>
        )
    }
}
