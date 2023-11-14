import { NavLink, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr/>

            <NavLink to="products/3">Product By ID</NavLink>
            <Routes>
                
                <Route path="products">
                    <Route path="id" element={<ProductsPage/>}/>
                </Route>
            </Routes>
        </>
    )
}