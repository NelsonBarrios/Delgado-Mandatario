import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Quien Soy</h3>
        <p>
          El Mandatario Automotor es el profesional, matriculado en la Dirección Nacional de Registros de la Propiedad del Automotor y Créditos Prendarios, que lo asesorará al momento de realizar operaciones relacionadas con sus vehiculos. De esta manera, gracias a el conocimiento de las leyes y normativas correspondientes, usted protegerá el patrimonio y la inversión realizada en el mismo.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://scontent.fepa10-2.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/80436836_10212197995145373_4199159825600348160_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_ohc=Uau51let-CsAX_BEnWr&_nc_ht=scontent.fepa10-2.fna&tp=14&oh=530d247eb32ab2862507cdc8120bffd6&oe=609D7E82"
          alt="Emmanuel Delgado Mandatario Del Automotor"
        />
      </div>
    </div>
  );
};

export default About;
