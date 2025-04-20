import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Promoters from "./pages/Promoters";
import Leads from "./pages/Leads";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";
import AiAssistant from "./pages/AiTourSteps";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import BusinessSetupPage from "./pages/BusinessSetupPage";
import HelpPage from "./components/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/businesspage" element={<BusinessSetupPage />} />

          <Route path="/promoters" element={<Promoters />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ai" element={<AiAssistant />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
