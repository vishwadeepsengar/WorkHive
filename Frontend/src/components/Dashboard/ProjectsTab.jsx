import { Users } from "lucide-react";

const getProgressFromStatus = (status) => {
  switch (status.toLowerCase()) {
    case "planned":
      return 0;
    case "in_progress":
      return 50;
    case "in_review":
      return 75;
    case "completed":
      return 100;
    default:
      return 0;
  }
};

const ProjectsTab = ({ projectsData }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
    <div className="flex justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Active Projects</h2>
      <span className="text-gray-700 dark:text-gray-300">{projectsData.length} projects</span>
    </div>
    <div className="grid gap-6">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const progress = getProgressFromStatus(project.status);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{project.projectName}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Due: {project.dueDate}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manager: {project.Manager}</p>
        </div>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{project.status}</span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <Users className="w-4 h-4" />
          <span className="text-sm">Team</span>
        </div>
        <div className="flex -space-x-2">
          {project.teamMembers.map((m, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"
            >
              {m[0]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
