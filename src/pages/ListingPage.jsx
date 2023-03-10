import React from "react";
import {Link, Outlet } from "react-router-dom";

export const ListingPage = () => {
  return (
    <>
      <h1 className="listing-page">ListingPage</h1>

      <nav>
        <ul>
          <li>
            <Link to="product/1">Product 1</Link>
          </li>
          <li>
            <Link to="product/2">Product 2</Link>
          </li>
          <li>
            <Link to="product/3">Product 3</Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>

    </>
  );
};
