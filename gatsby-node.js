const path = require('path');

const authors = ["bahdanovich", "byadulya", "harun", "gilevich", "volsky", "barshchevsky",
"zhylka", "verba", "luzhanin"];

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/poet.jsx');

  authors.forEach((author) => {
    createPage({
      path: 'poet/' + author,
      component: template,

      context: {
        id: author
      }
    });
  });
};