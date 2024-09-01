import {useLoaderData, Link} from "react-router-dom"
import {getVans} from "../../api"

export function loader() {
    return getVans()
}

function Flowers() {
    const flowers = useLoaderData()
    const flowerElements = flowers.map(flower => (
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
    return (
        <div className="flower-list">
            {flowerElements}
        </div>
    )
}

export default Flowers