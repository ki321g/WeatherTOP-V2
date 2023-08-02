/**
 * This class renders is used as a catch all for any routes that are not found
 *
 * @author Kieron GArvey
 * @version 0.1
 */
export const catchAllController = {
  /*
   * Render Welcome Page
   */
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTOP",
    };
    console.log("\nRendering: 404");
    response.render("404", viewData);
  },
};
