import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_internet_on_the_go_re_vben.svg")
      .default,
    description: (
      <>
        Our gateway hardware provides the interface between data in the field
        and the TagTrack network.
      </>
    ),
  },
  {
    title: "Global Network",
    Svg: require("@site/static/img/undraw_connected_world_wuay.svg").default,
    description: (
      <>Our adaptable network provides delivery of your data from anywhere.</>
    ),
  },
  {
    title: "Live Data",
    Svg: require("@site/static/img/undraw_dashboard_re_3b76.svg").default,
    description: (
      <>
        Data is available live (in real time) in our powerful TagTrack
        dashboard. Alerts and reporting can be easily configured and automated.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

