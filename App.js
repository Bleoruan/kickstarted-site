import React from "react";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-cream text-slate-900 p-6">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-3">
          <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Flame className="text-red-500 w-8 h-8" />
          </motion.div>
          <h1 className="text-3xl font-bold">
            Kickstart<span className="text-red-600">ED</span>
          </h1>
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#resources" className="hover:underline">Resources</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Ignite Your Classroom</h2>
          <p className="text-xl mb-6">
            KickstartED provides engaging warm-up activities, digital resources, and curriculum tools designed to make every lesson unforgettable.
          </p>
          <button className="text-lg px-6 py-3 rounded-2xl shadow-lg bg-red-500 text-white">
            Explore Resources
          </button>
        </div>
        <div className="shadow-xl rounded-2xl p-6 bg-white">
          <img src="/logo.png" alt="KickstartED Logo" className="w-full h-auto rounded-xl" />
        </div>
      </main>

      <section id="about" className="mt-20">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p className="text-lg max-w-3xl">
          KickstartED is dedicated to helping teachers light a spark in their classrooms. Whether you're looking for warm-up routines, standards-aligned content, or creative lesson ideas, our tools make teaching easy and effective.
        </p>
      </section>

      <section id="resources" className="mt-16">
        <h3 className="text-2xl font-bold mb-4">Featured Resources</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="p-4 border rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-2">Daily Warm-Ups</h4>
            <p>Start each day with activities that get students thinking and talking.</p>
          </li>
          <li className="p-4 border rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-2">Digital Worksheets</h4>
            <p>Interactive and printable options to support any lesson plan.</p>
          </li>
          <li className="p-4 border rounded-xl bg-white">
            <h4 className="text-xl font-semibold mb-2">Video Lessons</h4>
            <p>Short, high-impact videos to support flipped and blended learning.</p>
          </li>
        </ul>
      </section>

      <section id="contact" className="mt-20">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-lg mb-4">Have questions or want to collaborate? We'd love to hear from you.</p>
        <button className="text-lg px-6 py-3 rounded-2xl bg-red-500 text-white">Contact Us</button>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KickstartED. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
