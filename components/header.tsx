import Logo from "./logo";

const Header = () => {
    return <nav className="bg-black flex justify-center py-3">
        <Logo  className="text-yellow-400 fill-current stroke-current w-40 "/>
    </nav>
}

export default Header;