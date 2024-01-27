import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Login} from "./Pages/Login";
import {Dashboard} from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";
import {GotoLogin} from "./Pages/GotoLogin";
import {ForgotPassword} from "./Pages/ForgotPassword";
import CheckUser from "./Pages/CheckUser";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/CheckUser" element={<CheckUser />} />
         <Route path="/ForgotPassword" element={<ForgotPassword />} />
         <Route path="/GotoLogin" element={<GotoLogin />} />
         <Route path="/Settings" element={<Settings />} />
         <Route path="/Products" element={<Products />} />
         <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;




