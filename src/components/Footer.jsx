import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            AI<span className="text-blue-500">Vision</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            A premium AI-powered creative platform for generating stunning
            visuals and intelligent digital content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Gallery</li>
            <li className="hover:text-blue-400 transition cursor-pointer">AI Tools</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Pricing</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition text-white">
              F
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition text-white">
              T
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-600 transition text-white">
              I
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition text-white">
              L
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Vision. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
