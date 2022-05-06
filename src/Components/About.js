import React from "react";
// import { downloadPdfDocument } from "../lib/myLib";
import styles from "./About.module.css";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var email = data.email;
    // var resumeDownload = data.resumedownload;
  }

  return (
    <section className={styles.about} id="about">
      <div className="row">
        <div className="three columns">
          <img
            className={styles.profile_pic}
            src={profilepic}
            alt="Odinaka's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className={"columns " + styles.contact_details}>
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>Feel free to <a href={"mailto:"+email}>shoot me a mail</a></span>
              </p>
            </div>
            {/* <div className="columns download">
              <p>
                <a type="button" className="button" onClick={downloadPdfDocument} >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
