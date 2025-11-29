import React from 'react';
import { Search, LogOut, Settings } from 'lucide-react';

interface User {
  username: string;
  name: string;
  email: string;
}

interface TopbarProps {
  sidebar: boolean;
  search: string;
  setSearch: (value: string) => void;
  onLogout: () => void;
  user: User;
}

export default function Topbar({ sidebar, search, setSearch, onLogout, user }: TopbarProps) {
  return (
    <header
      className="fixed top-0 right-0 bg-white border-b border-gray-200 z-10"
      style={{ left: sidebar ? '256px' : '80px' }}
    >
      <div className="flex items-center justify-between px-6 py-4 pl-20">
        <div className="flex-1 relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books, members, transactions..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onLogout}
            className="ml-4 p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
