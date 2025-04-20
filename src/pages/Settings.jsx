import { useState } from "react";
import { Pencil } from "lucide-react";

const tabs = [
  "User Profile",
  "Business Profile",
  "AI Settings",
  "Email & Phone Setup",
  "Subscription & Usage",
];

export default function UserProfileSettings() {
  const [activeTab, setActiveTab] = useState("User Profile");

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600 font-medium"
                  : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Profile Details */}
        <div className="space-y-6 text-sm text-gray-700">
          {/* Profile */}
          <div className="flex items-center justify-between">
            <span>Profile</span>
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <Pencil
                className="w-4 h-4 text-blue-500 cursor-pointer hover:text-purple-600 hover:scale-110 transition-all"
                title="Edit Profile Photo"
              />
            </div>
          </div>

          {/* User Name */}
          <div className="flex items-center justify-between">
            <span>User Name</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-900">Kadin Stanton</span>
              <Pencil
                className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-700 hover:scale-110 transition-all"
                title="Edit Name"
              />
            </div>
          </div>

          {/* User Phone */}
          <div className="flex items-center justify-between">
            <span>User Phone</span>
            <span className="text-gray-900">1234567890</span>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span className="text-gray-900">kadinstanton@gmail.com</span>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between">
            <span>Password</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-900">•••••••</span>
              <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-md text-xs hover:bg-blue-50 transition-all">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="px-5 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-all">
            Delete Account
          </button>
          <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
