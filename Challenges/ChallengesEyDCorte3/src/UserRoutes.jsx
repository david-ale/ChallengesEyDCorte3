import { NavLink, Route, Routes } from "react-router-dom"
import { ProductsPage } from "./ProductsPage"
import { AboutUs } from "./AboutPage"
import { SearchPage } from "./IndexPage"

export const UserRoutes = () => {
    return (
        <>
            <NavLink to='/'>Index</NavLink>
            <NavLink to='about'>About </NavLink>
            <NavLink to='products'>Products</NavLink>
            <NavLink to='search'>Search</NavLink>
            <NavLink to='login'>Login</NavLink>

            <Routes>
                <Route path="products" element={<ProductsPage/>}></Route>
                <Route path="about" element={<AboutUs/>}></Route>
                <Route path="search" element={<SearchPage/>}></Route>
            </Routes>
        </>
    )
}