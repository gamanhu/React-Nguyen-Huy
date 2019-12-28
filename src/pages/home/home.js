import React, { Component } from 'react';
import Carousel from "../../components/carousel";
import CatalougeFilm from "../../components/catalouge-film";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <CatalougeFilm/>
            </div>
        )
    }
}
