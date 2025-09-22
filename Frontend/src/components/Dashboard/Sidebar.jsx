import { useState } from "react";
import { User, Briefcase, FolderOpen, LogOut, Sun, Moon } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: "profile", icon: User },
    { id: "work", icon: Briefcase },
    { id: "projects", icon: FolderOpen },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="w-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl min-h-screen border-r border-gray-200 dark:border-gray-700 relative flex flex-col items-center">
      
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 w-full flex justify-center">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col items-center space-y-4 w-full">
        {navItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 group ${
              activeTab === id
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-600"
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-auto mb-4">
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 flex items-center justify-center rounded-2xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Logout */}
      <div className="mb-8">
        <button className="w-12 h-12 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

