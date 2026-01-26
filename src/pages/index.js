import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

const Logo = require("@site/static/img/white-icon.svg").default;

function HomepageHeader() {
  const { colorMode } = useColorMode();

  const [headerClasses, setHeaderClasses] =
    React.useState("hero hero--primary");

  React.useEffect(() => {
    if (colorMode === "dark") {
      setHeaderClasses("hero");
    } else {
      setHeaderClasses("hero hero--primary");
    }
  }, [colorMode]);

  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(headerClasses, styles.heroBanner)}>
      <div className="container">
        <div className="text--center">
          <Logo className={styles.featureSvg} height={200} role="img" />
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/products"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={""} description="Ewing Aerospace Hardware Documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
