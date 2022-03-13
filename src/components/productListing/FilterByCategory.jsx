export function FilterByCategory({ dispatch, filters }) {
  const categories = [
    "Vehicle Mats",
    "Tyre and Wheel",
    "Vehicle Cleaners",
    "Vehicle Lights",
    "Car Covers",
    "Glass Cleaner",
    "Pressure Washer",
    "Air Purifiers",
    "Vacuum Cleaner",
  ];

  return (
    <section>
      <h6>Categories</h6>

      <ul className="pl-1">
        {categories.map((category) => {
          return (
            <li key={category}>
              <label className="flex align-center">
                <input
                  type="checkbox"
                  className="mr-1"
                  name={category.toLowerCase()}
                  value={category.toLocaleLowerCase()}
                  aria-label={category}
                  onChange={(e) => {
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: {
                        isChecked: e.target.checked,
                        value: e.target.value,
                      },
                    });
                  }}
                  checked={filters.categories.includes(category.toLowerCase())}
                />
                {category}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
