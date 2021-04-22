import '../style/App.css';
import Login from './Login';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import Register from './Register';
import DriveReq from './DriveReq';






function App(p) {
  return (
    <div style={{height:'100%',display:"flex"}}>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/DriveReq" component={DriveReq}/>
          <Route path="*" />
        </Switch>

      </BrowserRouter>

    </div>
    

   
  );
}

export default App;
