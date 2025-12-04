import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      setMessage(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />

      {/* Full viewport height container for perfect centering */}
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
            Register
          </h2>

          <form className="space-y-5" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
            />

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
              Register
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

export default Register;
