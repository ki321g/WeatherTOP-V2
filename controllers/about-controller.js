/**
 * This class renders the about page
 *
 * @author Kieron Garvey
 * @version 0.1
 */
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
    console.log("Rendering: About-View");
    response.render("about-view", viewData);
  },
};
