import React, { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/get_contacts.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUsers(data.data);
        } else {
          console.error("Failed to load users:", data.message);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="text-[#0A1721] bg-white min-h-screen relative p-4">
      <h1 className="text-2xl font-bold text-[#F15124] mb-8">Manage Users</h1>

      {/* ===== Desktop Table View ===== */}
      <div className="hidden md:block overflow-x-auto border border-[#F15124]/30 rounded-lg shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F15124]/20 text-[#F15124]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Country</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Email</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-[#F15124]/20 hover:bg-[#F15124]/5 transition-all duration-200"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.country}</td>
                  <td className="p-3">{user.mobile}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.service}</td>
                  <td className="p-3">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile Card View ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {users.length === 0 ? (
          <p className="text-center text-gray-400 w-full">No users found.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="border border-[#F15124]/20 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-[#F15124]">
                  {user.name}
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Country:</strong> {user.country}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Mobile:</strong> {user.mobile}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Service:</strong> {user.service}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong>{" "}
                {user.created_at
                  ? new Date(user.created_at).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "-"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
