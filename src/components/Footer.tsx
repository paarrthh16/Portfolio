import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Tech Stack" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/50 py-12 mt-20">
      <div className="container">
        {/* Closing Message */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Thanks for Visiting!
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to connect with engineers, recruiters, and
            innovators. Whether you have an opportunity, an interesting
            project, or simply want to discuss technology, feel free to reach
            out.
          </p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-border/30 pt-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="font-heading font-black text-2xl tracking-tight gradient-text-orange hover:scale-105 transition-transform"
            >
              PS
            </Link>

            <span className="text-xs text-muted-foreground mt-1">
              © {currentYear} Parth Shah
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/paarrthh16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/parth-shah-b4762b248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:parthss2004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            Designed & Developed by{" "}
            <span className="text-primary font-medium">Parth Shah</span> using{" "}
            React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;