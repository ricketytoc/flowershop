import {useLoaderData, Link, useSearchParams} from "react-router-dom"
import {getVans} from "../../api"
import flowerIcon from "../assets/flower.svg"
import moneyIcon from "../assets/money.svg"
import beerIcon from "../assets/beer.svg"

export function loader() {
    return getVans()
}

function Flowers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const flowers = useLoaderData()

    const typeFilter = searchParams.get("type")

    const displayedFlowers = typeFilter
        ? flowers.filter(flower => flower.type === typeFilter)
        : flowers

    const flowerElements = displayedFlowers.map(flower => (
        <div key={flower.id} className="flower-tile">
            <Link to={flower.id}>
                <img src={flower.imageUrl}/>
                <div className="flower-info">
                    <h2>{flower.name}</h2>
                    <p>${flower.price}</p>
                </div>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevSearchParams => {
            if (value === null) {
                prevSearchParams.delete(key)
            } else {
                prevSearchParams.set(key, value)
            }
            return prevSearchParams
        })
    }

    return (
        <div className="flower-list-container">
            <div className="flower-list-filter-btns">
                <div>
                    <button
                        onClick={() => handleFilterChange("type", "flower")}
                        className={`flower-type-filter-btn flower ${typeFilter === "flower" ? "selected" : ""}`}
                    >
                        <img src={flowerIcon} alt="Flower filter."/>
                    </button>
                    <h4>Flower</h4>
                </div>
                <div>
                    <button
                        onClick={() => handleFilterChange("type", "money")}
                        className={`flower-type-filter-btn money ${typeFilter === "money" ? "selected" : ""}`}
                    >
                        <img src={moneyIcon} alt="Money bouquet filter."/>
                    </button>
                    <h4>Money</h4>
                </div>
                <div>
                    <button
                        onClick={() => handleFilterChange("type", "beer")}
                        className={`flower-type-filter-btn beer ${typeFilter === "beer" ? "selected" : ""}`}
                    >
                        <img src={beerIcon} alt="Beer bouquet filter."/>
                    </button>
                    <h4>Beer</h4>
                </div>
                {typeFilter
                    ? <button
                        onClick={() => handleFilterChange("type", null)}
                        className="flower-type-filter-clear-btn"
                      >
                        Clear filter
                    </button>
                    : null
                }
            </div>
            <div className="flower-list">
                {flowerElements}
            </div>
        </div>
        
    )
}

export default Flowers