import React from "react";

function Navigation() {
  return (
    <div>
      <nav>
        <div className="Logo">
          <img src="images/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  );
}

export default Navigation;
