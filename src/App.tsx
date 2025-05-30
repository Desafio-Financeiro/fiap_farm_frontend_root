import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Inventory from "inventory";
// import Sales from "sales";
import Analytics from "analytics";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/sales">Sales</a>
        </li>
      </ul>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Analytics />} />
          {/* <Route path="/inventory" element={<Inventory />} /> */}
          {/* <Route path="/sales" element={<Sales />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
