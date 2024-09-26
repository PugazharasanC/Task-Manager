import Task from "./Task";
import { PropTypes } from "prop-types";

const TaskColumn = ({ status, tasks }) => {
  return (
    <div className="flex-1 border rounded-lg shadow-sm mx-2 p-4 w-full bg-white dark:bg-gray-700">
      <h2 className="text-xl font-bold border-b-2 mb-4 text-center text-gray-900 dark:text-gray-200">
        {status}
      </h2>
      <ul className="flex flex-col gap-2 w-full">
        {tasks.map((task) => (
          <Task key={task.id} task={task} status={status} />
        ))}
      </ul>
    </div>
  );
};

export default TaskColumn;

TaskColumn.propTypes = {
  status: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      taskname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
