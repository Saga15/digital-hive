import "./App.css";
import BasicInfo from "./Component/BasicInfo";
import Header from "./Component/Header";
import Header2 from "./Component/Header2";
import Sidebar from "./Component/Sidebar";
import Client from "./Component/Client";
import Firm from "./Component/Firm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <div className="header2">
        <Header2 />
      </div>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/client" element={<Client />} />
          <Route path="/firm" element={<Firm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
