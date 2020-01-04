import React, { Component } from 'react'

export default class PickingPlace extends Component {
    render() {
        return (
            <div className="picking-place">
                <ul className="nav nav-pills container justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#cgv-nav">
                            <img src="./img/cgv.png" width="50px" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#bhd-nav">
                            <img src="./img/bhd.png" width="50px" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#galaxy-nav">
                            <img src="./img/galaxycine.png" width="50px" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#cinestar-nav">
                            <img src="./img/cinestar.png" width="50px" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#megags-nav">
                            <img src="./img//megags.png" width="50px" alt="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#lotte-nav">
                            <img src="./img/lotte.png" width="50px" alt="" />
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active " id="cgv-nav">
                        <div className="advertisment" width="10%"></div>
                        <div className="list-cinemas">
                            <div className="cinema-item">
                                <img
                                    src="./img/cgv-cresenmall.jpg"
                                    width="50px"
                                    alt="cgv-cresenmall"
                                />
                                <div className="cinema-item__detail">
                                    <h5>CGV - Cresent Mall</h5>
                                    <p>Địa chỉ</p>
                                </div>
                            </div>
                            <div className="cinema-item">
                                <img
                                    src="./img/cgv-cresenmall.jpg"
                                    width="50px"
                                    alt="cgv-cresenmall"
                                />
                                <div className="cinema-item__detail">
                                    <h5>CGV - Cresent Mall</h5>
                                    <p>Địa chỉ</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-movies">
                            <div className="movie-item">
                                <div className="movie-detail">
                                    <img
                                        src="./img/cgv-cresenmall.jpg"
                                        width="50px"
                                        alt="cgv-cresenmall"
                                    />
                                    <div className="movie-item__detail">
                                        <h5>CGV - Cresent Mall</h5>
                                        <p>Địa chỉ</p>
                                    </div>
                                </div>
                                <div className="start-time">
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <div className="clear" />
                                </div>
                            </div>
                            <div className="movie-item">
                                <div className="movie-detail">
                                    <img
                                        src="./img/cgv-cresenmall.jpg"
                                        width="50px"
                                        alt="cgv-cresenmall"
                                    />
                                    <div className="movie-item__detail">
                                        <h5>CGV - Cresent Mall</h5>
                                        <p>Địa chỉ</p>
                                    </div>
                                </div>
                                <div className="start-time d-block">
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <a href="/">
                                        <span>10:30</span>~12:27
            </a>
                                    <div className="clear" />
                                </div>
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                    <div className="tab-pane container fade" id="#bhd-nav">
                        ...
    </div>
                    <div className="tab-pane container fade" id="galaxy-nav">
                        ...
    </div>
                    <div className="tab-pane container fade" id="cinestar-nav">
                        ...
    </div>
                    <div className="tab-pane container fade" id="megags-nav">
                        ...
    </div>
                    <div className="tab-pane container fade" id="lotte-nav">
                        ...
    </div>
                </div>
            </div>
        )
    }
}
