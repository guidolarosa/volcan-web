import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/localization/en/ui-constants";
import SocialLinks from "../SocialLinks/SocialLinks";

const Navbar = (props: any) => {

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <div className="relative h-8 w-8">
        <Image fill src="/logo.svg" alt="Volcan" />
      </div>
      <SocialLinks />
      {showNavbar && (
        <nav className="rounded-full border border-stone-600 ml-8 px-8 h-16 items-center justify-center bg-[rgb(65, 65, 65)] hidden md:flex backdrop-blur-lg">
          <ul className="flex gap-8">
            {navigation.map((item, index) => (
              <li
                key={index}
                className={
                  "tracking-widest font-light text-stone-300 hover:text-stone-100 transition-all"
                }
              >
                <Link href={item.label}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
