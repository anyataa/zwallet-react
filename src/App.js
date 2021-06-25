import TransferListLayout from "./layout/TransferListLayout";
import Hero from './component/Hero'
import Login from "./layout/Login";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Login/>
      {/* <TransferListLayout/> */}
    </BrowserRouter>
  );
}

export default App;