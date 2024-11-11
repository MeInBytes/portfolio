import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Social = [
  { icon: <FaGithub />, path: "https://github.com/MeInBytes" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/raushan-kumar-0510a0158/",
  },
  { icon: <FaTwitter />, path: "https://x.com/XRaushan191098" },
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
