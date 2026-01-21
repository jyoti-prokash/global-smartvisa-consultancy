import React from "react";
import { FaFacebook, FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
            <a href="https://wa.me/8801516549903" target="blank" rel="">
            <FaWhatsapp className="text-6xl hover:bg-gray-400 hover:rounded-4xl p-2" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584552154166" target="blank" rel="">
            <FaFacebook className="text-6xl hover:bg-gray-400 hover:rounded-4xl p-2" />
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Address</h6>
          <div className="grid grid-flow-col gap-4">
            <p className="md:w-96">House # 11 (3rd Floor) , Road # 2, Block : B , Mirpur 10 (Beside Aalok Hospital), Dhaka-1216, Bangladesh, , Mirpur, Bangladesh, 1216</p>
          </div>
          <p className="flex gap-2 justify-center items-center text-xl"><IoMdMail />globalsmartvisaconsultancy@gmail.com</p>
        </nav>
        <nav>
          <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.14203436759377!2d90.36909903191183!3d23.808905398721542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d66ac6baaf%3A0x8ba4a9db522abafd!2sR959%2BHJF%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1769016814234!5m2!1sen!2sbd"
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
