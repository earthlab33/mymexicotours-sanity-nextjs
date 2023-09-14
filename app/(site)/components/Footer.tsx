'use client';
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-2 border-cyan-900 h-auto flex flex-col justify-between bg-black">
      <Link href="/" passHref>
    <Image
      src="https://mymexicotours.s3.amazonaws.com/new_graphics/mmt-logo.png"
      width={100}
      height={100}
      alt="My Mexico Tours Icon"
      className="mx-auto mt-[-53px] rounded-full"
    />
</Link>
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        <div className="flex-1" id="footer-first">
        <h2 className="text-slate-50 mt-4 mb-4">Quick Links:</h2>
          <ul className="space-y-2">
            <li><Link href="/about" passHref className="text-slate-50">About</Link></li>
            <li><Link href="/yoga" passHref className="text-slate-50">Classes</Link></li>
            <li><Link href="/faq" passHref className="text-slate-50">FAQ</Link></li>
            <li><Link href="/blog" passHref className="text-slate-50">Blog</Link></li>
            <li><Link href="/contact" passHref className="text-slate-50">Contact</Link></li>
          </ul>
        </div>
        <div className="flex-1" id="footer-second">
        <h2 className="text-slate-50 mt-4 mb-4">Where:</h2>
          <div className="flex space-x-2 mt-4">
            <FaMapMarkerAlt />
            <p className="text-slate-50">
              Calle 20 de Noviembre 2,<br />
              Centro, 62520 <br /> 
              Tepoztlán, Mor., Mexico
            </p>
          </div>
          <div className="flex space-x-2 mt-4">
            <FaPhone />
            <p className="text-slate-50">+1 505.933.5334</p>
          </div>
          <div className="flex space-x-2 mt-4">
            <FaRegEnvelope />
            <p className="text-slate-50">betsy -at- mymexicotours -dot- com</p>
          </div>
        </div>
        <div className="flex-1" id="footer-third">
          <h2 className="text-slate-50 mt-4 mb-4">Social Media:</h2>
          <ul className="space-y-2">
            <li className="flex space-x-2 mt-4"><FaFacebookF /><Link href="https://www.facebook.com/betsy.mcnair" passHref target="_blank" className="text-slate-50">Facebook</Link></li>
            <li className="flex space-x-2 mt-4"><FaInstagram /><Link href="https://www.instagram.com/casabetsy" passHref target="_blank" className="text-slate-50">Instagram</Link></li>
          </ul>
        </div>
        <div className="flex-1" id="footer-fourth">
          <h3 className="mt-4 mb-4 text-slate-50">Join the Email List!</h3>
          <NewsletterForm />
        </div>
      </div>
      
      <div className="px-4 mt-20">
        <p className="text-center text-slate-50">
          &copy; 2023 Betsy McNair - My Mexico Tours
        </p>
      </div>
    </div>
  )
}