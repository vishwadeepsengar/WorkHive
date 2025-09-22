import { Calendar, CheckCircle, FolderOpen } from "lucide-react";

const ProfileTab = ({ userData }) => (
  <div className="space-y-8">
    {/* Hero Card */}
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 rounded-3xl p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">{userData.name}</h1>
          <p className="text-white/80 text-lg">{userData.role}</p>
          <div className="flex items-center space-x-6 mt-3 text-white/70">
            <span className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" /> 
              <span>Joined {userData.joinedDate}</span>
            </span>
          </div>
        </div>

        {/* Stats on the right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          <StatCard 
            icon={CheckCircle} 
            title="Completed Tasks" 
            value={userData.completedTasks} 
            color="bg-emerald-100 text-emerald-600" 
          />
          <StatCard 
            icon={FolderOpen} 
            title="Active Projects" 
            value={userData.activeProjects} 
            color="bg-blue-100 text-blue-600" 
          />
        </div>
      </div>
    </div>

    {/* Contact */}
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Email</span><span>{userData.email}</span>
        </div>
        <div className="flex justify-between">
          <span>Phone</span><span>{userData.phone}</span>
        </div>
        <div className="flex justify-between">
          <span>Role</span><span>{userData.role}</span>
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{title}</p>
        <p className={`text-2xl font-bold ${color.split(" ")[1]}`}>{value}</p>
      </div>
      <div className={`p-3 ${color} rounded-xl`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
);

export default ProfileTab;
