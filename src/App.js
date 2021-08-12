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
import NewPin from "./layout/NewPin";
import { SeeAllFriends } from "./layout/SeeAllFriends";
import { SeeAllTransaction } from "./layout/SeeAllTransaction";
import TransferStatus from "./layout/TransferStatus";
import ProfileListLayout from "./layout/ProfileListLayout";
import { LoginQR } from "./layout/LoginQR";
import RetrievalLayout from "./layout/RetrievalPage/RetrievalLayout";
import MailForPassword from "./layout/MailForPassword";
import { TopUpLanding } from "./layout/TopUp/TopUpLayout";
import PaymentLayout from "./layout/Payment/PaymentLayout";
import { RenderPdfApp } from "./component/RenderPdfApp";
import ComponentToPrint from "./component/RenderComponent";

function App() {
  return (
    <div className="App">
      {/* Code below allows un-accessible page to be developed 
      by the person in charge, feel free to add more. Yet pls do not delete. 
      If you need to do so. Pls informed in the group */}
      <Switch>
        <Route path={"/billing"} component={PaymentLayout} />
        <Route path={"/retrieval"} component={RetrievalLayout} />
        <Route path="/transfer" component={TransferListLayout} />
        <Route path="/profil" component={ProfileListLayout} />
        <Route path="/pdf" component={RenderPdfApp} />
        <Route path="/seealltransaction" component={SeeAllTransaction}></Route>
        <Route path="/friendslist" component={SeeAllFriends}></Route>
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/topUp" component={TopUpLanding}></Route>
        <Route path="/newPin" component={NewPin}></Route>
        <Route path="/transferStatus" component={TransferStatus}></Route>
        <Route path="/qrLogin" component={LoginQR}></Route>
        <Route exact path="/" component={LandingPage} />
        <Route path="/logIn" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/createNewPassword/:id" component={CreateNewPassword} />
        <Route path="/pinSuccess" component={PinSuccess} />
        <Route path="/createPin" component={CreatePin} />
        <Route path="/mailForPassword" component={MailForPassword} />
        <Route path="/print" component={ComponentToPrint} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;
