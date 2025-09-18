import React, { useState } from "react";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex flex-col items-center justify-center w-1/4 gap-20 p-6 bg-yellow-50 h-screen">
        <button className="w-4/5 py-6 text-xl font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700">
          Hitung KPR
        </button>
        <button className="w-4/5 py-6 text-xl font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700">
          Simulasi KPR
        </button>
      </aside>

      <div className="md:hidden flex items-center gap-2 p-4 bg-yellow-50">
        <h2 className="text-xl font-bold text-green-700">Menu</h2>
        <img
          src={MenuIcon}
          alt="menu"
          width="25"
          height="25"
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-yellow-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-20 p-6 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4">
          <img
            src={CloseIcon}
            alt="close"
            width="30"
            height="30"
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <button className="w-4/5 py-6 text-xl font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700">
          Hitung KPR
        </button>
        <button className="w-4/5 py-6 text-xl font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700">
          Simulasi KPR
        </button>
      </div>
    </>
  );
}
