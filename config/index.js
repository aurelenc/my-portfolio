module.exports = {
  //-- SITE SETTINGS -----
  author: "@aurelenc",
  siteTitle: "Aurèle Nicolas - Portfolio",
  siteShortTitle: "My portfolio", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://jolly-tree-04c74f003.azurestaticapps.net/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "My portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#00FF00",
      secondary: "#0000FF",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FF0000",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#00FF00",
      secondary: "#0000FF",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#FF0000",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  // rssFeed:
  //   "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/aurele-nicolas/",
    },
    // {
    //   name: "Medium",
    //   url: "https://konstantinmuenster.medium.com/",
    // },
    {
      name: "Github",
      url:
        "https://github.com/aurelenc/",
    },
    // {
    //   name: "Behance",
    //   url: "https://www.behance.net/konstanmnster",
    // },
    // {
    //   name: "Mail",
    //   url: "mailto:mail@konstantin.digital",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Features",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "CV",
      fileName: "CV.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
};
