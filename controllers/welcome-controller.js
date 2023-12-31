/**
 * This class renders the Welcome page
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const welcomeController = {
  /*
   * Render Welcome Page
   */
  index(request, response) {
    let UserLoggedIn = Boolean(request.cookies.LoggedInUser);

    const viewData = {
      title: "Welcome to WeatherTOP",
      UserLoggedIn: UserLoggedIn,
    };
    console.log("Rendering: Welcome-View");
    response.render("welcome-view", viewData);
  },
};
