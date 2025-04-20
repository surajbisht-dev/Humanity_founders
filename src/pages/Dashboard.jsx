import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar } from "../components/ui/avatar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  PercentCircle,
  Wallet,
  ClipboardList,
  Repeat,
  BarChart3,
  UserX,
  TrendingUp,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const pieData = [
  { name: "Referrals sent", value: 57 },
  { name: "Converted", value: 42 },
];
const pieColors = ["#a5b4fc", "#6366f1"];

const iconMap = [
  {
    icon: <Users className="text-gray-600 group-hover:text-black" />,
    color: "bg-gray-200",
  },
  {
    icon: (
      <PercentCircle className="text-orange-500 group-hover:text-orange-700" />
    ),
    color: "bg-orange-100",
  },
  {
    icon: <Wallet className="text-pink-600 group-hover:text-pink-800" />,
    color: "bg-pink-100",
  },
  {
    icon: <ClipboardList className="text-blue-500 group-hover:text-blue-700" />,
    color: "bg-blue-100",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Promoters",
            value: "1,234",
            note: "+12% vs last month",
            noteClass: "text-green-600",
          },
          {
            label: "Conversion rate",
            value: "23.5%",
            note: "-2.4% vs last month",
            noteClass: "text-red-600",
          },
          {
            label: "Revenue Generated",
            value: "$12,345",
            note: "+8.7% vs last month",
            noteClass: "text-green-600",
          },
          {
            label: "Active Campaigns",
            value: "3",
            note: null,
            noteClass: "",
          },
        ].map((item, index) => (
          <Card key={index} className="h-full group">
            <CardContent className="pt-6 flex items-center space-x-4">
              <div
                className={`p-2 rounded-full ${iconMap[index].color} transition`}
              >
                {iconMap[index].icon}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
                {item.note && (
                  <p className={`text-xs ${item.noteClass}`}>{item.note}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Repeat Referral Rate",
            value: "42%",
            icon: <Repeat />,
            color: "text-green-600",
            bg: "bg-green-100",
          },
          {
            label: "Referral Engagement Rate",
            value: "67%",
            icon: <BarChart3 />,
            color: "text-orange-600",
            bg: "bg-orange-100",
          },
          {
            label: "Churn Rate of Leads",
            value: "28%",
            icon: <UserX />,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
          {
            label: "Upsell Rate of Leads",
            value: "19%",
            icon: <TrendingUp />,
            color: "text-pink-600",
            bg: "bg-pink-100",
          },
        ].map((item, i) => (
          <Card key={i} className="group">
            <CardContent className="pt-6 flex items-center space-x-4">
              <div className={`p-2 rounded-full ${item.bg}`}>
                {React.cloneElement(item.icon, {
                  className: `${item.color} group-hover:scale-110 transition`,
                })}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className={`text-xl font-semibold ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Promoter Performance Over Time</CardTitle>
            <Button variant="outline" className="text-xs">
              Last 6 months
            </Button>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={[
                  { name: "Jan", value: 30 },
                  { name: "Feb", value: 40 },
                  { name: "Mar", value: 38 },
                  { name: "Apr", value: 42 },
                  { name: "May", value: 45 },
                  { name: "Jun", value: 48 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80}>
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Channel</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-orange-100 p-2 rounded">
                <Facebook className="mx-auto text-orange-600" />
                <div className="font-semibold">78%</div>
              </div>
              <div className="bg-pink-100 p-2 rounded">
                <Twitter className="mx-auto text-pink-500" />
                <div className="font-semibold">45%</div>
              </div>
              <div className="bg-blue-100 p-2 rounded">
                <Linkedin className="mx-auto text-blue-600" />
                <div className="font-semibold">23%</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="col-span-2 space-y-2">
              <p>Julian earned $10</p>
              <p>John Doe signed up from your referral link</p>
              <p>You reached 50 referrals milestone!</p>
              <p>You updated your referral campaign</p>
            </div>
            <div className="space-y-2">
              <p>
                28-4-2024
                <br />
                10:30 AM
              </p>
              <p>
                29-4-2024
                <br />
                9:45 AM
              </p>
              <p>
                30-4-2024
                <br />
                8:20 AM
              </p>
              <p>
                31-4-2024
                <br />
                7:00 AM
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard Table View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Rank</th>
                  <th>Promoter Name</th>
                  <th>Conversion Rate</th>
                  <th>Referrals Sent</th>
                  <th>Successful Conversions</th>
                  <th>Revenue Generated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "Emery Dokidis", 150, 80, "60%", "$1,200"],
                  [2, "Kadin Lipshutz", 132, 90, "65%", "$980"],
                  [3, "Randy Culhane", 110, 60, "60%", "$880"],
                  [4, "Jaxson Vaccaro", 100, 85, "75%", "$500"],
                  [5, "Jocelyn Levin", 50, 30, "63%", "$600"],
                  [6, "Maren Septimus", 80, 35, "25%", "$200"],
                  [7, "Haylie Saris", 120, 55, "45%", "$150"],
                  [8, "Randy Herwitz", 110, 90, "65%", "$880"],
                ].map(([rank, name, rate, sent, conversions, revenue]) => (
                  <tr key={rank} className="border-t">
                    <td className="py-2">{rank}</td>
                    <td>{name}</td>
                    <td>{rate}</td>
                    <td>{sent}</td>
                    <td>{conversions}</td>
                    <td>{revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
