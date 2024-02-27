import React from "react";
import Link from "next/link";
import headerLogo from "@/assets/header-logo.svg";
import Image from "next/image";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-blue-500 text-white">
      <div className="mx-auto max-w-5xl flex justify-between items-center">
        <Link href="/" className="flex items-center justify-center gap-3 group">
          <Image src={headerLogo} alt="header logo" className="w-12" />
          <span className="group-hover:scale-[1.05] transition text-2xl font-bold">
            Job Finder
          </span>
        </Link>
        <div className="flex gap-4 text-xl">
          <Link href="/liked" className="flex hover:scale-[1.05] transition">
            <HeartIcon className="w-6" />
            <span>Liked</span>
          </Link>
          <Link
            href="/create-profile"
            className="flex hover:scale-[1.05] transition"
          >
            <UserCircleIcon className="w-6" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
