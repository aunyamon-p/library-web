// src/data/dashboardData.ts
import { Users, BookOpen, Clock, AlertCircle, DollarSign } from "lucide-react";

export const summaryCards = [
  { title: "Total Members", value: 124, icon: Users, color: "bg-indigo-100 text-indigo-600" },
  { title: "Total Books", value: 530, icon: BookOpen, color: "bg-green-100 text-green-600" },
  { title: "Borrowed Books", value: 142, icon: Clock, color: "bg-yellow-100 text-yellow-600" },
  { title: "Overdue Books", value: 12, icon: AlertCircle, color: "bg-red-100 text-red-600" },
  { title: "Total Fines", value: "$256", icon: DollarSign, color: "bg-purple-100 text-purple-600" },
];

export const borrowReturnData = [
  { month: "Jan", borrowed: 40, returned: 35 },
  { month: "Feb", borrowed: 45, returned: 38 },
  { month: "Mar", borrowed: 50, returned: 42 },
  { month: "Apr", borrowed: 48, returned: 45 },
  { month: "May", borrowed: 60, returned: 50 },
];

export const categoryData = [
  { name: "Fiction", value: 120, color: "#6366f1" },
  { name: "Science", value: 90, color: "#8b5cf6" },
  { name: "History", value: 75, color: "#10b981" },
  { name: "Kids", value: 60, color: "#f59e0b" },
];

export const memberGrowthData = [
  { month: "Jan", members: 100 },
  { month: "Feb", members: 120 },
  { month: "Mar", members: 145 },
  { month: "Apr", members: 160 },
  { month: "May", members: 180 },
];
