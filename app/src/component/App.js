import '../style/App.css';
import Login from './Login';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Register from './Register';
import DriveReq from './DriveReq';
import Profile from './Profile';
import Driver from './Driver';







function App(p) {
  return (
  

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/DriveReq" component={DriveReq}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Driver" component={Driver}/>
          <Route path="*" />
        </Switch>

      </BrowserRouter>

    

   
  );
}

export default App;
