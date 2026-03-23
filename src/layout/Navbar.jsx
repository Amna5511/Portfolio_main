

 const navLinks = [
 { href: "#about", label: "About"},
 { href: "#projects", label: "Projects"},
 { href: "#experience", label: "Experience"},
 



];
 const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <span>HELLO</span>
        </a>
        {/* Desktop Navigation bar */}
        <div>
          <div>
          { navLinks.map((link)=> (
            <a key={link.label} href={link.href} className="text-white">
    {link.label}</a>
          ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar