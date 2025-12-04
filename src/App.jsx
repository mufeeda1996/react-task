import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home"
import Login from "./components/Login";
import UserList from "./components/List";
// import Dashboard from "./pages/Dashboard";

// Example authentication check (replace with real logic)
const isAuthenticated = !!localStorage.getItem("token");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
    
      
    </Routes>
  );
}

export default App;
