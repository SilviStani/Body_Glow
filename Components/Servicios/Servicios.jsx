import "./Servicios.scss";
import React from "react";
import { serviciosData } from "./ServiciosData";
import Image from "next/image";
import Link from "next/link";

const Servicios = () => {
  return (
    <div className="ServiciosWrapper">
      <h1>Nuestros Servicios</h1>
      <p>
        Conoce los servicios y<br />
        promociones que ofrecemos
      </p>
      <div className="cardContainer">
        {serviciosData.map((e) => (
          <div className="card" key={e.title}>
            <h3>{e.title}</h3>
            <Image
              src={e.src}
              alt={e.title}
              height={40}
              width={40}
              className="cardImage"
            />
            <p>{e.descr}</p>
            <Link
              href="https://api.whatsapp.com/send/?phone=5493546500838&text=Hola%21+Podrias+pasarme+un+presupuesto%3F+Me+interesa+el+sercivio+de+Body+Glow."
              target="_blank">
                <button>Reserva</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
