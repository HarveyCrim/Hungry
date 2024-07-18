import Cuisine from "../components/Cuisine"
import RestaurantCard from "../components/RestaurantCard"

const SearchPage = () => {
  return (
    <div className = "space-y-4" >
        <Cuisine />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>
  )
}

export default SearchPage