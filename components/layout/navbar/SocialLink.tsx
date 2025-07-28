import { ISocialLinks } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ href, icon }: ISocialLinks) => {
  return (
    <Link href={href} target="_blank">
      <Image
        src={icon}
        alt="Social Link Logo"
        width={25}
        height={25}
        className="rounded-full"
      />
    </Link>
  );
};

export default SocialLink;
