import React, { useEffect, useState } from "react";
import { Users, Briefcase, Building2, Activity } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/get_dashboard_data.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStats(data.stats);
          setChartData(data.chartData);
          setRecentActivity(data.recentActivity);
        }
      })
      .catch((err) => console.error("Error fetching dashboard data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-500">Loading dashboard...</div>;
  }

  if (!stats) {
    return <div className="text-center mt-10 text-red-500">Failed to load data.</div>;
  }

  const statItems = [
    {
      title: "Total Applications",
      value: stats.total_applications,
      icon: <Briefcase size={28} />,
    },
    {
      title: "Recent Applicants",
      value: stats.active_applicants,
      icon: <Users size={28} />,
    },
    {
      title: "Departments",
      value: stats.departments,
      icon: <Building2 size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A1721] p-0 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold text-[#F15124]">Admin Dashboard</h1>
        <p className="text-gray-400 mt-2 sm:mt-0">Welcome back, Admin 👋</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {statItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#F15124]/30 rounded-xl p-5 shadow-lg flex items-center justify-between hover:border-[#F15124]/60 transition-all"
          >
            <div>
              <p className="text-gray-400 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold mt-1 text-left">{item.value}</h2>
            </div>
            <div className="text-[#F15124]">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <div className="bg-white border border-[#F15124]/30 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[#F15124] mb-4">
            Applications Over Time
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0A1721",
                  border: "1px solid #F15124",
                  color: "#fff",
                }}
              />
              <Bar dataKey="applications" fill="#F15124" radius={[100, 100, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-[#F15124]/30 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[#F15124] mb-4">Recent Activity</h2>
          <div className="divide-y divide-[#F15124]/20">
            {recentActivity.length > 0 ? (
              recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="py-3 flex justify-between items-start hover:bg-[#F15124]/10 transition-all rounded-lg px-2"
                >
                  <div>
                    <p className="text-left font-semibold text-[#0A1721]">{activity.name}</p>
                    <p className="text-gray-400 text-sm">{activity.action}</p>
                  </div>
                  <p className="text-gray-500 text-xs whitespace-nowrap">{activity.time}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No recent activity.</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-[#F15124]/20 pt-4">
        © {new Date().getFullYear()} Admin Dashboard • Designed with ❤️ in React
      </div>
    </div>
  );
};

export default DashboardHome;
