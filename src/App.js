import { Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import NotFound404 from "./layout/404";
import DashboardLayout from "./layout/DashboardLayout";
import LandingPage from "./layout/LandingPage";
import TransferListLayout from "./layout/TransferListLayout";
import ResetPassword from "./layout/ResetPassword";
import CreateNewPassword from "./layout/CreateNewPassword";
import PinSuccess from "./layout/PinSuccess";
import CreatePin from "./layout/CreatePin";
import "./style/global.css";
import SignUp from "./layout/SignUp";

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
        <Route path="/signup" component={SignUp} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/createNewPassword" component={CreateNewPassword} />
        <Route path="/pinSuccess" component={PinSuccess} />
        <Route path="/createPin" component={CreatePin} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;
