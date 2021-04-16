import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
    "https://st4.depositphotos.com/31324280/38228/i/450/depositphotos_382287100-stock-photo-tablet-white-sheet-format-magnifier.jpg",
    alt: "Proyecto 1",
    desc: "Deuda de Patente",
  },
  {
    src:
      "https://ideakreativa.net/wp-content/uploads/2019/06/0gjo1H1Ooa-nN8d2T.jpg",
    alt: "Proyecto 2",
    desc: "Transferencia de Dominio",
  },
  {
    src:
    "https://talonarios.net/wp-content/uploads/2021/01/talonario-A4-07-600x600.jpg",
    alt: "Proyecto 3",
    desc: "Infracción y Multa",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
