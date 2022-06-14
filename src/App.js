import Fruit from '../src/images/fruit.png'
import './app.scss'
import {createContext, useState} from "react";
import Input from "./component/form/form.component";
import Card from "./component/card-components/card.component";
import Navigation from "./component/navigation-menu/navigation.component";
import MainBox from "./component/Mainbox/mainbox.component";
import {Link, Outlet} from "react-router-dom";

function App() {

  return (
    <div className="app-page">
      <div className={'background'}/>
        <div>
            <div className={'yellow-background'}>
                <div className={'shopping-list'}>
                    <p>Shopping</p>
                    <p>List</p>
                </div>

            </div>
            <div className={'backdrop'}>
                <p>Welcome</p>
                <img src={Fruit} className={'fruit'}/>

            </div>
        </div>
        <Outlet/>
    </div>
  );
}

export default App;
