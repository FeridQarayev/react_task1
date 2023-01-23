import React from "react";
import styled from "./home.module.scss";

function Home() {
  return (
    <div className={styled.home}>
      <div
        style={{
          backgroundImage: `url(https://www.shutterstock.com/image-photo/notary-public-wax-stamper-seal-260nw-709613977.jpg)`,
        }}
        className={styled.home__title}
      >
        <div className={styled.home__title__card}>
          <h1>Notary Public & Legal Solutions</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            reprehenderit architecto voluptates perferendis temporibus ipsam
            provident, non totam, possimus voluptate, minima labore nulla
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
