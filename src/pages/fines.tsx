import React from "react";
import { DollarSign } from "lucide-react";
import fines from "../data/fines";

export default function Fines({ setModal, search }: any) {
  const filteredFines = fines.filter(
    (f) =>
      f.memberName?.toLowerCase().includes(search?.toLowerCase() || "") ||
      f.bookTitle.toLowerCase().includes(search.toLowerCase() ||"")
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Fine Management</h2>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Member</th>
              <th className="px-6 py-3">Book</th>
              <th className="px-6 py-3">Days Overdue</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {filteredFines.map((fine, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-3">{fine.memberName}</td>
                <td className="px-6 py-3">{fine.bookTitle}</td>
                <td className="px-6 py-3">{fine.daysOverdue}</td>
                <td className="px-6 py-3 font-semibold text-red-500">${fine.amount}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      fine.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {fine.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex justify-end">
                  {fine.status === "Unpaid" && (
                    <button
                      onClick={() => setModal({ open: true, type: "Record Payment" })}
                      className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700"
                    >
                      <DollarSign size={16} /> Pay
                    </button>
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
