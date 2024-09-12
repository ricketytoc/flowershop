import { Outlet } from "react-router-dom"
import FavouritesHeader from "./FavouritesHeader"
import Nav from "./Nav"

function FavouritesLayout() {
    return(
        <div>
            <FavouritesHeader/>
            <Outlet/>
            <Nav/>
        </div>
    )
}

export default FavouritesLayout