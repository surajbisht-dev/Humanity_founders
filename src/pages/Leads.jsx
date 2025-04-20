import { useState } from "react";
import { Eye, MessageCircleReply, Send } from "lucide-react";

const leads = [
  {
    name: "Emery Dokidis",
    email: "emerydoki@gmail.com",
    contact: "+979970174715",
    coupon: "SAVE10NOW",
    status: "Pending",
  },
  {
    name: "Kadin Lipshutz",
    email: "kadinlipshutz@gmail.com",
    contact: "+971501948279",
    coupon: "WELCOME15",
    status: "Pending",
  },
  {
    name: "Randy Culhane",
    email: "randyculhane@gmail.com",
    contact: "+971501598978",
    coupon: "EXCLUSIVE20",
    status: "Pending",
  },
  {
    name: "Jaxson Vaccaro",
    email: "jaxonvaccaro@gmail.com",
    contact: "+971522503635",
    coupon: "GETDEAL25",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    email: "jocelynlevin@gmail.com",
    contact: "+971554315300",
    coupon: "FIRSTORDER10",
    status: "Pending",
  },
  {
    name: "Maren Septimus",
    email: "marenseptimus@gmail.com",
    contact: "+971525620832",
    coupon: "SPECIALSAVE15",
    status: "Completed",
  },
  {
    name: "Haylie Saris",
    email: "hayluesaris@gmail.com",
    contact: "+971503328228",
    coupon: "LIMITED20",
    status: "Completed",
  },
  {
    name: "Randy Herwitz",
    email: "randyherwitz@gmail.com",
    contact: "+971554231522",
    coupon: "TRYUS10",
    status: "Pending",
  },
];

const statusColor = {
  Pending: "bg-orange-100 text-orange-600",
  Completed: "bg-green-100 text-green-600",
};

export default function LeadsTable() {
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📋 Leads Overview</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="🔍 Search leads..."
            className="border rounded-lg px-3 py-2 text-sm w-64 focus:outline-none border-gray-300"
          />
          <select className="border rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none">
            <option>Change Status</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">
            🧪 Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-2xl">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 text-left">Lead Name</th>
              <th className="px-4 py-3 text-left">Email ID</th>
              <th className="px-4 py-3 text-left">Contact No.</th>
              <th className="px-4 py-3 text-left">Coupon Code</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(i)}
                    onChange={() => toggleCheckbox(i)}
                  />
                </td>
                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  {lead.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{lead.email}</td>
                <td className="px-4 py-3 whitespace-nowrap">{lead.contact}</td>
                <td className="px-4 py-3">{lead.coupon}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      statusColor[lead.status]
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-4 items-center">
                  <Eye
                    className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700 hover:scale-110 transition-all duration-200"
                    title="View Profile"
                  />
                  <MessageCircleReply
                    className="w-6 h-6 text-yellow-500 cursor-pointer hover:text-yellow-600 hover:scale-110 transition-all duration-200"
                    title="Send follow-up message"
                  />
                  <Send
                    className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-700 hover:scale-110 transition-all duration-200"
                    title="Share"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
