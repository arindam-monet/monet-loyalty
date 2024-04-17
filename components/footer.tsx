import Logo from "./logo";
import {
  IconBrandDiscordFilled,
  IconBrandTwitterFilled,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@tabler/icons-react";
import ParticleEffect from "./ui/particle-effect";

const socialIcons = [
  {
    name: "Twitter",
    url: "https://twitter.com/MonetWork",
    icon: IconBrandTwitterFilled,
  },
  {
    name: "Discord",
    url: "https://discord.gg/monetwork",
    icon: IconBrandDiscordFilled,
  },
  {
    name: "Telegram",
    url: "https://t.me/monetwork",
    icon: IconBrandTelegram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/monetwork",
    icon: IconBrandLinkedin,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black py-8 text-slate-300 text-center z-20 relative">
      <div className="flex flex-col gap-4 md:flex-row text-xs justify-between items-center container">
        <div className="flex gap-4">
          {socialIcons.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
        <Logo className="text-slate-400 hover:text-yellow-300 w-24 stroke-current fill-current" />
        <p>&copy; Monet Work {currentYear}. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
