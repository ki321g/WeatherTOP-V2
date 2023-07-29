export const aboutController = {
  /*
   * Render About Page
   */
  index(request, response) {
    let UserLoggedIn = Boolean(request.cookies.LoggedInUser);
    const viewData = {
      title: "About WeatherTOP",
      UserLoggedIn: UserLoggedIn
    };
    console.log("\nRendering: About-View");
    response.render("about-view", viewData);
  },
};
