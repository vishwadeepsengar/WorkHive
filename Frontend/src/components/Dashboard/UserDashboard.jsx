import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ProfileTab from "./ProfileTab";
import WorkTab from "./WorkTab";
import ProjectsTab from "./ProjectsTab";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Dummy user data
  const userData = {
    name: "Sarah Johnson",
    role: "Product Designer",
    joinedDate: "March 2022",
    completedTasks: 142,
    activeProjects: 5,
    email: "sarah.johnson@example.com",
    phone: "+1 234 567 890",
  };

  // Dummy work/tasks
  const workData = [
    {
      id: 1,
      taskName: "Wireframe new dashboard layout",
      deadline: "2025-10-01",
      priority: "High",
      status: "in_progress",
      dueDate: "2025-10-01",
    },
    {
      id: 2,
      taskName: "User testing feedback report",
      deadline: "2025-09-28",
      priority: "Medium",
      status: "in_review",
      dueDate: "2025-10-01",
    },
    {
      id: 3,
      taskName: "Finalize design system update",
      deadline: "2025-10-10",
      priority: "High",
      status: "completed",
     dueDate: "2025-10-01",
    },
    {
      id: 4,
      taskName: "Prepare presentation slides",
      deadline: "2025-09-30",
      priority: "Low",
      status: "todo",
     dueDate: "2025-10-01",
    },
  ];

  // Dummy projects
  const projectsData = [
    {
      id: 1,
      projectName: "E-commerce Redesign",
      Manager: "Alice Brown",
      dueDate: "2025-11-01",
      status: "planned",
   
      teamMembers: ["Sarah", "John", "Emily"],
    },
    {
      id: 2,
      projectName: "Mobile Banking App",
       Manager: "Alice Brown",
      dueDate: "2025-12-15",
      status: "in_progress",

      teamMembers: ["Michael", "Sophia", "Daniel"],
    },
    {
      id: 3,
      projectName: "Marketing Dashboard",
       Manager: "Alice Brown",
      dueDate: "2025-10-20",
      status: "completed",
   
      teamMembers: ["Olivia", "James", "Sarah"],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab userData={userData} />;
      case "work":
        return <WorkTab workData={workData} />;
      case "projects":
        return <ProjectsTab projectsData={projectsData} />;
      default:
        return <ProfileTab userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 max-w-6xl mx-auto">
        <Header activeTab={activeTab} />
        {renderContent()}
      </main>
    </div>
  );
};

export default UserDashboard;
