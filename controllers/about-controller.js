export const aboutController = {
  /*
   * Render About Page
   */
  index(request, response) {
    const viewData = {
      title: "About WeatherTOP",
    };
    console.log("\nRendering: About-View");
    response.render("about-view", viewData);
  },
};
