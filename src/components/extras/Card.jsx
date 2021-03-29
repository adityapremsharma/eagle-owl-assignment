import React from "react";

export default function Card({ icon, name, addClass }) {
  return (
    <div className={`card-primary ${addClass}`}>
      <div className="card-primary_details">
        <i className={icon}></i>
        <p>{name}</p>
      </div>
    </div>
  );
}
