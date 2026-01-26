import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Radio and Telemetry Links",
    Svg: require("@site/static/img/undraw_flying-drone_0oms (1).svg")
      .default,
    description: (
      <>
        BlueLRS and Mavlink command and control systems.
      </>
    ),
  },
  {
    title: "Flight Controllers and ESCs",
    Svg: require("@site/static/img/undraw_drone-delivery_ri74.svg").default,
    description: (
      <>Wide selection of compliant Flight Controllers and Speed Controllers</>
    ),
  },
  {
    title: "Cameras and Video Systems",
    Svg: require("@site/static/img/undraw_drone-surveillance_mc4g.svg").default,
    description: (
      <>
        NDAA Compliant cameras, video transmitters, and video receivers for long range operations. 
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

