export function Filter() {
  return (
    <aside className="filter-section mt-1 p-1 mx-1 bg-white">
      <header className="flex justify-between">
        <h5>Filters</h5>
        <button className="btn btn-link">Clear</button>
      </header>

      <section>
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
      </section>

      <section>
        <h6>Categories</h6>

        <ul className="pl-1">
          <li>
            <label className="flex align-center">
              <input type="checkbox" className="mr-1" name="vehicle mats" />
              Vehicle Mats
            </label>
          </li>
          <li>
            <label className="flex align-center">
              <input type="checkbox" className="mr-1" name="tyre and wheel" />
              Tyre and Wheel
            </label>
          </li>
          <li>
            <label className="flex align-center">
              <input type="checkbox" className="mr-1" name="vehicle cleaners" />
              Vehicle Cleaners
            </label>
          </li>
          <li>
            <label className="flex align-center">
              <input type="checkbox" className="mr-1" name="vehicle lights" />
              Vehicle Lights
            </label>
          </li>
        </ul>
      </section>

      <section>
        <h6>Customer Ratings</h6>

        <ul className="pl-1">
          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="customer-rating"
                value="four and above"
                className="mr-1"
              />
              4 <i className="fas fa-star px-sm"></i> & above
            </label>
          </li>

          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="customer-rating"
                value="three and above"
                className="mr-1"
              />
              3 <i className="fas fa-star px-sm"></i> & above
            </label>
          </li>

          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="customer-rating"
                value="two and above"
                className="mr-1"
              />
              2 <i className="fas fa-star px-sm"></i> & above
            </label>
          </li>

          <li>
            <label className="flex align-center">
              <input
                type="radio"
                name="customer-rating"
                value="one and above"
                className="mr-1"
              />
              1 <i className="fas fa-star px-sm"></i> & above
            </label>
          </li>
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
          <input type="checkbox" className="mr-1" name="out of stock" />
          Out of stock
        </label>
      </section>
    </aside>
  );
}
