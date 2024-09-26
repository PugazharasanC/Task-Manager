const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-800 p-4">
      <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center">
          About This Application
        </h1>
        <p className="mb-4">
          This Task Manager application is designed to help you organize and
          manage your tasks effectively.
        </p>
        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-inside mb-4 space-y-1">
          <li>✔ Add, update, and delete tasks with ease.</li>
          <li>✔ Set priorities to manage your workload efficiently.</li>
          <li>
            ✔ Intuitive drag-and-drop interface for task organization (coming
            soon!).
          </li>
          <li>✔ Light and dark themes to suit your personal preference.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
        <ul className="list-inside mb-4 space-y-1">
          <li>🔹 React for a dynamic user experience.</li>
          <li>🔹 Tailwind CSS for responsive and modern design.</li>
          <li>🔹 Context API for state management.</li>
          <li>🔹 Axios for API requests.</li>
        </ul>
        <p>
          Our goal is to provide a simple yet powerful tool for task management.
          We welcome feedback and suggestions for future improvements!
        </p>
      </div>
    </div>
  );
};

export default About;
