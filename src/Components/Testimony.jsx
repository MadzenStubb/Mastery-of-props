import React from "react";
import '../Stylesheets/Testimony.css'

const Testimony = (props) => {
  return (
    <main className="testimony-container">
      <img
        src={props.image}
        alt="photo of an intellectual student" 
        className="testimony-img"
      />
      <section className="container-text-testimony">
        <p className="testimony-name"><b>{props.name}</b> from <b>{props.country}</b></p>
        <p className="role-testimony">{props.role} on <b>{props.company}</b></p>
        <p className="testimony-text">{props.testimony}</p>
      </section>
    </main>
  );
};

export default Testimony;
