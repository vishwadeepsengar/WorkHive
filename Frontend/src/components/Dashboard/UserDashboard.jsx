import React, { useState } from 'react';
import { User, Briefcase, FolderOpen, Calendar, Clock, Users, CheckCircle, AlertCircle, XCircle, Bell, Search, Settings, LogOut, Award, TrendingUp } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Dummy data
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 123-4567",
    role: "Senior Frontend Developer",
    joinedDate: "March 15, 2022",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    completedTasks: 127,
    activeProjects: 8,
    teamRank: "#3"
  };

  const workData = [
    {
      id: 1,
      taskName: "Implement user authentication system",
      status: "In Progress",
      deadline: "2025-09-25",
      priority: "High",
      progress: 65
    },
    {
      id: 2,
      taskName: "Design system documentation",
      status: "Completed",
      deadline: "2025-09-20",
      priority: "Medium",
      progress: 100
    },
    {
      id: 3,
      taskName: "Mobile app performance optimization",
      status: "Pending",
      deadline: "2025-09-30",
      priority: "High",
      progress: 0
    },
    {
      id: 4,
      taskName: "API integration testing",
      status: "In Progress",
      deadline: "2025-09-28",
      priority: "Low",
      progress: 30
    }
  ];

  const projectsData = [
    {
      id: 1,
      projectName: "E-commerce Platform",
      progress: 75,
      teamMembers: ["John D.", "Mike R.", "Lisa K.", "Anna M."],
      status: "Active",
      dueDate: "Oct 15, 2025",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      projectName: "Mobile Banking App",
      progress: 45,
      teamMembers: ["Sarah J.", "Tom W."],
      status: "Active",
      dueDate: "Nov 20, 2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      projectName: "CRM Dashboard",
      progress: 90,
      teamMembers: ["Anna M.", "Chris B.", "David L.", "Emma S."],
      status: "Near Completion",
      dueDate: "Sep 25, 2025",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'in progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-amber-500" />;
      default:
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-50 border border-red-200';
      case 'medium':
        return 'text-amber-600 bg-amber-50 border border-amber-200';
      case 'low':
        return 'text-emerald-600 bg-emerald-50 border border-emerald-200';
      default:
        return 'text-gray-600 bg-gray-50 border border-gray-200';
    }
  };

  const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen }
  ];

  const renderProfile = () => (
    <div className="space-y-8">
      {/* Hero Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white/20 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            <p className="text-white/80 text-lg font-medium mb-4">{userData.role}</p>
            <div className="flex items-center space-x-6 text-white/70">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Joined {userData.joinedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Team Rank {userData.teamRank}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Completed Tasks</p>
              <p className="text-2xl font-bold text-gray-900">{userData.completedTasks}</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{userData.activeProjects}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-xl">
              <FolderOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Performance</p>
              <p className="text-2xl font-bold text-gray-900">Excellent</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-4">
          {[
            { label: 'Email', value: userData.email },
            { label: 'Phone', value: userData.phone },
            { label: 'Role', value: userData.role }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200/50 last:border-b-0">
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="text-gray-900 font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWork = () => (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Tasks</h2>
          <div className="flex space-x-2">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{workData.filter(t => t.status === 'Completed').length}</span> completed
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">{workData.filter(t => t.status === 'In Progress').length}</span> in progress
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {workData.map((task) => (
            <div key={task.id} className="group bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="mt-1">
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">{task.taskName}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-gray-900">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ml-4 ${
                  task.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                  task.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                  'bg-gray-100 text-gray-800 border border-gray-200'
                }`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Active Projects</h2>
          <div className="text-sm text-gray-600">
            <span className="font-medium">{projectsData.length}</span> projects
          </div>
        </div>
        
        <div className="grid gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="group bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/70 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">{project.projectName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Due: {project.dueDate}</p>
                </div>
                
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === 'Active' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                  project.status === 'Near Completion' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                  'bg-gray-100 text-gray-800 border border-gray-200'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Progress Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Progress</span>
                  <span className="text-xl font-bold text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 bg-gradient-to-r ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 font-medium">Team</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    {project.teamMembers.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold border-2 border-white"
                      >
                        {member.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                  </div>
                  {project.teamMembers.length > 3 && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-semibold border-2 border-white">
                      +{project.teamMembers.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfile();
      case 'work':
        return renderWork();
      case 'projects':
        return renderProjects();
      default:
        return renderProfile();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white/80 backdrop-blur-xl shadow-2xl min-h-screen border-r border-white/20">
          <div className="p-8 border-b border-gray-200/50">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back!</p>
              </div>
            </div>
          </div>
          
          <nav className="mt-8 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 text-left rounded-2xl transition-all duration-300 mb-2 group ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gray-100/50 hover:text-indigo-600'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    activeTab === item.id ? 'text-white' : ''
                  }`} />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-4 px-6 py-3 text-gray-700 hover:bg-gray-100/50 rounded-2xl transition-all duration-300">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </button>
              <button className="w-full flex items-center space-x-4 px-6 py-3 text-gray-700 hover:bg-gray-100/50 rounded-2xl transition-all duration-300">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 capitalize">{activeTab}</h2>
                <p className="text-gray-600 mt-1">Manage your {activeTab} efficiently</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button className="p-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/70 transition-all duration-300">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;