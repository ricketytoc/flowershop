import { Outlet } from "react-router-dom"
import Header from "./Header"
import Nav from "./Nav"

function Layout() {
    return(
        <div>
            <Header/>
            <Outlet/>
            <Nav/>
        </div>
    )
}

export default Layout