import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../components/Image";

const About = () => {
  const navigate = useNavigate();

  const showProductHandler = () => {
    navigate("/listing/product/2");
  };

  return (
    <>
      <h1 className="about">About</h1>
      <Image
        url={
          "https://i.pinimg.com/originals/94/43/57/944357cc0e0fdcbdfd9e266c4422a1a3.jpg"
        }
      ></Image>
      <button onClick={showProductHandler}>GO TO PRODUCT 2</button>
    </>
  );
};

export default About;
