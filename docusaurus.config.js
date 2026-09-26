// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Permafy',
    // tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',
    
    // Set the production url of your site here
    url: 'https://permafy.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs/',
    trailingSlash: true,
    
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Permafy', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    
    onBrokenLinks: 'warn',
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
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        navbar: {
            title: 'Permafy',
            logo: {
                alt: 'Permafy Logo',
                src: 'img/favicon.png',
            },
            items: [
                {
                    href: '/docs/blocks/',
                    label: 'Help with Blocks',
                    position: 'left'
                },
                {
                    href: '/docs/extensions/',
                    label: 'Help with Extensions',
                    position: 'left'
                },
                {
                    href: '/docs/development/extensions/',
                    label: 'Custom Extensions',
                    position: 'left'
                },
                {
                    href: '/docs/save-format/core-concepts',
                    label: 'Concepting a new Save File Format',
                    position: 'left'
                },
                {
                    href: 'https://permafy.github.io/',
                    label: 'Permafy',
                    position: 'right'
                },
                {
                    href: 'https://github.com/Permafy/',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
