import AddTaskForm from "./AddTaskForm";
import TaskList from "./Task/TaskList";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-6 w-full">
      <h2 className="text-2xl font-bold text-center dark:text-white">
        Task Manager
      </h2>
      <div className="w-full max-w-2xl">
        <AddTaskForm />
      </div>
      <div className="w-full max-w-4xl mt-4">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
