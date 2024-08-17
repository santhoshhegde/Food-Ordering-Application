const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-36 justify-center">
      {Array(30)
        .fill("")
        .map((e, ind) => (
          <div
            className="w-80 h-64 m-3 bg-white animate-pulse shadow-2xl flex flex-col justify-center"
            key={ind}
          >
            <div className="w-72 h-44 bg-gray-500 rounded-2xl m-auto mt-2"></div>
            <div className="w-44 h-7 bg-gray-500 ml-7 mt-1"></div>
            <div className="w-64 h-4 bg-gray-500 ml-7 m-1"></div>
            <div className="w-24 h-4 bg-gray-500 ml-7 m-1"></div>
            <div className="w-11 h-4 bg-gray-500 ml-7 m-1"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
