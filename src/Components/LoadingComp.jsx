const LoadingComp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 md:h-32 md:w-32 border-t-4 border-blue-500 border-b-4"></div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingComp;
