import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link} from "react-router-dom"
import Layout from "./components/Layout"
import FavouritesLayout from "./components/FavouritesLayout"
import Flowers, {loader as flowersLoader} from "./pages/Flowers"
import Favourites, {loader as favouritesLoader} from "./pages/Favourites"
import Profile from "./pages/Profile"
import FlowerDetail, {loader as flowerDetailLoader} from "./pages/FlowerDetail"
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout/>}>
      <Route 
        index 
        element={<Flowers/>} 
        loader={flowersLoader}
      />
      <Route path="profile" element={<Profile/>}/>
    </Route>
    <Route path="/favourites" element={<FavouritesLayout/>}>
      <Route
        index
        element={<Favourites/>}
        loader={favouritesLoader}
      />
    </Route>
    <Route
      path="/:id"
      element={<FlowerDetail/>}
      loader={flowerDetailLoader}
    />
  </>
  
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
