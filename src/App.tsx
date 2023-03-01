import React,{PureComponent, useEffect, useState} from 'react';
import ErrorPage from  './components/ErrorPage'
import logo from './logo.svg';
import Button,{ButtonSize,ButtonType} from './components/Button/button';
import { validateHeaderValue } from 'http';

function App() {

const MakeError = () =>{
  const value : any = undefined;
  return (
     <span>{value.notExist}</span>
  )
}
const ErrorInfo = ({error}:{error:Error|null}) => (
  <div>
    {error?.message}
    <h1>11111</h1>
  </div>
)

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <Button disabled >Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} onClick={(e)=>{e.preventDefault();alert(123)}}>Primary</Button>
        <Button btnType={ButtonType.Default} autoFocus>Default</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Danger</Button>
        <Button btnType={ButtonType.Link} href="HTTPS://www.baidu.com" target='_blank' size={ButtonSize.Large}>Link</Button>
        <Button btnType={ButtonType.Link} href="HTTPS://www.baidu.com" disabled>Link</Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
