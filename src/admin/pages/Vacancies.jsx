import React, { useEffect, useState } from "react";
import { Eye, X } from "lucide-react";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch data from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/get_applications.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setApplications(data.data);
        } else {
          console.error("Failed to load applications:", data.message);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleView = (app) => setSelectedApp(app);
  const closePopup = () => setSelectedApp(null);

  return (
    <div className="text-[#0A1721] bg-white min-h-screen relative p-4">
      <h1 className="text-2xl font-bold text-[#F15124] mb-8">
        Manage Applications
      </h1>

      {/* ===== Desktop Table View ===== */}
      <div className="hidden md:block overflow-x-auto border border-[#F15124]/30 rounded-lg shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F15124]/20 text-[#F15124]">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Field</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-400">
                  No applications found.
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr
                  key={app.id}
                  className="border-t border-[#F15124]/20 hover:bg-[#F15124]/5 transition-all duration-200"
                >
                  <td className="p-3">{app.name}</td>
                  <td className="p-3">{app.email}</td>
                  <td className="p-3">{app.phone}</td>
                  <td className="p-3">{app.field}</td>
                  <td className="p-3">
                    {new Date(app.submitted_at).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="p-3 flex justify-center">
                    <button
                      onClick={() => handleView(app)}
                      className="text-green-500 hover:text-green-600"
                      title="View Application"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ===== Mobile Card View ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {applications.length === 0 ? (
          <p className="text-center text-gray-400 w-full">
            No applications found.
          </p>
        ) : (
          applications.map((app) => (
            <div
              key={app.id}
              className="border border-[#F15124]/20 rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-[#F15124]">
                  {app.name}
                </h2>
                <button
                  onClick={() => handleView(app)}
                  className="text-green-500 hover:text-green-600"
                  title="View Application"
                >
                  <Eye size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {app.email}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Phone:</strong> {app.phone}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Field:</strong> {app.field}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong>{" "}
                {new Date(app.submitted_at).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))
        )}
      </div>

      {/* ===== Popup Modal ===== */}
      {selectedApp && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40"
            onClick={closePopup}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div
              className="relative bg-white border border-[#F15124]/40 rounded-xl p-6 w-full max-w-lg shadow-2xl text-[#0A1721]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-[#F15124] hover:text-[#0A1721]"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-[#F15124] mb-4">
                {selectedApp.name}
              </h2>

              <div className="space-y-2 text-md">
                <p><strong>Email:</strong> {selectedApp.email}</p>
                <p><strong>Phone:</strong> {selectedApp.phone}</p>
                <p><strong>Field:</strong> {selectedApp.field}</p>
                <p>
                  <strong>Date Applied:</strong>{" "}
                  {new Date(selectedApp.submitted_at).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  <strong>CV File:</strong>{" "}
                  <a
                    href={`${API_BASE_URL}/${selectedApp.cv_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F15124] hover:underline"
                  >
                    View / Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Applications;
