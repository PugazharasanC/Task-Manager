import TaskColumn from "./TaskColumn"; // Import the TaskColumn component
import { useTask } from "../../Contexts/TaskContext";

const TaskList = () => {
  const { tasks } = useTask();
  const statuses = ["Not Started", "Ongoing", "Done"];

  return (
    <div className="flex flex-col  gap-4 m-3 p-3 w-full">
      <div className="flex flex-row w-full flex-wrap lg:flex-nowrap">
        {statuses.map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)} // Filter tasks by status
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
