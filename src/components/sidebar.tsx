import React from "react";
import { Home, BookOpen, Users, ArrowLeftRight, DollarSign, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}

export default function Sidebar({ sidebar, setSidebar }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "books", label: "Books", icon: BookOpen, path: "/books" },
    { id: "members", label: "Members", icon: Users, path: "/members" },
    { id: "borrow-return", label: "Borrow/Return", icon: ArrowLeftRight, path: "/borrow-return" },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-20 ${sidebar ? "w-64" : "w-20"}`}>
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        {sidebar && <h1 className="text-xl font-bold text-gray-800">LibraryMS</h1>}
        <button onClick={() => setSidebar(!sidebar)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          {sidebar ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              {sidebar && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
