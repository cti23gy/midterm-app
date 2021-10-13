module.exports = {
  siteMetadata: {
    siteUrl: "https://in-info-web4.informatics.iupui.edu/~ctimel/N322/midterm-app",
    title: "midterm-app",
  },
  plugins: [
    {
    resolve: "gatsby-plugin-manifest",
    options: {
      short_name: "midterm-app",
      display: "standalone",
      icon: 'src/images/icon.png',
    }
  },
  `gatsby-plugin-offline`
],
pathPrefix: '/~ctimel/N322/midterm-app'
};
