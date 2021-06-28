import { Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import NotFound404 from "./layout/404";
import DashboardLayout from "./layout/DashboardLayout";
import LandingPage from "./layout/LandingPage";
import TransferListLayout from "./layout/TransferListLayout";
import "./style/global.css";
import { TransferConfirmation } from "./component/TransferConfirmation";
function App() {
  return (
    <div className="App">
      {/* Code below allows un-accessible page to be developed 
      by the person in charge, feel free to add more. Yet pls do not delete. 
      If you need to do so. Pls informed in the group */}
      <Switch>
        <Route path="/transfer" component={TransferListLayout} />
        <Route path="/transfer/:id" component={TransferConfirmation} />
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/landingPage" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;
