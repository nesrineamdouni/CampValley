import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  const scrollToCarousel = () => {
    const carouselSection = document.getElementById("carousel");
    carouselSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between p-2 rounded-[5px] bg-[#f1b602] px-2 py-2.5 dark:bg-gray-800 sm:px-4">
      <div>
        <h1
          className="nav-item text-gray-700 text-2xl font-bold"
          style={{ cursor: "pointer" }}
        >
          CampValley
        </h1>
      </div>
      {/* items */}
      <ul className="flex space-x-[10px]">
        <li
          className="nav-item text-black hover:text-white text-lg font-bold"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={scrollToCarousel}
        >
          Home
        </li>
        <li
          className="nav-item text-black hover:text-white text-lg font-bold"
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            About
          </Link>
        </li>
        <li
          className="nav-item text-black hover:text-white text-lg font-bold"
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Gallery
          </Link>
        </li>
        <li
          className="nav-item text-black hover:text-white text-lg font-bold"
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
