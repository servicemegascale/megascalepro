import React, { useEffect, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/get_messages.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setMessages(data.data);
        } else {
          console.error("Failed to fetch messages:", data.message);
        }
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#0A1721] p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
        <h1 className="text-2xl font-bold text-[#F15124]">User Messages</h1>
        <div className="flex items-center gap-2 text-[#F15124] mt-2 md:mt-0">
          <Mail className="w-5 h-5" />
          <span className="font-medium">{messages.length} Messages</span>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-400">No messages found.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#F15124]/20 shadow-md">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#F15124]/20 text-[#F15124] uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-5 py-3">#</th>
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Mobile</th>
                  <th className="px-5 py-3">Message</th>
                  <th className="px-5 py-3 text-right">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F15124]/10 bg-white">
                {messages.map((msg, i) => (
                  <tr
                    key={msg.id}
                    className="hover:bg-[#F15124]/5 transition-all duration-200"
                  >
                    <td className="p-3 text-gray-600 font-medium">{i + 1}</td>
                    <td className="p-3 font-semibold text-[#0A1721]">
                      {msg.first_name} {msg.last_name}
                    </td>
                    <td className="p-3 text-gray-600">{msg.email}</td>
                    <td className="p-3 text-gray-600">{msg.mobile}</td>
                    <td className="p-3 text-gray-700 max-w-[300px] truncate">
                      {msg.description}
                    </td>
                    <td className="p-3 text-gray-500 text-right">
                      {new Date(msg.submitted_at).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {messages.map((msg, i) => (
              <div
                key={msg.id}
                className="border border-[#F15124]/20 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-[#F15124]">
                    {msg.first_name} {msg.last_name}
                  </h2>
                  <span className="text-xs text-gray-500">
                    #{i + 1}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {msg.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Mobile:</strong> {msg.mobile}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Message:</strong> {msg.description}
                </p>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  {new Date(msg.submitted_at).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#F15124]">
              {messages.length}
            </span>{" "}
            total messages
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
