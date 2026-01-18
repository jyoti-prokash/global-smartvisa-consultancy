import React from "react";
import { FaFacebook, FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=""> 
      <footer className="footer sm:footer-horizontal bg-[#17303B] text-white p-20">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Blogs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/globalsmartvisa/">
               <FaInstagram className="text-6xl hover:bg-gray-400 hover:rounded-4xl p-2"/>
            </a>
            <a href="https://wa.me/+880 1516-549903" target="blank" rel="">
            <FaWhatsapp className="text-6xl hover:bg-gray-400 hover:rounded-4xl p-2" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584552154166" target="blank" rel="">
            <FaFacebook className="text-6xl hover:bg-gray-400 hover:rounded-4xl p-2" />
            </a>
          </div>
        </nav>
      </footer>
      <p className="bg-black text-white text-xl flex items-center justify-center gap-2 py-10">
        <FaRegCopyright />
        <span>Global SmartVisa Consultancy</span> <span className="text-gray-500">All right reserved</span>
      </p>
    </div>
  );
};

export default Footer;
