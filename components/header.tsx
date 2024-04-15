import Link from "next/link";

const menuLinks = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "Tokenomics",
    url: "tokenomics",
  },
  {
    name: "Roadmap",
    url: "roadmap",
  },
  {
    name: "Community",
    url: "community",
  },
];

const Header = () => {
  return (
    <nav className="bg-black flex justify-between py-8 text-white">
      <div></div>
      <div className="flex gap-4 justify-between text-slate-400">
        {menuLinks.map((link) => (
          <Link
            key={link.url}
            href={`#${link.url}`}
            className="hover:text-slate-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
