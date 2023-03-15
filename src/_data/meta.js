module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Karen Friesen',
  siteDescription: '',
  siteType: 'Person', // schema
  locale: 'en_CA',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Karen Friesen',
  authorEmail: 'hello@karenfriesen.dev',
  authorWebsite: '',
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '',
    twitterCreator: '',
    mastodonProfile: 'https://mstdn.social/@karenfriesen'
  },
  blog: {
    // this is for the rss feed
    name: 'My notes',
    description: 'web dev, thoughts, links'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '7',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
