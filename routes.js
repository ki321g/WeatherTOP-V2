import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { welcomeController } from "./controllers/welcome-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { catchAllController } from "./controllers/catch-all-controller.js";
//import { handlebarsHelpers } from "./helpers/handlebars-helpers.js";

export const router = express.Router();

router.get("/", welcomeController.index);

router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);


router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/about", aboutController.index);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreading", stationController.addReading);

router.get("*", catchAllController.index);
