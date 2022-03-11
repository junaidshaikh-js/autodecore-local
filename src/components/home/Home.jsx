import { Link } from "react-router-dom";
import Banner from "../assets/banner.png";

import { Category } from "./Category.jsx";
import { carCleaningEquipments, featuredCategories } from "./data";

import "./home.css";

export function Home() {
  return (
    <main>
      <Link to="/products">
        <figure className="bg-white p-sm my-1">
          <img src={Banner} alt="banner" />
        </figure>
      </Link>
      <Category name="Featured Categories" sources={featuredCategories} />

      <Category
        name="Car Cleaning Equipments"
        sources={carCleaningEquipments}
      />
    </main>
  );
}
