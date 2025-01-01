import RestoCards from "./RestaurentCard";
//import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList1, setResList] = useState([
    {
      id: 123,
      name: "The Spicy Grill",
      cuisines: "Indian, Chinese",
      rating: 4.5,
      time: "30 mins",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
    },
    {
      id: 212,
      name: "Pizza Palace",
      cuisines: "Italian, Pizza",
      rating: 4.2,
      time: "25 mins",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
    },
    {
      id: 321,
      name: "Burger Bliss",
      cuisines: "American, Fast Food",
      rating: 4.0,
      time: "20 mins",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng",
    },
    {
      id: 456,
      name: "Sushi World",
      cuisines: "Japanese, Seafood",
      rating: 4.7,
      time: "35 mins",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList1.filter((res) => res.rating > 4);
            setResList(filteredList); // Properly update state
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList1.map((restaurent) => (
          <RestoCards key={restaurent.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
