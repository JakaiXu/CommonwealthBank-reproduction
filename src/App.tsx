import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CommSecPage from "./pages/CommSecPage";
import NetbankLoggedinPage from "./pages/NetbankLoggedinPage";
import WaitingEditPage from "./pages/WaitingEditPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="commsec-logon" element={<CommSecPage />} />
      <Route
        path="commsec-logon/netbank/home"
        element={<NetbankLoggedinPage />}
      />
      <Route path="home-loan" element={<WaitingEditPage />} />
      <Route path="insurance" element={<WaitingEditPage />} />
      <Route path="investing-and-supper" element={<WaitingEditPage />} />
      <Route path="business" element={<WaitingEditPage />}>
        <Route path="industries" element={<WaitingEditPage />} />
      </Route>
      <Route path="institutional" element={<WaitingEditPage />} />
      <Route path="banking" element={<WaitingEditPage />}>
        <Route path="kids" element={<WaitingEditPage />} />
        <Route path="teens" element={<WaitingEditPage />} />
        <Route path="students" element={<WaitingEditPage />} />
        <Route path="youngadults" element={<WaitingEditPage />} />
        <Route path="guidance" element={<WaitingEditPage />} />
        <Route path="events" element={<WaitingEditPage />} />
      </Route>
      <Route path="moving-to-australia" element={<WaitingEditPage />} />
      <Route path="travel" element={<WaitingEditPage />} />
      <Route path="support" element={<WaitingEditPage />} />

      <Route
        path="digital-banking/commbank-app"
        element={<WaitingEditPage />}
      />
      <Route
        path="digital-banking/spend-tracker-insights"
        element={<WaitingEditPage />}
      />
      <Route
        path="digital-banking/goal-tracker"
        element={<WaitingEditPage />}
      />
      <Route path="latest/partnerships" element={<WaitingEditPage />} />
      <Route path="prodnav_Banking" element={<WaitingEditPage />} />
    </Routes>
  );
}

export default App;
