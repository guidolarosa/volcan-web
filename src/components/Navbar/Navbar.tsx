import { navigation } from "@/localization/en/ui-constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = (props: any) => {
  return (
    <>
      <div className="relative h-8 w-8">
        <Image fill src="/logo.svg" alt="Volcan" />
      </div>
      <nav className="rounded-full border border-stone-600 ml-8 px-8 h-16 items-center justify-center bg-[rgb(65, 65, 65)] hidden md:flex backdrop-blur-lg">
        <ul className="flex gap-8">
          {navigation.map((item) => (
            <li
              key={item.href}
              className={
                "tracking-widest font-light text-stone-300 hover:text-stone-100 transition-all"
              }
            >
              <Link href={item.label}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
