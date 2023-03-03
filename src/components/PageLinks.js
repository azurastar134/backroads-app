import React from "react";
import { pageLinks } from "../data";

const PageLinks = () => {
  return pageLinks.map((link) => {
    const { id, href, text } = link;
    return (
      <li key={id}>
        <a href={href} className="nav-link">
          {text}
        </a>
      </li>
    );
  });
};

export default PageLinks;
