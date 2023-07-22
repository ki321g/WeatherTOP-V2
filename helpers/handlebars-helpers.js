export const handlebarsHelpers = {
  /*
   * Handlebars Helpers
   */
  // equal to
  eq: function (a, b) {
    return a === b;
  },
  // greater than
  gt: function (a, b) {
    return a > b;
  },
  // greater than or equal to
  gte: function (a, b) {
    return a >= b;
  },
  // less than
  lt: function (a, b) {
    return a < b;
  },
  // less than or equal to
  lte: function (a, b) {
    return a <= b;
  },
  // not equal to
  ne: function (a, b) {
    return a !== b;
  },
  // testing
  test: function (a, b) {
    if (a >= b) {
      return "Test";
    } else {
      return "Fail";
    }
  },
};
