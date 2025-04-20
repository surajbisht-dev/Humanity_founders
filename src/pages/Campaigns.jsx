import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { PlusIcon, Trash2, Eye } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Summer Referral Program",
    startDate: "5/31/2024",
    endDate: "8/30/2024",
    referrals: 245,
    conversion: "32%",
    roi: "287%",
    status: "Active",
    suggestion:
      "Increase reward by 10% to boost conversion rates during peak season",
  },
  {
    id: 2,
    title: "Early Bird Special",
    startDate: "8/20/2024",
    endDate: "9/19/2024",
    referrals: 300,
    conversion: "40%",
    roi: "320%",
    status: "Inactive",
    suggestion:
      "Extend your campaign! Strong engagement suggests higher conversions with more time.",
  },
];

export default function Campaigns() {
  const [selectedTab, setSelectedTab] = useState("past");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Create & Manage Referral Campaigns
      </h2>

      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <TabsList className="bg-muted mb-4 flex space-x-4 p-1 rounded-lg shadow-sm">
          <TabsTrigger
            value="past"
            className="px-4 py-2 rounded-md text-sm font-medium data-[state=active]:bg-white"
          >
            Past Promoters
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="px-4 py-2 rounded-md text-sm font-medium data-[state=active]:bg-white"
          >
            New Promoters
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="px-4 py-2 rounded-md text-sm font-medium data-[state=active]:bg-white"
          >
            New Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab}>
          <div className="flex justify-between items-center mb-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <PlusIcon size={16} />
              Create New Campaign
            </button>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="px-4 py-2 border rounded-lg text-sm w-64"
              />
              <button className="border px-3 py-2 rounded-lg text-sm">
                Filter
              </button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            {campaigns.length} Campaigns •{" "}
            {campaigns.filter((c) => c.status === "Active").length} Active
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white border rounded-xl shadow p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{campaign.title}</h3>
                    <p className="text-sm text-gray-500">
                      {campaign.startDate} - {campaign.endDate}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      campaign.status === "Active"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>

                <div className="flex justify-between text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Referrals</p>
                    <p className="font-medium">{campaign.referrals}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Conversion</p>
                    <p className="font-medium">{campaign.conversion}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ROI</p>
                    <p className="font-medium">{campaign.roi}</p>
                  </div>
                </div>

                <div className="bg-indigo-50 text-sm text-indigo-900 px-4 py-2 rounded-lg flex gap-2 items-start mb-3">
                  <Eye size={16} className="mt-0.5" />
                  <p>{campaign.suggestion}</p>
                </div>

                <div className="flex justify-end gap-4 text-gray-500">
                  <button>
                    <Trash2 size={18} />
                  </button>
                  <button>
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
