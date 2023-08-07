import { navigation } from "@/localization/en/ui-constants";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai';

const Navbar = (props: any) => {

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <div className="relative h-8 w-8">
        <Image fill src="/logo.svg" alt="Volcan" />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="ml-4">
            <AiOutlineWhatsApp size={'28px'}/>
          </li>
          <li className="ml-4">
            <AiOutlineLinkedin size={'28px'}/>
          </li>
          <li className="ml-4">
            <AiOutlineInstagram size={'28px'}/>
          </li>
        </ul>
      </div>
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
