import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '25c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'bd7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '095'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '57f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '68e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd3b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '315'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '270'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd44'),
    routes: [
      {
        path: '/docs/category/products',
        component: ComponentCreator('/docs/category/products', 'bb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ttl-230-inflator-translator',
        component: ComponentCreator('/docs/category/ttl-230-inflator-translator', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ttl-318-uhf-reader',
        component: ComponentCreator('/docs/category/ttl-318-uhf-reader', '0b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/ttl-230-inflator-translator/getting-started',
        component: ComponentCreator('/docs/products/ttl-230-inflator-translator/getting-started', '0c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/ttl-318-uhf-reader/collecting-data',
        component: ComponentCreator('/docs/products/ttl-318-uhf-reader/collecting-data', 'eba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/ttl-318-uhf-reader/configuration',
        component: ComponentCreator('/docs/products/ttl-318-uhf-reader/configuration', 'c22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/ttl-318-uhf-reader/getting-started',
        component: ComponentCreator('/docs/products/ttl-318-uhf-reader/getting-started', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dcf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
