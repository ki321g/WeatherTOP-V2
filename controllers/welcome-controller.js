export const welcomeController = {
  /*
   * Render Welcome Page
   */
  index(request, response) {
    const viewData = {
      title: "Welcome to WeatherTOP",
    };
    console.log("\nRendering: Welcome-View");
    response.render("welcome-view", viewData);
  },
};
