"use client";
import React, {useEffect, useRef } from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import {
  MdOutlineAnalytics,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineLogin,
} from "react-icons/md";
import {FaHome} from "react-icons/fa";
import {GrContactInfo} from "react-icons/gr";
import { BsChevronDown, BsCalendarRange, BsPencil } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import Link from "next/link";

export default function Sidebar() {
  const menus = [
    {
      title: "Home",
      href: "/",
      icon: AiOutlineHome,
      spacing: true,
    },
    {
      title: "About",
      href: "/about",
      icon: AiOutlineStar,
      spacing: false,
      submenus: false,
      submenuItems: [],
    },
    {
      title: "Vistas",
      href: "/vistas",
      icon: AiOutlineStar,
      spacing: false,
      submenus: false,
      submenuItems: [],
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: BsCalendarRange,
      submenus: false,
      submenuItems: [
        { title: "Current", href: "/current" },
      ]
    },
    {
      title: "Contact",
      href: "/contact",
      icon: GrContactInfo,
      submenus: false,
      submenuItems: []
    },
    {
      title: "Blog",
      href: "/blog",
      icon: BsPencil,
      submenus: false,
      submenuItems: []
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  // const [submenuOpen, setSubmenuOpen] = useState(false);
  const [openedSubmenu, setOpenedSubmenu] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef, setIsOpen]);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" /><span>MENU</span>
      <div
        ref={drawerRef}
        className={`top-25 right-0 fixed bg-black w-[35vw] h-screen p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="bg-black w-[35vw]">
          <ul className="pt-2">
            {menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`p-2 flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-gray-100 hover:text-black text-white text-sm px-4 ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                >
                  <Link href={menu.href} passHref onClick={() => {setIsOpen(!isOpen)}} >
                      <menu.icon className="text-2xl block float-left" />
                      <span
                        className={`text-base font-medium pl-4 flex-1 ${!isOpen &&
                          "hidden"}`}
                      >
                        {menu.title}
                      </span>
                  </Link>
                  {menu.submenus && isOpen && (
                    <BsChevronDown
                    className={`${openedSubmenu === menu.title ? "rotate-180" : ""}`}
                      onClick={() => {
                        if (openedSubmenu === menu.title) {
                            setOpenedSubmenu(null); // Close the current submenu
                        } else {
                            setOpenedSubmenu(menu.title); // Open this submenu and close any other
                        }
                    }}                    
                    />
                  )}
                </li>
                {menu.submenus && openedSubmenu === menu.title && isOpen && (
                  <ul className="pl-8">
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className={`p-2 flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-gray-100 text-white text-sm px-5 mt-2`}
                      >
                        <Link href={submenuItem.href} passHref onClick={() => {setIsOpen(!isOpen)}}>
                        {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
      </div>
      </div>
    </>
  );
}
