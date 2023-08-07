import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

const SocialLinks = (props: any) => {
  return (
    <div>
      <ul className="flex items-center">
        <li className="ml-4">
          <AiOutlineWhatsApp size={"28px"} />
        </li>
        <li className="ml-4">
          <AiOutlineLinkedin size={"28px"} />
        </li>
        <li className="ml-4">
          <AiOutlineInstagram size={"28px"} />
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
