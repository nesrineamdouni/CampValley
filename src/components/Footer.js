import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#f1b602] text-black py-4 pt-16 pb-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Partie Gauche */}
        <div className="sm:w-full">
          <p className="font-bold text-3xl text-black mb-4">CampValley</p>
          <p className="text-xl">
            CampValley &copy; {new Date().getFullYear()}
          </p>
          <p className="text-xl">All rights reserved.</p>
          <div className="flex justify-center sm:justify-start">
            <p className="text-xl hover:text-white">Terms of use</p>
            <span className="text-xl mx-2">|</span>
            <p className="text-xl hover:text-white">Privacy Policy</p>
          </div>
        </div>

        {/* Partie Centre */}
        <div className="sm:w-full">
          <p className="font-bold text-2xl text-black mb-4">CONTACT US</p>
          <p className="text-xl">9863 - 9867 Mill Road, Cambridge, MG09.</p>
          <p className="text-xl">
            Telephone: <span className="hover:text-white">+1 800 559 6580</span>
          </p>
          <p className="text-xl">
            E-mail:{" "}
            <span className="hover:text-white">campvalley@gmail.com</span>
          </p>
        </div>

        {/* Partie Droite */}
        <div className="sm:w-full">
          <p className="font-bold text-2xl text-black mb-4">SOCIAL</p>
          <div className="flex justify-center sm:justify-start">
            <FontAwesomeIcon icon={faFacebook} className="mr-4 text-3xl" />
            <span className="hover:text-white text-xl">Facebook</span>
          </div>
          <div className="flex justify-center sm:justify-start">
            <FontAwesomeIcon icon={faTwitter} className="mr-4 text-3xl" />
            <span className="hover:text-white text-xl">Twitter</span>
          </div>
          <div className="flex justify-center sm:justify-start">
            <FontAwesomeIcon icon={faGoogle} className="mr-4 text-3xl" />
            <span className="hover:text-white text-xl">Google +</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
