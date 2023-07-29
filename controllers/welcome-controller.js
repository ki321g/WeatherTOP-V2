export const welcomeController = {
  /*
   * Render Welcome Page
   */
  index(request, response) {
    let UserLoggedIn = Boolean(request.cookies.LoggedInUser);
    console.log("UserLoggedIn: " + UserLoggedIn);
    const viewData = {
      title: "Welcome to WeatherTOP",
      UserLoggedIn: UserLoggedIn
    };
    console.log("\nRendering: Welcome-View");
    response.render("welcome-view", viewData);
  },
};
