import { publicRoutes } from "@/apps/front-office/utils/router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

publicRoutes([
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
]);
