import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import PageNotFound from "./pages/page-not-found";
import {routesHome} from "./routes";


const showPage = routes => {
  if(routes && routes.length>0){
    return routes.map((item,index)=>{
      return <Route path = {item.path} exact = {item.exact} component = {item.component}/>
    })
  }
}

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {showPage(routesHome)}
        <Route path="" component= {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
