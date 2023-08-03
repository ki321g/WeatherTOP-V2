import { userStore } from "../models/user-store.js";
import { stationStore } from "../models/station-store.js";

/**
 * This class handles user Accounts
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const accountsController = {
   /**
   * profile() - This method renders the profile
   * Method gets the logged in member and passes
   * the member details to the profile.
   *
   */
  async profile(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);

    if (loggedInUser === undefined) {
      response.redirect("/login");
      return;
    };
    
    let UserLoggedIn = Boolean(request.cookies.weathertop);
    
    const viewData = {
      title: "User Profile",
      user: loggedInUser,
      UserLoggedIn: UserLoggedIn
    };
    console.log("\nRendering: Profile-View");
    response.render("profile-view", viewData);
  },

   /**
   * login() - This method renders the login
   *
   */
  login(request, response) {
    let UserLoggedIn = Boolean(request.cookies.weathertop);
    const viewData = {
      title: "Login to the Service",
      UserLoggedIn: UserLoggedIn
    };
    console.log("\nRendering: Login-View");
    response.render("login-view", viewData);
  },

  /**
   * logout() - This method logs user out by clearing the cookie
   *
   */
  logout(request, response) {
    response.cookie("LoggedInUser", "");
    response.redirect("/");
  },

  /**
   * signup() - This method renders the signup view
   *
   */
  signup(request, response) {
    let UserLoggedIn = Boolean(request.cookies.weathertop);
    const viewData = {
      title: "Login to the Service",
      UserLoggedIn: UserLoggedIn
    };
    console.log("\nRendering: Signup-View");
    response.render("signup-view", viewData);
  },

    /**
   * register() - This method renders the register view.
   * Method checks if the email already exists and
   * that the password length is over 7.
   *
   * If all checks are ok the method redirects to the dashboard
   * If there is an issue the method renders the signup view passing
   * signupFail to it to display the fail reason.
   *
   * The following parameters are passed into the method in the request body:
   * @param firstname New Member First Name
   * @param lastname New Member Last Name
   * @param email New Member eMail
   * @param password New Member Password
   */
  async register(request, response) {
    const user = request.body;
    user.email = user.email.toLowerCase();
    
    const checkUser = await userStore.getUserByEmail(user.email);
    if (!checkUser && user.password.length >= 7) {
      await userStore.addUser(user);
      console.log(`registering ${user.email}`);
      console.log("Member Account Created Successfully!");
      response.cookie("LoggedInUser", user.email);
      response.redirect("/dashboard");
    } else if (user.password.length >= 7) {
      const viewData = {
        signupFail: "Signup failed, Email Already In Use!",
      };
      //console.log(viewData.signupFail); //For Testing
      response.render("signup-view", viewData);
    } else if (user.password.length < 7) {
      const viewData = {
        signupFail: "Signup failed, Password has to be greater than 7 characters!",
      };
      //console.log(viewData.signupFail); //For Testing
      response.render("signup-view", viewData);
    }
  },

   /**
   * authenticate() - Used during login to check User details
   * Method find the member with the email and checks if
   * the password is correct.
   *
   * Redirected to Dashboard if all is OK
   * Render Login with error if there is an issue
   *
   * The following parameters are passed into the method in the request body
   * @param email New Member eMail
   * @param password New Member Password
   */
  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email.toLowerCase());
    const passwordUsed = request.body.password;
    const emailUsed = request.body.email.toLowerCase();

    console.log("Attempting to authenticate with " + emailUsed + ":" + passwordUsed);

    if (user && user.password === passwordUsed) {
      response.cookie("LoggedInUser", user.email);
      console.log("Authentication Successful");
      response.redirect("/dashboard");
    } else if (!user) {
      const viewData = {
        loginFail: "Authentication failed, Email entered is not a current member, please register!",
      };
      //console.log(viewData.loginFail);//For Testing
      response.render("login-view", viewData);
    } else if (user.password !== passwordUsed) {
      const viewData = {
        loginFail: "Authentication failed, Wrong Password!",
      };
      //console.log(viewData.loginFail);//For Testing
      response.render("login-view", viewData);
    } else {
      const viewData = {
        loginFail: "Authentication failed, please try again!",
      };
      //console.log(viewData.loginFail);//For Testing
      response.render("login-view", viewData);
    }
  },

  /**
   * getLoggedInUser() - This method gets the logged in member
   *
   * The following parameters are passed into the method in the request body
   * @return logged in member
   */
  async getLoggedInUser(request) {
    const userEmail = request.cookies.LoggedInUser;    
    return await userStore.getUserByEmail(userEmail);
  },

  /**
   * updateUser() -
   * Method updates the member and renders profile.
   * passes the member and update success message back to
   * the profile. page
   *
   * The following parameters are passed into the method in the request body
   * @param firstname New Member First Name
   * @param lastname New Member Last Name
   * @param email New Member eMail
   * @param password New Member Password
   */
  async updateUser(request, response) {
    //const loggedInUser = await accountsController.getLoggedInUser(request.body.email);
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const updateUser = {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      password: request.body.password,
    };

    await userStore.updateUser(loggedInUser._id, updateUser);
    response.redirect("/profile");
  },

   /**
   * deleteUser() -
   * Method deletes the member and all associated
   * Station and Readings.
   *
   */
  async deleteUser(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    
    const stationsToDelete = {
      stations: await stationStore.getStationByUserId(loggedInUser._id),
    };
    for (const station of stationsToDelete.stations) {
      await stationStore.deleteStationById(station._id);
    };

    await userStore.deleteUserById(loggedInUser._id);

    response.cookie("LoggedInUser", "");
    response.redirect("/");
  },
};
