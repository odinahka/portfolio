import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./Resume.module.css";
import styles2 from "./Portfolio.module.css"

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div
          key={education.school}
          className={`${styles.education_block} ${styles.shadow}`}
        >
          <h3>{education.school}</h3>
          <span className={styles.education_date}>{education.graduated}</span>
          <h4>{education.degree}</h4>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div
          key={work.years}
          data-date={work.years}
          className={`${styles.education_block} ${styles.shadow}`}
        >
          <h3>{work.company}</h3>
          <span>{work.years}</span>
          <h4>{work.title}</h4>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>
            <i className={`devicon-${skills.name.toLowerCase()}-plain`}>
              {skills.name}
            </i>
          </em>
        </li>
      );
    });

    var certifications = data.certifications.map(function (certification) {
      return (
        <div
          key={certification.category}
          className={`${styles2.portfolio} ${styles.shadow}`}
        >
          <div>
            <h3>{certification.issuer}</h3>
            <p>{certification.category}</p>
            <a
              href={certification.url}
              target="_blank" rel="noreferrer"
              className="btn-rounded-blue"
            >
              View Certificate
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <Fragment>
      <section
        id="education"
        className={`${styles.experience} ${styles.resume}`}
      >
        <h2 className={styles.heading}>Education</h2>
        {education}
      </section>
      <section id="work" className={`${styles.experience}  ${styles.resume}`}>
        <h2 className={styles.heading}>Experience</h2>
        <div>{work}</div>
      </section>
      <section id="skills" className={`${styles.skills_block}`}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <h5 className={styles.heading}>
              <strong>{skillmessage}</strong>
            </h5>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications" className={styles2.portfolios}>
      <h2 className={styles2.heading}>Certifications.</h2>
      <div className={styles2.portfolios_grid}>{certifications}</div>
    </section>
    </Fragment>
  );
};

export default Resume;
