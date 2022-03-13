import React from "react";
import "./navbar.css"
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
