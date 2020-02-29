module.exports = {
  siteMetadata: {
    title: `Culture Portal`,
    description: `Poets Of Belarus`,
    author: `team 15`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // }
  ]
};
