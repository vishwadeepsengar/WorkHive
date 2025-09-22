import { useState } from "react";
import { Sun, Moon, Search, Bell } from "lucide-react";

const Header = ({ activeTab }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 capitalize">{activeTab}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Manage your {activeTab} efficiently</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-3 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-gray-100"
          />
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-3 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
        </button>

        <button className="p-3 bg-white/80 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default Header;
