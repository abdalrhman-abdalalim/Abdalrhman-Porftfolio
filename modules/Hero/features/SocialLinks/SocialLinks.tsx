import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import SocialLink from "./components/SocialLink";

interface IProps {}

const SocialLinks = ({}: IProps) => {
  return (
    <div className="flex justify-center flex-wrap gap-12 p-12 z-20">
      <SocialLink
        href="https://github.com/abdalrhman-abdalalim"
        icon={FaGithub}
        label="GitHub"
      />
      <SocialLink
        href="https://linkedin.com/in/abdalrhman-aboalela"
        icon={FaLinkedin}
        label="LinkedIn"
      />
      <SocialLink
        href="https://www.facebook.com/profile.php?id=100092075502128"
        icon={CiFacebook}
        label="Facebook"
      />
      <SocialLink
        href="https://www.instagram.com/abdalrhman_mhamd/"
        icon={FaInstagram}
        label="Instagram"
      />
      <div className="ml-auto max-md:mx-auto pr-8">
        <a
          href="mailto:abdalrhmanaboalela162@gmail.com"
          target="_blank"
          className="text-white/70 hover:text-white text-sm"
        >
          abdalrhmanaboalela162@gmail.com
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
