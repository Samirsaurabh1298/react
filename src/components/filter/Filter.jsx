import "../filter/filter.css";

const Filter = ({ onTopRatedFilter }) => {
  return (
    <div className="filter-buttons">
      <button className="filter-btn" onClick={onTopRatedFilter}>
        Top Rated Restaurant
      </button>
    </div>
  );
};

export default Filter;