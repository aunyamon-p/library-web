import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';
import Dashboard from './dashboard';
import Books from './books';
import Members from './members';
import BorrowReturn from './borrowReturn';
import Fines from './fines';
import { Routes, Route, Navigate } from 'react-router-dom';
import { users } from '../data/admins';
import Modal from '../components/modal';

interface LayoutProps {
  setLoggedIn: (value: boolean) => void;
  currentUser: typeof users[0]; // user object
}

export default function Layout({ setLoggedIn, currentUser }: LayoutProps) {
  const [sidebar, setSidebar] = useState(true);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState({ open: false, type: "" });


  const handleLogout = () => setLoggedIn(false);


  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="flex-1 flex flex-col">
        <Topbar
          sidebar={sidebar}
          search={search}
          setSearch={setSearch}
          onLogout={handleLogout}
          user={currentUser}
        />
        <main className="pt-20 pb-8 transition-all" style={{ marginLeft: sidebar ? '256px' : '80px' }}>
          <div className="px-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/books" element={<Books search={search} setModal={setModal} />}/>
              <Route path="/members" element={<Members search={search} setModal={setModal} />} />
              <Route path="/borrow-return" element={<BorrowReturn search={search} setModal={setModal}/>} />
              <Route path="/fines" element={<Fines />}/>
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
        {modal.open && (
  <Modal modal={modal} setModal={setModal} />
)}
      </div>
    </div>
  );
}
