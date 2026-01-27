// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ewing Aerospace Product Documentation",
  tagline: "Built for the Mission - Fully NDAA and BlueUAS Compliant",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ewingaerospace.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/nav-logo.png",
      navbar: {
        title: "",
        logo: {
          alt: "Ewing Aerospace Logo",
          src: "img/nav-logo.png",
          srcDark: "img/nav-logo-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Products",
          },
          {
            href: "https://www.ewingaerospace.com",
            label: "Shop",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Products",
                to: "/docs/category/products",
              },
            ],
          },
          {
            title: "Ewing Aerospace Product Documentaion",
            items: [
              {
                label: "Shop",
                href: "https://ewingaerospace.com",
              },
            ],
          },
          {
            title: "Get Help",
            items: [
              {
                label: "Support",
                href: "https://www.ewingaerospace.com/pages/contact",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ewing Aerospace`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;

