import React from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import members from "../data/members";

export default function Members({ setModal, search }: any) {
  const filteredMembers = members.filter(
    (m) =>
      (m.name || "").toLowerCase().includes((search || "").toLowerCase()) ||
      (m.email || "").toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Member Management</h2>
        <button
          onClick={() => setModal({ open: true, type: "Add New Member" })}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus size={18} /> Add Member
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Borrowed</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {filteredMembers.map((m, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-3">{m.name}</td>
                <td className="px-6 py-3">{m.email}</td>
                <td className="px-6 py-3">{m.phone}</td>
                <td className="px-6 py-3">{m.borrowed}</td>
                <td className="px-6 py-3 flex justify-end gap-2">
                  <button
                    onClick={() => setModal({ open: true, type: "Edit Member" })}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Edit size={18} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
