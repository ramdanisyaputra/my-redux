import React from 'react';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';
import store from './store';

const App = () => {
  return(
    <Provider store={store}>
      <div className="App">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Belajar Redux</h1>
        <Todos />
        <Form />
      </div>
    </Provider>
  )
}

export default App;
