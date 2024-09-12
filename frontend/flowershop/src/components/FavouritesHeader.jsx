import cartIcon from "../assets/shopping-cart.svg"
function Header() {
    return (
        <div className="header">
            {/* Ensures that the company name is centred */}
            <div></div>
            <h1 className="company-name">Favourites</h1>
            <img src={cartIcon} alt="Shopping Cart Icon" className="header-icon"/>
        </div>
        
    )
}

export default Header