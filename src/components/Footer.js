import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  const date = new Date();
  let day = date
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  let month = (date.getMonth() + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <br />
        <span id="date">{currentDate}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
