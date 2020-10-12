import React from 'react';
import {useDispatch} from "react-redux";
import './App.css';
import { queryCarMake } from "./store/actions/Car.actions";

function App() {
    const dispatch = useDispatch();
    dispatch(queryCarMake());
  return (
    <div className="App">
      testing
    </div>
  );
}

export default App;
