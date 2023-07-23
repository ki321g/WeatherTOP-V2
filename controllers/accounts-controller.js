import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("LoggedInUser", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;

    const checkUser = await userStore.getUserByEmail(user.email);
    if (!checkUser && user.password.length >= 7) {  
      await userStore.addUser(user);
      console.log(`registering ${user.email}`);
      console.log("Member Account Created Successfully!");      
      response.redirect("/");
    } else if (user.password.length >= 7) {
      const viewData = {
        signupFail: "Signup failed, Email Already In Use!",
      };
      console.log(viewData.signupFail);
      response.render("signup-view", viewData);
    } else if (user.password.length < 7) {
      const viewData = {
        signupFail: "Signup failed, Password has to be greater than 7 characters!",
      };
      console.log(viewData.signupFail);
      response.render("signup-view", viewData);
    }    
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    const passwordUsed = request.body.password;
    const emailUsed = request.body.email;

    console.log("Attempting to authenticate with " + emailUsed + ":" + passwordUsed);

    if (user && user.password === passwordUsed) {
      response.cookie("LoggedInUser", user.email);
      console.log("Authentication Successful");
      response.redirect("/dashboard");
    } else if (!user) { 
      const viewData = {
        loginFail: "Authentication failed, Email entered is not a current member, please register!",
      };
      console.log(viewData.loginFail);
      response.render("login-view", viewData);
    } else if (user.password !== passwordUsed) {
      const viewData = {
        loginFail: "Authentication failed, Wrong Password!",
      };
      console.log(viewData.loginFail);
      response.render("login-view", viewData);
    } else {
      const viewData = {
        loginFail: "Authentication failed, please try again!",
      };
      console.log(viewData.loginFail);
      response.render("login-view", viewData);
    }
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.playlist;
    return await userStore.getUserByEmail(userEmail);
  },
};