"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import logo from "@/app/icon.png";
import config from "@/config";
import {BiHome,BiMenu,BiLogoTwitter,BiLogoFacebookCircle,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiLogoYoutube } from 'react-icons/bi'

const links = [
  {
    href: "/#home",
    label: "Home",
  },
  {
    href: "/#practiceAreas",
    label: "Practice Areas",
  },
  {
    href: "/#successStories",
    label: "Success Stories",
    sublinks: [
      { href: "/faq/general", label: "General FAQs" },
      { href: "/faq/payment", label: "Payment FAQs" },
      { href: "/faq/technical", label: "Technical FAQs" },
    ],
  },
  {
    href: "/#reviews",
    label: "Reviews",
    sublinks: [
      { href: "/faq/general", label: "General FAQs" },
      { href: "/faq/payment", label: "Payment FAQs" },
      { href: "/faq/technical", label: "Technical FAQs" },
    ],
  },
  {
    href: "/#blog",
    label: "Blog",
    sublinks: [
      { href: "/faq/general", label: "General FAQs" },
      { href: "/faq/payment", label: "Payment FAQs" },
      { href: "/faq/technical", label: "Technical FAQs" },
    ],
  },
  {
    href: "/#faq",
    label: "FAQ",
    sublinks: [
      { href: "/faq/general", label: "General FAQs" },
      { href: "/faq/payment", label: "Payment FAQs" },
      { href: "/faq/technical", label: "Technical FAQs" },
    ],
  },
  {
    href: "/#aboutUs",
    label: "About Us",
    sublinks: [
      { href: "/aboutUs/team", label: "Our Team" },
      { href: "/aboutUs/values", label: "Our Values" },
    ],
  },
  {
    href: "/#contactUs",
    label: "Contact Us",
    sublinks: [
      { href: "/contactUs/general", label: "General Inquiries" },
      { href: "/contactUs/support", label: "Customer Support" },
    ],
  },
];

const cta = <ButtonSignin extraStyle="btn-primary" />;

const SocialMediaLinks = () => (
  <div className="flex items-center gap-4">
    <a href="#" className="text-white hover:text-indigo-700"><BiLogoFacebookCircle /></a>
    <a href="#" className="text-white hover:text-indigo-700"><BiLogoTwitter /></a>
    <a href="#" className="text-white hover:text-indigo-700"><BiLogoInstagramAlt /></a>
    <a href="#" className="text-white hover:text-indigo-700"><BiLogoYoutube /></a>
    <a href="#" className="text-white hover:text-indigo-700"><BiLogoLinkedinSquare /></a>
  </div>
);
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    setIsOpen(false);
    setSelectedLink(null);
  }, [searchParams]);

  return (

    <header className="bg-black-200">
    <main className="flex items-center bg-black p-3 text-white md:justify-center sm:justify-center">
        <div className="container flex justify-end items-center md:justify-center sm:justify-center">
          <SocialMediaLinks />
        </div>
      </main>

      <nav
        className="container flex items-center justify-between px-4 py-4 mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-1 shrink-0 "
            href="/"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-4"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-md">ACMELEGAL</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:gap-7 lg:items-center">
          {links.map((link) => (
            <div key={link.href} className="group relative">
              {link.sublinks ? (
                <div className="relative group">
                  <button
                    className={`link link-hover ${selectedLink === link.href ? 'text-primary' : ''}`}
                    onClick={() => setSelectedLink(selectedLink === link.href ? null : link.href)}
                  >
                    {link.label}
                  </button>
                  {selectedLink === link.href && (
                    <div className="absolute left-0 mt-2 space-y-2 ml-4">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="link link-hover"
                          title={sublink.label}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={link.href} className="link link-hover" title={link.label}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">{cta}</div>
      </nav>
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0 "
              title={`${config.appName} homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <div key={link.href} className="group relative">
                    {link.sublinks ? (
                      <div
                        className={`relative group ${selectedLink === link.href ? 'group-hover:underline text-primary' : ''}`}
                      >
                        <button
                          className={`link link-hover ${selectedLink === link.href ? 'text-primary' : ''}`}
                          onClick={() => setSelectedLink(selectedLink === link.href ? null : link.href)}
                        >
                          {link.label}
                        </button>
                        {selectedLink === link.href && (
                          <div className="absolute left-0 mt-2 space-y-5 ml-4">
                            {link.sublinks.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                className="link link-hover"
                                title={sublink.label}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={link.href} className="link link-hover" title={link.label}>
                        {link.label}
                      </Link>
                      
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
