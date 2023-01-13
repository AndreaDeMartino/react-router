import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Image } from "../components/Image";

export const ProductPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isEasterEgg = searchParams.get("easterEgg") === "true";

  const addSearchParamsHandler = () => {
    setSearchParams({ easterEgg: "true" });
  };
  return (
    <>
      <h1 className="product-page" onClick={addSearchParamsHandler}>
        ProductPage {params.id}
      </h1>
      {isEasterEgg && <h5>EASTER EGG FOUND WITH QUERY PARAMETERS</h5>}
      {params.id == 2 && (
        <Image
          url={
            "https://w0.peakpx.com/wallpaper/760/527/HD-wallpaper-tokyo-night-city-rain-skyscrapers-metropolis-people-japan.jpg"
          }
        ></Image>
      )}
    </>
  );
};
