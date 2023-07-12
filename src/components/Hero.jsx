import React from "react";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now </button>
          <button>Category</button>
        </div>
        <div className="share">
          <p>Also Available On</p>
          <img src="images/flipkart.png" alt="flipkart" />
          <img src="images/amazon.png" alt="flipkart" />
        </div>
      </div>

      <div className="hero-img">
        <img src="images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
}

export default Hero;
