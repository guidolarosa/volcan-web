import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

const SocialLinks = (props: any) => {
  return (
    <div>
      <ul className="flex items-center">
        <li className="ml-4 opacity-70 hover:opacity-100 transition">
          <Link href="https://wa.link/5yumuu" target="_blank">
            <AiOutlineWhatsApp size={"28px"} />
          </Link>
        </li>
        <li className="ml-4 opacity-70 hover:opacity-100 transition">
          <Link href="https://www.linkedin.com/company/volcancreativestudio/" target="_blank">
            <AiOutlineLinkedin size={"28px"} />
          </Link>
        </li>
        <li className="ml-4 opacity-70 hover:opacity-100 transition">
          <Link href="https://www.instagram.com/volcancollective/" target="_blank">
            <AiOutlineInstagram size={"28px"} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
