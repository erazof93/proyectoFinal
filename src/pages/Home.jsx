import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/home.css";

import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import banner1 from "../img/movies/peliculaBan1.jpg";
import banner2 from "../img/movies/peliculaBan2.jpg";
import banner3 from "../img/movies/peliculaBan3.jpg";
import banner4 from "../img/movies/peliculaBan4.jpg";
import banner5 from "../img/movies/peliculaBan5.jpg";

import titulo1 from "../img/tittles/tittle1.png";
import titulo2 from "../img/tittles/tittle2.png";
import titulo3 from "../img/tittles/tittle3.png";
import titulo4 from "../img/tittles/tittle4.png";
import titulo5 from "../img/tittles/tittle5.png";

import ban1 from "../img/movies/pelicula1.jpg";
import ban2 from "../img/movies/pelicula2.jpg";
import ban3 from "../img/movies/pelicula3.jpg";
import ban4 from "../img/movies/pelicula4.jpg";
import ban5 from "../img/movies/pelicula5.jpg";

export const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("holaaaa" + activeIndex);

  const banners = [banner1, banner2, banner3, banner4, banner5];
  const titulos = [titulo1, titulo2, titulo3, titulo4, titulo5];

  const links = [
    "https://www.facebook.com",
    "https://twitter.com",
    "https://www.instagram.com",
    "https://www.youtube.com",
    "https://www.twitch.tv",
  ];

  const icons = [
    "fa-facebook",
    "fa-x-twitter",
    "fa-instagram",
    "fa-youtube",
    "fa-twitch",
  ];

  return (
    <>
      <div
        className="elTodo"
        style={{ backgroundImage: `url(${banners[activeIndex]})` }}
      >
        <div className="contenedor">
          <header className="header">
            <a href="#" class="logo_header">
              Peliculas
            </a>
            <ul className="nav_header">
              <li>
                <a href="#">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>
              <li>
                <a href="#">Adultos</a>
              </li>
              <li>
                <a href="#">Niños</a>
              </li>
              <li>
                <a href="/registro">Deportes</a>
              </li>
              <li>
                <Link to="/registro">Ir a Contacto</Link>
              </li>
            </ul>
            <div className="buscador">
              <input type="text" placeholder="Buscar" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </header>
          <aside className="aside">
            <div className="contenido">
              <img className="pelicula" src={titulos[activeIndex]} alt="" />
              <h4>
                <span>2025</span>{" "}
                <span>
                  <i>12+</i>
                </span>{" "}
                <span>2h 14min</span>
                <span>Romance</span>
              </h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit architecto facilis cumque illo, accusamus illum,
                unde cupiditate nobis reiciendis rem veritatis neque? Et quam
                vitae fuga sed corrupti facere quas.
              </p>

              <div className="button">
                <a href="" target="_Blank">
                  <i className="fa-solid fa-play"></i>Verr
                </a>
                <a href="">
                  <i className="fa-solid fa-plus"></i> Agregar lista
                </a>
              </div>
            </div>
          </aside>
          <main className="main">
            <Swiper
              modules={[EffectCoverflow, Pagination, Mousewheel]}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              speed={900}
              initialSlide={1}
              spaceBetween={20}
              
              slidesPerView={3}
              effect="coverflow"
              coverflowEffect={{
                depth: 200,
                modifier: 1,
              }}
              pagination={{
                clickable: true,
              }}
              mousewheel={{
                invert: true,
                thresholdDelta: 50,
                sensitivity: 1,
              }}
              onSlideChange={(swiper) => {
                // setActiveIndex(swiper.activeIndex) =====> sin el lopp
                setActiveIndex(swiper.realIndex)
              }}
            >
              <SwiperSlide>
                <img src={ban1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ban2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ban3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ban4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ban5} alt="" />
              </SwiperSlide>
            </Swiper>
          </main>
          <footer className="footer">

           
            <ul>
              {icons.map((icon, index) => (
                <li key={index}>
                  <a href={links[index]} target="_blank">
                    <i className={`fa-brands ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};
