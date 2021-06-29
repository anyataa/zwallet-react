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
import TopUp from "./layout/TopUp";
import { ProfilLayout } from "./layout/ProfilLayout";

import ChangePassword from "./layout/ChangePassword";
import ChangePin from "./layout/ChangePin";
import NewPin from "./layout/NewPin";
import ManagePhone from "./layout/ManagePhone";
import AddPhone from "./layout/AddPhone";

import { PersonalInfoLayout } from "./layout/PersonalInfoLayout";

import { setFriendsData } from "./global";
import { SeeAllFriends } from "./layout/SeeAllFriends";
import { SeeAllTransaction } from "./layout/SeeAllTransaction"

import TransferStatus from "./layout/TransferStatus";

function App() {
  return (
    <div className="App">
      {/* Code below allows un-accessible page to be developed 
      by the person in charge, feel free to add more. Yet pls do not delete. 
      If you need to do so. Pls informed in the group */}
      <Switch>
        {/* Will be deleted */}
        <Route path="/seealltransaction" component={SeeAllTransaction}></Route>
        <Route path="/friendslist" component={SeeAllFriends}></Route>
        <Route path="/personalinfo" component={PersonalInfoLayout}></Route>
        <Route path="/transfer" component={TransferListLayout} />
        <Route path="/transfer/:id" component={TransferConfirmation} />
        <Route path="/profil" component={ProfilLayout} />
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/topup" component={TopUp}></Route>
        <Route path="/changePassword" component={ChangePassword}></Route>
        <Route path="/changePin" component={ChangePin}></Route>
        <Route path="/newPin" component={NewPin}></Route>
        <Route path="/managePhone" component={ManagePhone}></Route>
        <Route path="/addPhone" component={AddPhone}></Route>
        <Route path="/transferStatus" component={TransferStatus}></Route>
        {/* End of will be deleted */}
        <Route exact path="/" component={LandingPage} />
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
