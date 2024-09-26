// Task.js
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { PropTypes } from "prop-types";
import { useTask } from "../../Contexts/TaskContext";

const Task = ({ task, status }) => {
  const { dispatch, setIsLoading } = useTask();

  const handleDoubleClick = async () => {
    try {
      setIsLoading(true);
      if (status !== "Done") {
        const { data } = await axios.put(task.id, {
          ...task,
          status: ["Not Started", "Ongoing", "Done"][
            (["Not Started", "Ongoing", "Done"].indexOf(status) + 1) % 3
          ],
        });
        dispatch({ type: "UPDATE_TASK", payload: data });
      }
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (status === "Done") {
        const { data } = await axios.delete(task.id);
        dispatch({ type: "DELETE_TASK", payload: data });
      }
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li className="flex justify-between items-center hover:shadow-md transition-shadow duration-200 rounded-lg p-2 bg-white dark:bg-gray-600">
      <div
        onDoubleClick={handleDoubleClick}
        className={`flex flex-col ${
          status !== "Done" ? "cursor-pointer" : ""
        } w-full`}
      >
        <span className="text-gray-900 dark:text-gray-200 font-semibold">
          {task.taskname}
        </span>
        <span className="text-gray-600 dark:text-gray-400">- {task.name}</span>
      </div>
      {status === "Done" ? (
        <span
          className="cursor-pointer text-red-500 text-3xl"
          onClick={handleDelete}
        >
          <MdDeleteForever />
        </span>
      ) : (
        <span className="text-gray-600 dark:text-gray-300">
          {task.priority}
        </span>
      )}
    </li>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};
