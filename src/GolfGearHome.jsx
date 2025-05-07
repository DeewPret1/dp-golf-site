import React from "react";
import './index.css';

export default function DPGolfHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">DP GOLF</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Gear</a>
          <a href="#" className="hover:text-black">Apparel</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow bg-[url('https://images.unsplash.com/photo-1583947215259-fd6821f8cfb3')] bg-cover bg-center text-center flex flex-col justify-center items-center text-white px-4 py-20">
        <div className="bg-black/60 p-10 rounded-lg">
          <img 
            src="/logo.png" 
            alt="DP GOLF Logo" 
            className="w-24 mx-auto mb-6"
          />
          <h2 className="text-4xl font-bold uppercase tracking-wider">Slaan Die Bal</h2>
          <p className="text-lg mt-4">Premium Golf Gear. Built for Performance.</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 DP Golf. All rights reserved.
      </footer>
    </div>
  );
}
