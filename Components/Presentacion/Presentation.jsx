import React from "react";
import "./Presentation.scss";
import Image from "next/image";
import Link from "next/link";

const Presentation = () => {
  return (
    <div className="PresentationWrapper">
      <div className="left"></div>
      <div className="right">
        <h1 className="presentacionTitle">
          Estética y
          <br /> Masajes SPA
        </h1>
        <p>Relájate y Rejuvenece con</p>
        <p>nuestros tratamientos profesionales</p>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5493546500838&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+el+sercivio+de+Body+Glow."
          }
          target="_blank"
          className="LinkButton"
        >
          <button>RESERVA AHORA</button>
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
