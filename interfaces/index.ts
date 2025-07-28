import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ILinks {
  title: string;
  href: string;
  className?: string;
}

export interface ISocialLinks {
  href: string;
  icon: StaticImageData;
}
