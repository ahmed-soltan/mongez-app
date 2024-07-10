import { publicRoutes } from "../utils/router";
import AboutPage from "./pages/AboutPage";


publicRoutes([
    {
        path: "/about-us/:id",
        component: AboutPage,
    }
])