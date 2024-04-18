import Link from "next/link";

const menuLinks = [
  {
    name: "About",
    url: "about",
  },
  {
    name: "What are we building?",
    url: "monet-points",
  },
  {
    name: "Tokenomics",
    url: "tokenomics",
  },
  {
    name: "Community",
    url: "community",
  },
];

const Header = () => {
  return (
    <nav className="flex justify-between py-4 text-white z-30  bg-black sticky top-0">
      <div></div>
      <div className="flex gap-4 justify-between text-slate-300">
        {menuLinks.map((link) => (
          <Link
            key={link.url}
            href={`#${link.url}`}
            className="hover:text-[#ffd700]"
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
