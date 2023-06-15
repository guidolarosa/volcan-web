import Box from "../Box/Box";
import Link from "next/link";
import { footerNavigation } from "@/localization/en/ui-constants";

const Footer = (props: any) => {
  return (
    <footer className="bg-footer-gradient py-8 md:py-16 rounded-[16px_16px_0px_0] md:rounded-[30px_30px_0px_0]">
      <Box className="mb-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <strong className="block mb-4 text-2xl">
            {" "}
            {footerNavigation[0].title}
          </strong>
          <ul>
            {footerNavigation[0].links.map((link: any, index: number) => (
              <li key={index} className="mb-1 text-stone-400">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <strong className="block mb-4 text-2xl">
            {footerNavigation[1].title}
          </strong>
          <ul>
            {footerNavigation[1].links.map((link: any, index: number) => (
              <li key={index} className="mb-1 text-stone-400">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <strong className="block mb-4 text-2xl">NOW PLAYING</strong>
          <div>
            <iframe
              className={"rounded-4"}
              src="https://open.spotify.com/embed/playlist/4g609iIs0ZeOI8CXaim9WY?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </Box>
      <Box className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">FAQ</div>
        <div className="w-full md:w-1/4">TERMS</div>
        <div className="w-full md:w-1/4"></div>
        <div className="w-full md:w-1/4">info@wearevolcan.com</div>
      </Box>
    </footer>
  );
};

export default Footer;
