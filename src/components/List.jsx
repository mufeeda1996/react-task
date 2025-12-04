import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://auth-backend-psp5.onrender.com/api/auth/users"
      );
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.response?.data?.message || err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-white mt-4">Loading users...</p>;
  if (error) return <p className="text-red-400 mt-4">{error}</p>;

  return (
    <div className="mt-8 text-white">
      <h3 className="text-xl font-bold mb-2">Registered Users</h3>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="bg-white/10 p-3 rounded-lg">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
