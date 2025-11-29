import React from "react";
import { CheckCircle2, RefreshCw } from "lucide-react";
import borrowList from "../data/borrowReturn";

export default function BorrowReturn({ setModal, search }: any) {
  const filteredData = borrowList.filter(
    (b) =>
      (b.bookTitle || "").toLowerCase().includes((search || "").toLowerCase()) ||
      (b.memberName || "").toLowerCase().includes((search|| "").toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Borrow & Return Management</h2>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Book</th>
              <th className="px-6 py-3">Member</th>
              <th className="px-6 py-3">Borrow Date</th>
              <th className="px-6 py-3">Due Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {filteredData.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-3">{item.bookTitle}</td>
                <td className="px-6 py-3">{item.memberName}</td>
                <td className="px-6 py-3">{item.borrowDate}</td>
                <td className="px-6 py-3">{item.dueDate}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.status === "Returned"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex justify-end gap-2">
                  {item.status === "Borrowed" ? (
                    <button
                      onClick={() => setModal({ open: true, type: "Mark Returned" })}
                      className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700"
                    >
                      <CheckCircle2 size={16} /> Return
                    </button>
                  ) : (
                    <button
                      onClick={() => setModal({ open: true, type: "Re-Borrow" })}
                      className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200"
                    >
                      <RefreshCw size={16} /> Borrow Again
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
