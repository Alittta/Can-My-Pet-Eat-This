import React, { useState, useEffect } from 'react';
import backgroundImage from '../Assets/Background.png';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
  const [searchTxt, setSearchTxt] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  function onChangeHandler(event) {
    const { name, value } = event.target;
    if (name === "search") {
      setSearchTxt(value);
    } else if (name === "category") {
      setSelectedCategory(value);
    }
  }

  function toggleDropdown() {
    setShowDropdown((prevState) => !prevState);
  }

  useEffect(() => {
    onSearch(searchTxt, selectedCategory);
  }, [searchTxt, selectedCategory, onSearch]);

  return (
    <div className="d-flex justify-content-center imageContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="col-lg-6 d-flex align-items-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={showDropdown}>
                {selectedCategory}
              </button>
              {showDropdown && (
                <div className="dropdown-menu" style={{ display: "block" }}>
                  <button name="category" value="All" onClick={onChangeHandler} className="dropdown-item">All</button>
                  <button name="category" value="Cat" onClick={onChangeHandler} className="dropdown-item">Cat</button>
                  <button name="category" value="Dog" onClick={onChangeHandler} className="dropdown-item">Dog</button>
                  <button name="category" value="Toxic" onClick={onChangeHandler} className="dropdown-item">Toxic Foods</button>
                </div>
              )}
            </div>
            <input
              type="text"
              name="search"
              onChange={onChangeHandler}
              value={searchTxt}
              className="form-control search-input"
              aria-label="Text input with dropdown button"
              placeholder="Search" />
          </div>
      </div>
    </div>
  );
};

export default Searchbar;
