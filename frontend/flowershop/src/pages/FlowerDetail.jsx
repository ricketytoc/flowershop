import { Link, useLocation, useLoaderData} from "react-router-dom"
import { useState } from "react"
import { getVans } from "../../api"
import bookmarkIcon from "../assets/bookmark.svg"

export function loader({ params }) {
    return getVans(params.id)
}

export default function FlowerDetail() {
    const [count, setCount] = useState(1)
    const flower = useLoaderData()

    return (
        <div className="flower-detail-container">
            <img src={flower.imageUrl} alt="Image of flower"/>
            <div className="flower-detail-flex-container-1">
                <div className="flower-name-price">
                    <h2 className="flower-name">{flower.name}</h2>
                    <h1 className="flower-price">${flower.price}</h1>
                </div>
                <div className="counter-container">
                    <button
                        className="add-btn"
                        onClick={() => setCount(prevCount => prevCount + 1)}
                    >
                        +
                    </button>
                    <h3>{count}</h3>
                    <button 
                        className="sub-btn"
                        onClick={() => setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount)}
                    >
                        -
                    </button>
                </div>
            </div>
            
            
            <p className="flower-description">{flower.description}</p>
            <div className="flower-detail-flex-container-2">
                <button className="add-to-favourites-btn">
                    <img src={bookmarkIcon} alt="Add to favourites button" />
                </button>
                <button className="add-to-cart-btn">
                    Add to cart
                </button>
            </div>
        </div>
    )
}