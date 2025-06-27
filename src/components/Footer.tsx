"use client";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + mô tả */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaMapMarkerAlt className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>

        {/* Liên kết nhanh */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              Điện thoại: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                const url = footerDetails.socials[platformName];
                if (platformName && url) {
                  return (
                    <Link
                      href={url}
                      key={platformName}
                      aria-label={platformName}
                      target="_blank"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="mt-8 text-center text-foreground-accent px-6">
        <p>
          &copy; {new Date().getFullYear()} {siteDetails.siteName}. Đã đăng ký
          mọi quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
