import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Social = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
