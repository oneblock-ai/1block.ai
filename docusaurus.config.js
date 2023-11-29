// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '1Block.AI',
  tagline: 'An Unified Open Source Cloud-Native LLMOps Platform That Empowers Generative AI Applications Innovation',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://1block.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '1block.ai', // Usually your GitHub org/user name.
  projectName: '1block.ai', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/oneblock-ai/1block.ai/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '1Block.AI',
        logo: {
          alt: '1block Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            href: 'https://docs.1block.ai',
            label: 'Docs',
            position: 'right',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/oneblock-ai/oneblock',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                href: 'https://docs.1block.ai',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/oneblock-ai/oneblock/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/5BnNqC5ccB',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oneblock-ai/oneblock',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 1Block.AI. Built with love 💙.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'GTM-KK97PBTN',
        anonymizeIP: true,
      },
    ],
  ],
};

export default config;
