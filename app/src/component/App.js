import '../style/App.css';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Register from './Register';
import DriveReq from './DriveReq';
import Profile from './Profile';
import Driver from './Driver';
import FutureDrive from './FutureDrive'
import PreviousDrive from './PreviousDrive'
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"







function App(p) {

  return (
      
      <Router>

    <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <PrivateRoute path="/driver" component={Driver}/>
          <Route path="/DriveReq" component={DriveReq}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/FutureDrive" component={FutureDrive}/>
          <Route path="/PreviousDrive" component={PreviousDrive}/>
          <Route path="*" />
          
        </Switch>
        </AuthProvider>
      
      </Router>   
  );
}

export default App;
