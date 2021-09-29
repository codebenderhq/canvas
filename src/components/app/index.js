import ReactDOM from 'react-dom'
import React from "react";
import AppLayout  from './_app';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = ({children}) => {
    ReactDOM.render(<AppLayout>{children}</AppLayout>, document.getElementById("app"))
}
 

export default App