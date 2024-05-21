import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="sm:pb-1">{new Date().getFullYear()} &copy; All rights reserved</span>
        <Link href={'/'}>Say hi!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
