import { FilterByAvailability } from "./FilterByAvailability";
import { FilterByCustomerRating } from "./FilterByCustomerRating";
import { FilterByCategory } from "./FilterByCategory";
import { FilterByPriceRange } from "./FilterByPriceRange";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useStateContext } from "../../context";
import { BtnComplementary } from "../buttons/BtnComplementary";
import { SortByPrice } from "./SortByPrice";

export function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const {
    state: { filters },
    dispatch,
  } = useStateContext();

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

      <FilterByPriceRange dispatch={dispatch} />

      <FilterByCategory dispatch={dispatch} filters={filters} />

      <FilterByCustomerRating dispatch={dispatch} />

      <SortByPrice dispatch={dispatch} />

      <FilterByAvailability dispatch={dispatch} />
    </aside>
  );
}
