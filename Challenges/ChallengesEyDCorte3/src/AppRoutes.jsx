import { Link,Navigate,NavLink,Route,Routes} from "react-router-dom";
import { AboutUs } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { UserRoutes } from "./UserRoutes";

export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="login" element={<LoginPage/>}></Route>
                <Route path="/*" element={<PrivateRoutes><UserRoutes/></PrivateRoutes>}></Route>
            </Routes>
        </>
    )
}