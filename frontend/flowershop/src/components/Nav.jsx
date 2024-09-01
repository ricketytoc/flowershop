import { NavLink } from "react-router-dom"
import bookmarkFilledIcon from "../assets/bookmark-filled.svg"
import bookmarkIcon from "../assets/bookmark.svg"
import homeFilledIcon from "../assets/home-filled.svg"
import homeIcon from "../assets/home.svg"
import userFilledIcon from "../assets/user-filled.svg"
import userIcon from "../assets/user.svg"

function Nav() {
    
    function getIconSrc(unfilled, filled, isActive) {
        return isActive ? filled : unfilled
    }

    return(
        <div className="nav">
            <NavLink
                to="/"
            >
                {({isActive}) => 
                    <img 
                        src={getIconSrc(homeIcon, homeFilledIcon, isActive)} 
                        alt="Home Icon" 
                        className="nav-icon"
                    />
                }
            </NavLink>
            <NavLink
                to="favourites"
            >
                {({isActive}) => 
                    <img 
                        src={getIconSrc(bookmarkIcon, bookmarkFilledIcon, isActive)} 
                        alt="Bookmark Icon" 
                        className="nav-icon"
                    />
                }
            </NavLink>
            <NavLink
                to="profile"
            >
                {({isActive}) => 
                    <img 
                        src={getIconSrc(userIcon, userFilledIcon, isActive)} 
                        alt="User Icon" 
                        className="nav-icon"
                    />
                }
            </NavLink>         
        </div>
    )
}

export default Nav