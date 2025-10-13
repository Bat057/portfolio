import "./filterButtons.css";

function FilterButtons({ current, changeFilter }) {
    const filters = [
      { key: "all", label: "Tous" },
      { key: "front-end", label: "Front-end" },
      { key: "back-end", label: "Back-end" }
    ];
  
    return (
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            className={current === f.key ? "active" : ""}
            onClick={() => changeFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
    );
  }

  export default FilterButtons;
  