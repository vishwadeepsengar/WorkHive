import { CheckCircle, Clock, AlertCircle, XCircle } from "lucide-react";

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    case "in_review":
      return <Clock className="w-5 h-5 text-blue-500" />;
    case "todo":
      return <AlertCircle className="w-5 h-5 text-amber-500" />;
        case "in_progress":
      return <Clock className="w-5 h-5 text-amber-500" />;
    default:
      return <XCircle className="w-5 h-5 text-gray-400" />;
  }
};

export const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "text-red-600 bg-red-50 border border-red-200";
    case "medium":
      return "text-amber-600 bg-amber-50 border border-amber-200";
    case "low":
      return "text-emerald-600 bg-emerald-50 border border-emerald-200";
    default:
      return "text-gray-600 bg-gray-50 border border-gray-200";
  }
};
