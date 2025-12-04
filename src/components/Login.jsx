import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("https://auth-backend-psp5.onrender.com/api/auth/login", { email, password });
          
  
        setMessage(res.data.message);
        setEmail("");
        setPassword("");
  
        // Redirect to Product page after successful login
        if (res.data.message === "Login successful") {
          navigate("/"); // <-- redirect
        }
      } catch (err) {
        setMessage(err.response?.data?.message || "Login failed");
        console.log(err,"errrrrrrrrr")
      }
    };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
            Login
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold text-lg transition duration-300"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="mt-5 text-center text-red-400 font-medium">{message}</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
