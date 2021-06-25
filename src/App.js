import TransferListLayout from "./layout/TransferListLayout";
import { Route } from "react-router-dom";
import NotFound404 from "./layout/404";
function App() {
  return (
    <div className="App">
      {/* Code below allows un-accessible page to be developed 
      by the person in charge, feel free to add more. Yet pls do not delete. 
      If you need to do so. Pls informed in the group */}
      <Route path="/transfer" component={TransferListLayout}></Route>
      <Route path="/*" component={NotFound404}></Route>
    </div>
  );
}

export default App;
