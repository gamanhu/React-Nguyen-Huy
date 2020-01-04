import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        let {movie} = this.props;
        return (
            <div classname="film__item">
                <img src={movie.hinhAnh} width="10%" alt={movie.biDanh} />
                <h2>{movie.tenPhim}</h2>
                <span>117 phút</span>
            </div>
        )
    }
}
