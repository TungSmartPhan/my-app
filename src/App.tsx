import { Routes, Route } from "react-router-dom";
// import "./styles.css";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Orders from "./components/Orders";
// import Products from "./components/Products";
import Customers from "./components/Customers";
import Header from "./headerComponent/Header"

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark min-height-100vh">
          {/* <Sidebar /> */}
        </div>
        <main className="col-10">
   <Header/>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} /> */}
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
