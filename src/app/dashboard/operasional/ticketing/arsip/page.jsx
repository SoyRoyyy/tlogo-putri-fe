'use client';
import React from 'react';
import Sidebar from '/components/Sidebar.jsx';
import UserMenu from '/components/Pengguna.jsx';
import { CircleArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

const ArsipPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const router = useRouter();

    const handleKembali = () => {
        router.push('/dashboard/operasional/ticketing');
    };

    return (
        <div className="flex">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                  
                        <div
                          className="transition-all duration-300 ease-in-out"
                          style={{
                            marginLeft: isSidebarOpen ? 290 : 70,
                          }}
                        ></div>
            <div className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <CircleArrowLeft
                        onClick={handleKembali}
                        className="cursor-pointer"
                        size={28}
                    />
                    <h1 className="text-[32px] font-semibold text-black">Arsip Tiket</h1>
                </div>

                <div className="bg-white shadow rounded-xl p-6">
                    <p className="text-gray-600">Belum ada data arsip tiket.</p>
                    {/* Ganti bagian ini nanti dengan tabel data arsip bila sudah tersedia */}
                </div>
            </div>
        </div>
    );
};

export default ArsipPage;
