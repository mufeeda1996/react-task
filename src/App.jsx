import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home"
import Login from "./components/Login";
// import Dashboard from "./pages/Dashboard";

// Example authentication check (replace with real logic)
const isAuthenticated = !!localStorage.getItem("token");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} /> */}
    </Routes>
  );
}

export default App;
