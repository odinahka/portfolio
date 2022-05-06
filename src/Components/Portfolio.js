import React from "react";

import styles from './Portfolio.module.css';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      return (
        <div key={projects.title} className={`${styles.portfolio} ${styles.shadow}`}>
          <div>
            <h3>{projects.title}</h3>
            <p>{projects.description}</p>
            <a href={projects.url} target="_blank" rel="noreferrer" className="btn-rounded-blue">View Project</a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio" className={styles.portfolios}>
      <h2 className={styles.heading}>Check Out Some of My Works.</h2>
      <div className={styles.portfolios_grid}>{projects}</div>
    </section>
  );
};

export default Portfolio;
