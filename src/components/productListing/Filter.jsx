import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { BtnComplementary } from "../buttons/BtnComplementary";

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

const ratingFilters = [
  "four and above",
  "three and above",
  "two and above",
  "one and above",
];

export function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function toggleFilter() {
    setIsFilterOpen((f) => !f);
  }

  useEffect(() => {
    isFilterOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "inherit");
  }, [isFilterOpen]);

  return (
    <aside
      className={
        "filter-section mt-1 p-sm mx-1 bg-white " +
        (isFilterOpen ? " open-filter" : null)
      }
    >
      <div>
        <div className="flex justify-center">
          <div onClick={toggleFilter} className="mobile-filter">
            {isFilterOpen ? (
              <BtnComplementary>Apply</BtnComplementary>
            ) : (
              <button className="btn btn-primary m-auto">
                <FaFilter fontSize="1.2rem" /> Filters
              </button>
            )}
          </div>
          {isFilterOpen && <button className="btn btn-link">Clear</button>}
        </div>

        <div className="desktop-filter">
          <span className="txt-rg txt-bold">Filters</span>

          <button className="btn btn-link">{"Clear"}</button>
        </div>
      </div>

      <section className="mb-2">
        <h6>Price</h6>
        <input
          type="range"
          className="w-100"
          min="100"
          max="1000"
          step="100"
          list="tickmarks"
        />

        <datalist id="tickmarks">
          <option value="100" label="100"></option>
          <option value="200" label="200"></option>
          <option value="300" label="300"></option>
          <option value="400" label="400"></option>
          <option value="500" label="500"></option>
          <option value="600" label="600"></option>
          <option value="700" label="700"></option>
          <option value="800" label="800"></option>
          <option value="900" label="900"></option>
          <option value="1000" label="1000"></option>
        </datalist>

        <div className="flex justify-between">
          <span>0</span>
          <span>500</span>
          <span>1000</span>
        </div>
      </section>

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
                    aria-label={category}
                  />
                  {category}
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h6>Customer Ratings</h6>

        <ul className="pl-1">
          {ratingFilters.map((ratingFilter, index) => {
            return (
              <li key={ratingFilter}>
                <label className="flex align-center">
                  <input
                    type="radio"
                    name="customer-rating"
                    value={ratingFilter}
                    className="mr-1"
                  />
                  {ratingFilters.length - index}{" "}
                  <i className="fas fa-star px-sm" title="star"></i> & above
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h6>Sort</h6>

        <ul className="pl-1">
          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="sort"
                value="low to high"
                className="mr-1"
              />
              Price Low to High
            </label>
          </li>

          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="sort"
                value="high to low"
                className="mr-1"
              />
              Price High to Low
            </label>
          </li>
        </ul>
      </section>

      <section>
        <h6>Availability</h6>
        <label className="flex align-center pl-1">
          <input
            type="checkbox"
            className="mr-1"
            name="out of stock"
            aria-label="Out of Stock"
          />
          Out of stock
        </label>
      </section>
    </aside>
  );
}
