import Box from "../Box/Box";
import Link from "next/link";
import { footerNavigation } from "@/localization/en/ui-constants";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = (props: any) => {
  return (
    <footer className="bg-footer-gradient py-8 md:py-16 rounded-[16px_16px_0px_0] md:rounded-[30px_30px_0px_0]">
      <Box className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/4">info@wearevolcan.com</div>
        <SocialLinks />
      </Box>
    </footer>
  );
};

export default Footer;
