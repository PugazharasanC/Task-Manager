import axios from "axios";
import { useState } from "react";
import { useTask } from "../Contexts/TaskContext";

const AddTaskForm = () => {
  const { dispatch, setIsLoading } = useTask();
  const [task, setTask] = useState({
    name: "",
    taskname: "",
    status: "Not Started",
    priority: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendNewTask = async (task) => {
      try {
        setIsLoading(true);
        const { data } = await axios.post("", task);
        console.log(data);
        dispatch({
          type: "ADD_TASK",
          payload: data,
        });
        handleCancel();
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    };
    sendNewTask(task);
  };

  const handleCancel = () => {
    setTask({
      name: "",
      taskname: "",
      status: "Not Started",
      priority: "",
    });
  };

  return (
    <div className="m-4 p-4 border-b border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-lg">
      <h1 className="font-semibold text-lg mb-4 dark:text-white">Add Task</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
      >
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded-lg px-3 py-2 text-black dark:text-white bg-white dark:bg-slate-600 border-slate-400 dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/4"
          required
        />
        <input
          type="text"
          name="taskname"
          value={task.taskname}
          onChange={handleChange}
          placeholder="Task Name"
          className="border rounded-lg px-3 py-2 text-black dark:text-white bg-white dark:bg-slate-600 border-slate-400 dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/4"
          required
        />
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 text-black dark:text-white bg-white dark:bg-slate-600 border-slate-400 dark:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/4"
          required
        >
          <option value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={handleCancel}
            className="bg-red-500 text-white rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
