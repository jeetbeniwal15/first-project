import React from "react";
import "../assets/css/Main.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import AdminDashboard from "../component/AdminDashboard";

function Main() {
  return (
    <div>
      <Header />
      <Sidebar />
      <AdminDashboard />
    </div>
  );
}

export default Main;
