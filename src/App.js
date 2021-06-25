// import TransferListLayout from "./layout/TransferListLayout";

import { Route, Switch } from "react-router-dom";
import NotFound404 from "./layout/404";
import DashboardLayout from "./layout/DashboardLayout";
import LandingPage from "./layout/LandingPage";
import "./style/global.css";
import Login from "./layout/Login";
function App() {
  return (
    <div className="App">
      {/* Code below allows un-accessible page to be developed 
      by the person in charge, feel free to add more. Yet pls do not delete. 
      If you need to do so. Pls informed in the group */}
      <Switch>
        <Route path="/transfer" component={TransferListLayout}></Route>
        <Route path="/dashboard" component={DashboardLayout}></Route>
        <Route path="/landingPage" component={LandingPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="*" component={NotFound404}></Route>
      </Switch>
    </div>
  );
}

export default App;