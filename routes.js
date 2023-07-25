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
router.get("/about", aboutController.index);

router.get("/profile", accountsController.profile);
router.post("/profile/update/:_id", accountsController.updateUser);
router.get("/profile/delete/:_id", accountsController.deleteUser)
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);
;

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);

router.get("/station/:id", stationController.index);
router.post("/station/:id/addreading", stationController.addReading);
router.get("/station/:id/deletereading/:readingid", stationController.deleteReading);
router.post("/station/:id/editreading/:readingid", stationController.editReading);

router.get("*", catchAllController.index);
