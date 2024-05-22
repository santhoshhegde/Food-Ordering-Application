const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(30)
        .fill("")
        .map((e, ind) => (
          <div className="shimmer-ui" key={ind}></div>
        ))}
    </div>
  );
};

export default Shimmer;
