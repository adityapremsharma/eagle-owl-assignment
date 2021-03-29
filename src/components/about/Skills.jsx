import React from "react";
import Card from "../extras/Card";

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="header-mb-primary">Skills</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fab fa-react" name="React JS / Native" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-code" name="JS, Python, C, C++" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-address-card" name="UX / UI, Canva" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-database" name="DBMS, SQL / NO SQL" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fab fa-node" name="Node JS, Express" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-server" name="Mongo DB, Firebase" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-poll-h" name="Digital Marketing" />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fab fa-instagram" name="Instagram Marketing" />
        </div>
      </div>
    </div>
  );
}
