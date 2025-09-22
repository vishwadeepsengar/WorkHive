import { Calendar } from "lucide-react";
import { getStatusIcon, getPriorityColor } from "./Utils.jsx";

const getProgressFromStatus = (status) => {
  switch (status.toLowerCase()) {
    case "todo":
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

const WorkTab = ({ workData }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
    <div className="flex justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Tasks</h2>
      <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-300">
        <span>{workData.filter((t) => t.status === "completed").length} completed</span>
        <span>{workData.filter((t) => t.status === "in_progress").length} in progress</span>
        <span>{workData.filter((t) => t.status === "in_review").length} in review</span>
        <span>{workData.filter((t) => t.status === "todo").length} todo</span>
      </div>
    </div>
    <div className="space-y-4">
      {workData.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </div>
);

const TaskCard = ({ task }) => {
  const progress = getProgressFromStatus(task.status);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-100 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {getStatusIcon(task.status)}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{task.taskName}</h3>
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Due {new Date(task.deadline).toLocaleDateString()}</span>
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(task.priority)}`}
              >
                {task.priority}
              </span>
            </div>
          </div>
        </div>
        <span className="text-sm font-semibold capitalize text-gray-700 dark:text-gray-300">
          {task.status.replace("_", " ")}
        </span>
      </div>
      <div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkTab;
