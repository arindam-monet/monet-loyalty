const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black py-16 text-slate-400 text-center">
        <   p>&copy; Monet Work {currentYear}</p>
        </footer>
    )
}

export default Footer;