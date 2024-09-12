import { getFavourites } from "../../api"
import { useLoaderData } from "react-router-dom"
import crossIcon from "../assets/cross.svg"
import bagIcon from "../assets/bag.svg"

export function loader() {
    return getFavourites()
}

function Favourites() {
    const favourites = useLoaderData()
    console.log(favourites)

    const favouriteElements = favourites.map(favourite => (
        <div key={favourite._id} className="favourite-tile-container">
            <div className="favourite-tile">
                <img src={favourite.flower.imageUrl} />
                <div className="fav-info">
                    <h2>{favourite.flower.name}</h2>
                    <p>${favourite.flower.price}</p>
                </div>
                <button className="fav-remove-btn">
                    <img src={crossIcon} alt="Remove from favourites button."/>
                </button>
                <button className="fav-add-cart-btn">
                    <img src={bagIcon} alt="Add to cart button."/>
                </button>
            </div>
            <hr/>
        </div>
    ))

    return (
        <div className="favourite-list">
            {favouriteElements}
        </div>
    )
}

export default Favourites