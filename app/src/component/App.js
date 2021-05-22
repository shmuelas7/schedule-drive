import '../style/App.css';
import Login from './Login';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Register from './Register';
import DriveReq from './DriveReq';
import Profile from './Profile';
import Driver from './Driver';
import FutureDrive from './FutureDrive'
import PreviousDrive from './PreviousDrive'







function App(p) {
  return (
  

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/DriveReq" component={DriveReq}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Driver" component={Driver}/>
          <Route path="/FutureDrive" component={FutureDrive}/>
          <Route path="/PreviousDrive" component={PreviousDrive}/>

          <Route path="*" />
        </Switch>

      </BrowserRouter>

    

   
  );
}

export default App;
