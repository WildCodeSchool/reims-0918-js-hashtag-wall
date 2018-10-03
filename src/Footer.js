import React from "react";

const Footer = () => (
  <footer>
    <div class="container">
      <ul class="row">
        <li class="col-6">
          {" "}
          <img
            src="images/logo_wall_noir.png"
            alt="logo_wall"
            className="logo"
          />
        </li>
        <li class="col col-6 pt-3">
          Made with <span class="heart">❤</span> by Quentin - Benoît - Corentin
          - Leuthsouline
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
