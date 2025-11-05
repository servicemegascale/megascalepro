  import React, { useState } from "react";
  import { Settings, User, Bell, Shield, Palette, Globe, Database, Key, Save, X, Building2, Mail, Lock, CheckCircle2 } from "lucide-react";

  const SoftwareCompanySettings = () => {
    const [companyName, setCompanyName] = useState("TechVision Solutions");
    const [companyEmail, setCompanyEmail] = useState("contact@techvision.com");
    const [companyPhone, setCompanyPhone] = useState("+91 98765 43210");
    const [companyAddress, setCompanyAddress] = useState("Surat, Gujarat, India");
    const [adminName, setAdminName] = useState("John Doe");
    const [adminEmail, setAdminEmail] = useState("john@techvision.com");
    const [adminRole, setAdminRole] = useState("Super Admin");
    const [notifications, setNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("english");
    const [autoBackup, setAutoBackup] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [savedMessage, setSavedMessage] = useState(false);

    const handleSave = () => {
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    };

    const handleReset = () => {
      if (window.confirm("Are you sure you want to reset all settings to default?")) {
        setCompanyName("TechVision Solutions");
        setCompanyEmail("contact@techvision.com");
        setCompanyPhone("+91 98765 43210");
        setCompanyAddress("Surat, Gujarat, India");
        setAdminName("John Doe");
        setAdminEmail("john@techvision.com");
        setAdminRole("Super Admin");
        setNotifications(true);
        setEmailNotifications(true);
        setSmsNotifications(false);
        setTwoFactorAuth(false);
        setTheme("light");
        setLanguage("english");
        setAutoBackup(true);
        setMaintenanceMode(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Success Message */}
          {savedMessage && (
            <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 animate-bounce">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-semibold">Settings saved successfully!</span>
            </div>
          )}

          {/* Header */}
          <div className="mb-8 bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-[#F15124] rounded-2xl shadow-lg">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Company Settings</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your software company preferences and configuration</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center gap-2 shadow-md"
                >
                  <X className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#F15124] text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Company Information */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F15124]/20 rounded-xl">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Company Information</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#F15124]" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F15124]" />
                    Company Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    placeholder="company@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#F15124]" />
                    Company Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#F15124]" />
                    Company Address
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    placeholder="Enter address"
                  />
                </div>
              </div>
            </div>

            {/* Admin Account */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F15124]/20 rounded-xl">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Admin Account</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-[#F15124]" />
                    Admin Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Enter admin name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F15124]" />
                    Admin Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#F15124]" />
                    Admin Role
                  </label>
                  <select
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition bg-white"
                    value={adminRole}
                    onChange={(e) => setAdminRole(e.target.value)}
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F15124]/20 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Security Settings</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#F15124]" />
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Key className="w-4 h-4 text-[#F15124]" />
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Key className="w-4 h-4 text-[#F15124]" />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between p-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-100">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-[#F15124]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Extra security layer for your account</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={twoFactorAuth}
                      onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-red-500 peer-checked:to-orange-500 transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F15124]/20 rounded-xl">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-[#F15124]/20 rounded-xl border-2 border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-[#F15124]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Push Notifications</h3>
                      <p className="text-sm text-gray-600">Receive instant alerts in browser</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications}
                      onChange={() => setNotifications(!notifications)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#F15124] peer-checked:to-[#F15124] transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-[#F15124]/20 rounded-xl border-2 border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#F15124]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Get important updates via email</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={() => setEmailNotifications(!emailNotifications)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#F15124] peer-checked:to-[#F15124] transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-[#F15124]/20 rounded-xl border-2 border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-[#F15124]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">SMS Notifications</h3>
                      <p className="text-sm text-gray-600">Receive alerts via text message</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={smsNotifications}
                      onChange={() => setSmsNotifications(!smsNotifications)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#F15124] peer-checked:to-[#F15124] transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* System Preferences */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow xl:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F15124]/20 rounded-xl">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">System Preferences</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#F15124]" />
                    Theme Appearance
                  </label>
                  <select
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  >
                    <option value="light">☀️ Light Mode</option>
                    <option value="dark">🌙 Dark Mode</option>
                    <option value="auto">🔄 Auto (System)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-gray-700 font-medium flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#F15124]" />
                    System Language
                  </label>
                  <select
                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="english">🇬🇧 English</option>
                    <option value="gujarati">🇮🇳 ગુજરાતી (Gujarati)</option>
                    <option value="hindi">🇮🇳 हिंदी (Hindi)</option>
                    <option value="spanish">🇪🇸 Español (Spanish)</option>
                    <option value="french">🇫🇷 Français (French)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-5 bg-[#F15124]/20 rounded-xl border-2 border-[#F15124]/20 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-[#F15124]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Automatic Backup</h3>
                      <p className="text-sm text-gray-600">Daily database backup at 2:00 AM</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={autoBackup}
                      onChange={() => setAutoBackup(!autoBackup)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#F15124] peer-checked:to-[#F15124] transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Maintenance Mode</h3>
                      <p className="text-sm text-gray-600">Enable for system updates</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={maintenanceMode}
                      onChange={() => setMaintenanceMode(!maintenanceMode)}
                      className="sr-only peer"
                    />
                    <div className="w-16 h-9 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#F15124] peer-checked:to-[#F15124] transition-all duration-300 shadow-inner"></div>
                    <div className="absolute left-1 top-1 w-7 h-7 bg-white rounded-full shadow-lg transform peer-checked:translate-x-7 transition-transform duration-300"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-gray-600 text-sm">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="text-gray-500 text-xs mt-1">All changes will take effect immediately after saving</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center gap-2 shadow-md"
                >
                  <X className="w-5 h-5" />
                  Reset All
                </button>
                <button
                  onClick={handleSave}
                  className="bg-[#F15124] text-white px-8 py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Save className="w-5 h-5" />
                  Save All Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SoftwareCompanySettings;