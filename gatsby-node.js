const path = require("path");

const authors = [
  "bahdanovich",
  "byadulya",
  "harun",
  "gilevich",
  "volsky",
  "barshchevsky",
  "zhylka",
  "verba",
  "luzhanin"
];

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve("./src/templates/poet.jsx");

  authors.forEach(author => {
    createPage({
      path: `poet/${author}`,
      component: template,

      context: {
        id: author
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
