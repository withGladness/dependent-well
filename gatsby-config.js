module.exports = {
  siteMetadata: {
    title: 'Dependent Well',
    description:
      'Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'Dependent Well',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Tribes',
        slug: '/tribes/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'Dependent Well',
        url: 'https://dependentwell.netlify.com',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
