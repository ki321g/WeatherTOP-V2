/**
 * This class renders is used as a catch all for any routes that are not found
 *
 * @author Kieron Garvey
 * @version 0.1
 */
export const catchAllController = {
  /*
   * Render 404 Page
   */
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTOP",
    };
    console.log("Rendering: 404");
    response.render("404", viewData);
  },
};
