import { useState } from "react";
import { Eye, PiggyBank, Wallet, Calendar } from "lucide-react";

const summaryStats = [
  {
    label: "Total Points Given",
    value: "12,500",
    icon: (
      <div className="p-2 rounded-full bg-indigo-100">
        <PiggyBank className="w-5 h-5 text-indigo-600" />
      </div>
    ),
  },
  {
    label: "Current Point Balance",
    value: "1,250",
    icon: (
      <div className="p-2 rounded-full bg-orange-100">
        <Wallet className="w-5 h-5 text-orange-600" />
      </div>
    ),
  },
  {
    label: "Last Points Transfer",
    value: "April 9, 2025",
    icon: (
      <div className="p-2 rounded-full bg-pink-100">
        <Calendar className="w-5 h-5 text-pink-600" />
      </div>
    ),
  },
];

const tabs = ["All Payouts", "Disputes", "Payout Settings"];

const payouts = [
  {
    id: "#P-1048",
    name: "Emery Dokidis",
    points: "500 pts",
    date: "28-4-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1047",
    name: "Kadin Lipshutz",
    points: "250 pts",
    date: "27-5-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1046",
    name: "Randy Culhane",
    points: "300 pts",
    date: "29-5-2024",
    reward: "Early Bird Special",
    status: "Disputed",
  },
  {
    id: "#P-1045",
    name: "Jaxson Vaccaro",
    points: "100 pts",
    date: "30-6-2024",
    reward: "Early Bird Special",
    status: "Paid",
  },
  {
    id: "#P-1044",
    name: "Jocelyn Levin",
    points: "200 pts",
    date: "01-7-2024",
    reward: "Summer Referral Program",
    status: "Disputed",
  },
  {
    id: "#P-1043",
    name: "Maren Septimus",
    points: "300 pts",
    date: "03-7-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1042",
    name: "Haylie Saris",
    points: "220 pts",
    date: "05-7-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1041",
    name: "Randy Herwitz",
    points: "400 pts",
    date: "10-7-2024",
    reward: "Spring Boost",
    status: "Disputed",
  },
];

const statusColors = {
  Paid: "bg-green-100 text-green-600",
  Disputed: "bg-orange-100 text-orange-600",
};

export default function PayoutsPage() {
  const [activeTab, setActiveTab] = useState("All Payouts");

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Manage and monitor your payouts
      </h2>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {summaryStats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white border rounded-xl shadow-sm"
          >
            {stat.icon}
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-lg font-medium">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600 font-medium"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto border rounded-md px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
          🧪 Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Payout ID</th>
              <th className="px-4 py-3 text-left">Promoter Name</th>
              <th className="px-4 py-3 text-left">Points</th>
              <th className="px-4 py-3 text-left">Reward Date</th>
              <th className="px-4 py-3 text-left">Reward Earned For</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{payout.id}</td>
                <td className="px-4 py-3">{payout.name}</td>
                <td className="px-4 py-3">{payout.points}</td>
                <td className="px-4 py-3">{payout.date}</td>
                <td className="px-4 py-3">{payout.reward}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      statusColors[payout.status]
                    }`}
                  >
                    {payout.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <Eye
                    className="w-4 h-4 text-blue-500 hover:text-blue-700 hover:scale-110 transition-transform cursor-pointer"
                    title="View Profile"
                  />
                  {payout.status === "Paid" ? (
                    <span className="text-xs text-blue-600 cursor-pointer hover:underline">
                      Request Dispute
                    </span>
                  ) : (
                    <span className="text-xs text-orange-600 cursor-pointer hover:underline">
                      Track Dispute
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
