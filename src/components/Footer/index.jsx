import React from "react";

function Footer() {
  const year = new Date().getFullYear;
  return (
    <div>
      <footer className="bg-dark text-light p-3 text-center">
        &copy; {year} All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
