import type { Image } from "https://denopkg.com/deco-sites/std@1.12.17/components/types.ts";

export interface Link {
  /** @description 20px transparent png recommended */
  label: string;
  href: string;
}

export interface Props {
  logoImg: Image;
  buttons: {
    items: Link[];
  };
  links?: {
    items?: Link[];
  };
}

export default function Header({ logoImg, buttons, links }: Props) {
  return (
    <header className={"header bg-[#131211] text-white"}>
      <div className="container mx-auto flex justify-between py-4">
        <div className={"header__logo"}>
          <img src={logoImg} alt="Logo Header DNA360" />
        </div>
        <div className={"header__menu flex gap-4"}>
          {links?.items?.map((link) => (
            <li class="w-full list-none">
              <a target="_blank" href={link.href}>
                <span class="w-full text-center text-sm">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </div>
        <div className="header__right-options flex gap-4">
          {buttons.items.map((button) => (
            <li className="list-none">
              <a target="_blank" href={button.href}>
                <span class="text-center text-sm">
                  {button.label}
                </span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </header>
  );
}
