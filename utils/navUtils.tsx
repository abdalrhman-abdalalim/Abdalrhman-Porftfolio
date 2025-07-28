
import { NavLinks, SocialLinks } from "@/data/index";
import NavLink from "@/components/layout/navbar/NavLink";
import SocialLink from "@/components/layout/navbar/SocialLink";
import { usePathname } from "next/navigation";
import { ILinks } from "@/interfaces";

export const renderNavLinks = () => {
  return NavLinks.map((link, index) => {
    if (handleActiveNavLink(link)) {
      return (
        <NavLink
          className="bg-black text-white"
          href={link.href}
          key={index}
          title={link.title}
        />
      );
    }
    return <NavLink href={link.href} key={index} title={link.title} />;
  });
};

export const renderSocialLinks = () => {
  return SocialLinks.map((link, index) => (
    <SocialLink href={link.href} key={index} icon={link.icon} />
  ));
};

export const handleActiveNavLink = (Link: ILinks) => {
  const pathName = usePathname();
  if (pathName == Link.href) {
    return true;
  }
  return false;
};
