import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd91'),
    routes: [
      {
        path: '/docs/category/products',
        component: ComponentCreator('/docs/category/products', 'bb5'),
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
