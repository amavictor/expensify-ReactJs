import Fruit from '../src/images/fruit.png'
import './app.scss'
import {Outlet} from "react-router-dom";

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
