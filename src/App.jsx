import React, { useState, Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { ListingPage } from "./pages/ListingPage";
import { ProductPage } from "./pages/ProductPage";
import { NotFound } from "./pages/NotFound";

// Add Lazy loading for route About
const LazyAbout = lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="listing">Listing Page</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAbout />
            </Suspense>
          }
        ></Route>

        <Route path="listing" element={<ListingPage></ListingPage>}>
          <Route
            path="product/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
