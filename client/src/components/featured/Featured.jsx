import React from "react";
import luiss from "../../img/luiss.png";
import search from "../../img/search.png";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Ecommerce</button>
            <button>Blogs</button>
            <button>Bugtracker</button>
          </div>
        </div>
        <div className="right">
          <img src={luiss} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
