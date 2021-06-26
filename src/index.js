import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux

const actionTest = () => {
    return {
      type:'test'
    }
}

const reducer = ( state = 0, action ) => {
  switch( action.type ){
    case 'test':
      return state + 1
  }
}

const store = createStore( reducer )

//subscribe need to be call before dispatch
store.subscribe( () => {
  console.log( store.getState() )
})

store.dispatch( actionTest() )
store.dispatch( actionTest() )
store.dispatch( actionTest() )
store.dispatch( actionTest() )

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
