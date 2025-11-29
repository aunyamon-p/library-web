import React from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import books from "../data/books";

export default function Books({ setModal, search }: any) {
  const filteredBooks = books.filter((b) =>
    (b.title || "").toLowerCase().includes((search || "").toLowerCase()) ||
    (b.author || "").toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Books Management</h2>
        <button
          onClick={() => setModal({ open: true, type: "Add New Book" })}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus size={18} /> Add Book
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">ISBN</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Author</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {filteredBooks.map((book, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-6 py-3">{book.isbn}</td>
                <td className="px-6 py-3">{book.title}</td>
                <td className="px-6 py-3">{book.author}</td>
                <td className="px-6 py-3">{book.category}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      book.status === "available"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex justify-end gap-2">
                  <button
                    onClick={() => setModal({ open: true, type: "Edit Book" })}
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
