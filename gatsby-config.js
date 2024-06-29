module.exports = {
  siteMetadata: {
    title: 'Dependent Well',
    description:
      'Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.',
    url: 'https://dependentwell.netlify.app',
    author: 'Dependent Well',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Dependent Well is not a brand, it is not a lifestyle, it is the life with Christ.',
    menuLinks: [
      {
        name: 'Dependent Well',
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
       icon: '/favicon.png'
      },
    },
  ],
}
