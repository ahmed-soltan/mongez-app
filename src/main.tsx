import startApplication from "@mongez/react";
import "./main.css";
import "./shared/apps-list";
import "./shared/config";
import router from "@mongez/react-router";
import HomePage from "./apps/front-office/home/pages/HomePage";

router.add({
    path: "/",
    component:HomePage
})
router.add({
    path: "/contact",
    component:HomePage
})

startApplication();
