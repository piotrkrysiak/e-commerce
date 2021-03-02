import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Przejdz do produktów:
        <Link to="/products">Products</Link>
      </p>
    </div>
  );
}
