import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd59'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '24d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '601'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '821'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ed0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '9af'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6b7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '148'),
    routes: [
      {
        path: '/docs/category/bluelrs-radios',
        component: ComponentCreator('/docs/category/bluelrs-radios', '690'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bluelrs-rx-module',
        component: ComponentCreator('/docs/category/bluelrs-rx-module', 'b3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/bluelrs-tx-module',
        component: ComponentCreator('/docs/category/bluelrs-tx-module', '412'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/brave-55a-4-in-1-32bit-esc---am32',
        component: ComponentCreator('/docs/category/brave-55a-4-in-1-32bit-esc---am32', '072'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/brave-f7-flight-controller',
        component: ComponentCreator('/docs/category/brave-f7-flight-controller', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/camera-modules',
        component: ComponentCreator('/docs/category/camera-modules', 'c86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/electronic-speed-controllers',
        component: ComponentCreator('/docs/category/electronic-speed-controllers', 'f8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ewing-4-channel-diversity-vrx-system',
        component: ComponentCreator('/docs/category/ewing-4-channel-diversity-vrx-system', 'ded'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ewing-58ghz-vtx-module-25w-max',
        component: ComponentCreator('/docs/category/ewing-58ghz-vtx-module-25w-max', '4a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ewing-80a-4-in-1-32bit-esc---am32',
        component: ComponentCreator('/docs/category/ewing-80a-4-in-1-32bit-esc---am32', '6f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ewing-h7-flight-controller',
        component: ComponentCreator('/docs/category/ewing-h7-flight-controller', 'd5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ewing-ironsight-analog-camera',
        component: ComponentCreator('/docs/category/ewing-ironsight-analog-camera', '6f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/flight-controllers',
        component: ComponentCreator('/docs/category/flight-controllers', '218'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/products',
        component: ComponentCreator('/docs/category/products', 'bb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/video-link-products',
        component: ComponentCreator('/docs/category/video-link-products', '95d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/BlueLRS/EA2400RX/Compliance',
        component: ComponentCreator('/docs/products/BlueLRS/EA2400RX/Compliance', 'a9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/BlueLRS/EA2400TX/Compliance',
        component: ComponentCreator('/docs/products/BlueLRS/EA2400TX/Compliance', '1c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Cameras/IronSightAnalog/Compliance',
        component: ComponentCreator('/docs/products/Cameras/IronSightAnalog/Compliance', 'c0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Cameras/IronSightAnalog/Specifications',
        component: ComponentCreator('/docs/products/Cameras/IronSightAnalog/Specifications', '0a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Cameras/IronSightAnalog/Wiring',
        component: ComponentCreator('/docs/products/Cameras/IronSightAnalog/Wiring', '4ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/BraveESC/Compliance',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/BraveESC/Compliance', '806'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/BraveESC/Getting Started',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/BraveESC/Getting Started', 'f03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/BraveESC/Specifications',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/BraveESC/Specifications', '37a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/BraveESC/Wiring',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/BraveESC/Wiring', 'a7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/Ewing80A/Compliance',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/Ewing80A/Compliance', '8f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/Ewing80A/Getting Started',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/Ewing80A/Getting Started', '5c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/Ewing80A/Specifications',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/Ewing80A/Specifications', '56c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Electronics Speed Controllers/Ewing80A/Wiring',
        component: ComponentCreator('/docs/products/Electronics Speed Controllers/Ewing80A/Wiring', '17e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/braveF7/Compliance',
        component: ComponentCreator('/docs/products/Flight Controllers/braveF7/Compliance', '371'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/braveF7/Getting Started',
        component: ComponentCreator('/docs/products/Flight Controllers/braveF7/Getting Started', 'fec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/braveF7/GettingStartedINAV',
        component: ComponentCreator('/docs/products/Flight Controllers/braveF7/GettingStartedINAV', 'c30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/braveF7/Specifications',
        component: ComponentCreator('/docs/products/Flight Controllers/braveF7/Specifications', 'd05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/braveF7/Wiring',
        component: ComponentCreator('/docs/products/Flight Controllers/braveF7/Wiring', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/EwingH7/Compliance',
        component: ComponentCreator('/docs/products/Flight Controllers/EwingH7/Compliance', '811'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/EwingH7/GettingStartedAP',
        component: ComponentCreator('/docs/products/Flight Controllers/EwingH7/GettingStartedAP', 'bea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/EwingH7/GettingStartedBF',
        component: ComponentCreator('/docs/products/Flight Controllers/EwingH7/GettingStartedBF', '331'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/EwingH7/Specifications',
        component: ComponentCreator('/docs/products/Flight Controllers/EwingH7/Specifications', '52b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Flight Controllers/EwingH7/Wiring',
        component: ComponentCreator('/docs/products/Flight Controllers/EwingH7/Wiring', 'f0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVRX/Compliance',
        component: ComponentCreator('/docs/products/Video/EwingVRX/Compliance', 'a93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVRX/GettingStarted',
        component: ComponentCreator('/docs/products/Video/EwingVRX/GettingStarted', '611'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVTX/Compliance',
        component: ComponentCreator('/docs/products/Video/EwingVTX/Compliance', '1f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVTX/FrequencyTable',
        component: ComponentCreator('/docs/products/Video/EwingVTX/FrequencyTable', 'e5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVTX/GettingStarted',
        component: ComponentCreator('/docs/products/Video/EwingVTX/GettingStarted', '81f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/products/Video/EwingVTX/Specifications',
        component: ComponentCreator('/docs/products/Video/EwingVTX/Specifications', 'a72'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '561'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
