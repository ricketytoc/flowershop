import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link} from "react-router-dom"
import Layout from "./components/Layout"
import Flowers, {loader as flowersLoader} from "./pages/Flowers"
import Favourites from "./pages/Favourites"
import Profile from "./pages/Profile"
import FlowerDetail, {loader as flowerDetailLoader} from "./pages/FlowerDetail"
import './App.css'
import "../server"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout/>}>
      <Route 
        index 
        element={<Flowers/>} 
        loader={flowersLoader}
      />
      <Route path="favourites" element={<Favourites/>}/>
      <Route path="profile" element={<Profile/>}/>
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
