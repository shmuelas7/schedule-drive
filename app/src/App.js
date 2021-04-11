import './App.css';
import Login from './Login';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Register from './Register';
import DriveReq from './DriveReq.js';





function App(p) {
  return (
    <BrowserRouter>
    
    <Link to="/Register">הרשמה</Link>
    <span> | </span>
    
    <Switch>

      <Route path="/" exact component={Login}/>
      
      <Route path="/Register" component={Register}/>
      <Route path="/DriveReq" component={DriveReq}/>

      <Route        path="*" />
    </Switch>


      
    </BrowserRouter>
   
  );
}

export default App;
