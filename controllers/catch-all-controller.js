export const catchAllController = {
  /*
   * Render Welcome Page
   */
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTOP",
    };
    console.log("\nRendering: 404");
    response.render("/404", viewData);
  },
};
