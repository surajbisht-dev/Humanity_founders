// Sidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import {
  Settings,
  HelpCircle,
  Users,
  UserPlus,
  FileText,
  LayoutDashboard,
  Megaphone,
  Bot,
  Sliders,
} from "lucide-react";

const navItems = [
  { name: "Platform Setup", icon: Sliders, path: "/businesspage" },
  { name: "AI Agent", icon: Bot, path: "/ai" },
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Campaign", icon: Megaphone, path: "/campaigns" },
  { name: "Promoters", icon: UserPlus, path: "/promoters" },
  { name: "Leads", icon: Users, path: "/leads" },
  { name: "Payouts", icon: FileText, path: "/payouts" },
];

const bottomItems = [
  { name: "Settings", icon: Settings, path: "/settings" },
  { name: "Help", icon: HelpCircle, path: "/help" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#f5f7fa] min-h-screen flex flex-col justify-between border-r">
      <div>
        <nav className="mt-4 space-y-1 px-4">
          {navItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 ${
                  isActive
                    ? "bg-[#eef3ff] text-[#285af6] font-medium border-l-4 border-[#285af6]"
                    : "text-[#285af6] hover:bg-[#e0e7ff] hover:text-[#285af6]"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mb-6 space-y-1 px-4">
        {bottomItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 ${
                isActive
                  ? "bg-[#eef3ff] text-[#285af6] font-medium"
                  : "text-[#285af6] hover:bg-[#e0e7ff] hover:text-[#285af6]"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </NavLink>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.clear(); // Clear any auth/token
            navigate("/login"); // Redirect to login
          }}
          className="flex items-center gap-3 px-3 py-2 w-full text-[#d92d20] hover:text-white hover:bg-[#d92d20] rounded-xl transition-colors duration-200 mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
