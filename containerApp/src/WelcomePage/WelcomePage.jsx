import { Fragment } from 'react';

//import './App.css';
import {Link, BrowserRouter} from 'react-router-dom'



function WelcomePage() {
  return (
    <div className="wel">
      <header className="App-header">
        <p>
          Welcome to the Container App
        </p>
      </header>
      <Fragment>
        <BrowserRouter>
          <div className='button-1'>
            <Link to='Login' target='_blank'>
              <button className='admin'>Login As Admin </button>
            </Link>
            <Link to='/LoginPage/index.js' target='_blank'>
              <button className='user'> Login As User </button>
            </Link>
          </div>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export {WelcomePage};