import { useState } from "react";
import { Input } from "../components/ui_p/Input";
import { Button } from "../components/ui_p/Button";
import { Eye, Send, MessageCircleReply } from "lucide-react";
import { Checkbox } from "../components/ui_p/CheckBox";

const statusColor = {
  Active: "bg-blue-100 text-blue-700",
  Inactive: "bg-orange-100 text-orange-700",
  Completed: "bg-green-100 text-green-700",
};

export default function PromoterTable({ data }) {
  const [selected, setSelected] = useState([]);

  const toggleCheckbox = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          🎯 Promoter Performance Dashboard
        </h2>
        <div className="flex items-center gap-3">
          <Input
            placeholder="🔍 Search promoters..."
            className="w-64 rounded-lg border-gray-300"
          />
          <Button variant="outline">🎛️ Filter</Button>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-2xl">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">
                <Checkbox />
              </th>
              <th className="px-4 py-3 text-left">Promoter Name</th>
              <th className="px-4 py-3 text-left">Contact No.</th>
              <th className="px-4 py-3 text-left">Leads</th>
              <th className="px-4 py-3 text-left">Conversion Rate</th>
              <th className="px-4 py-3 text-left">Last Follow-Up</th>
              <th className="px-4 py-3 text-left">Revenue</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((p, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="px-4 py-3">
                  <Checkbox
                    checked={selected.includes(i)}
                    onCheckedChange={() => toggleCheckbox(i)}
                  />
                </td>
                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  {p.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{p.contact}</td>
                <td className="px-4 py-3 text-center">{p.leads}</td>
                <td className="px-4 py-3 text-center">{p.rate}</td>
                <td className="px-4 py-3">{p.followUp}</td>
                <td className="px-4 py-3 font-medium text-green-600">
                  {p.revenue}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      statusColor[p.status]
                    }`}
                  >
                    {p.status}
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
