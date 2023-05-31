import Box from "../Box/Box";
import Link from "next/link";

const Footer = (props: any) => {
  return (
    <footer className="bg-footer-gradient py-16 rounded-[30px_30px_0px_0]">
      <Box className="mb-20">
        <div className="w-1/4">
          <strong className="block mb-4 text-2xl">SITEMAP</strong>
          <ul>
            <li>
              <Link href="#">HOME PAGE</Link>
            </li>
            <li>
              <Link href="#">ABOUT</Link>
            </li>
            <li>
              <Link href="#">WORK</Link>
            </li>
            <li>
              <Link href="#">SERVICES</Link>
            </li>
            <li>
              <Link href="#">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <strong className="block mb-4 text-2xl">UNIVERSE</strong>
          <ul>
            <li>
              <Link href="#">VOLCAN COLLECTIVE</Link>
            </li>
            <li>
              <Link href="#">BLOG</Link>
            </li>
            <li>
              <Link href="#">SHOP</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <strong className="block mb-4 text-2xl">NOW PLAYING</strong>
          <div>
            <iframe className={'rounded-4'} src="https://open.spotify.com/embed/playlist/4g609iIs0ZeOI8CXaim9WY?utm_source=generator&theme=0" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
          </div>
        </div>
      </Box>
      <Box>
        <div className="w-1/4">FAQ</div>
        <div className="w-1/4">TERMS</div>
        <div className="w-1/4"></div>
        <div className="w-1/4">info@wearevolcan.com</div>
      </Box>
    </footer>
  );
};

export default Footer;
