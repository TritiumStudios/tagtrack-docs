import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { useAuth } from "../../auth";
import { useHistory, useLocation } from "@docusaurus/router";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { signIn } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [password, setPassword] = useState("");

  const onSubmit = (password) => {
    if (signIn(password)) {
      if (location.search.includes("?u=")) {
        history.push(location.search.split("?u=")[1]);
      } else {
        history.push("/");
      }
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Enter Password</p>
        <div className="form">
          <input
            type="password"
            name="pass"
            required
            style={{
              marginBottom: 25,
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              bottomBorderWidth: 1,
              borderColor: "white",
              color: "white",
              WebkitBackgroundClip: "text",
            }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              onClick={() => onSubmit(password)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function SignIn() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={"Sign In"} description="Sign in to access documenation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

