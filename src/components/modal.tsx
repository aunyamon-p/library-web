import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  modal: { open: boolean; type: string };
  setModal: (value: { open: boolean; type: string }) => void;
}

export default function Modal({ modal, setModal }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{modal.type}</h3>
          <button onClick={() => setModal({ open: false, type: '' })} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <input type="text" placeholder="Enter details..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="flex gap-3">
            <button onClick={() => setModal({ open: false, type: '' })} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">Cancel</button>
            <button onClick={() => setModal({ open: false, type: '' })} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
