import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Cardboard", image: "/image/cardboard.png" },
    { name: "Glass", image: "/image/glass.png" },
    { name: "Metal", image: "/image/metal.png" },
    { name: "Paper", image: "/image/paper.png" },
    { name: "Plastic", image: "/image/plastic.png" },
    { name: "Trash", image: "/image/trash.png" },
  ];

  // Filtrer les catégories selon la barre de recherche
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/image/logo.png" alt="RecycleApp Logo" className="logo" />
        </div>
        <input
          type="text"
          placeholder="Search for recyclable items..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/upload">Classify Image</Link>
        </div>
      </nav>

      {/* Main Header */}
      <header className="main-header">
        <div className="main-text">
          <h1>Recycle the Unrecyclable with RecycleApp</h1>
          <p>
            Use our AI-powered application to classify waste and contribute to
            a greener planet.
          </p>
        </div>
        <div className="main-image-container">
          <img
            src="/image/main-header.png"
            alt="Recycling"
            className="main-image"
          />
        </div>
      </header>

      {/* Popular Categories Section */}
      <section className="popular-section">
        <h2>Most Popular</h2>
        <div className="card-container">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div className="card" key={category.name}>
                <Link to={`/category/${category.name.toLowerCase()}`}>
                  <img src={category.image} alt={category.name} />
                  <p>{category.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-results">No results match your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
