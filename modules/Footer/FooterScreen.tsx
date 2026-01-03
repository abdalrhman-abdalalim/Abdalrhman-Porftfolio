interface IProps {}

const FooterScreen = ({}: IProps) => {
  const socialLinks = [
    {
      label: "Linkdin",
      href: "https://www.linkedin.com/in/abdalrhman-aboalela/",
    },
    { label: "GitHub", href: "https://github.com/abdalrhman-abdalalim" },
    {
      label: "CV",
      href: "https://drive.google.com/file/d/11MjuP3_Ccktdg9B4HsU5sson6ZNthgNP/view?usp=drive_link",
    },
  ];
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-white/5">
      <div className="relative max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Abdalrhman
              </span>
            </h3>
            <p className="text-white/60 text-sm">
              Frontend Developer & Next.js Specialist
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
                >
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:abdalrhmanaboalela162@gmail.com"
              className="text-white/60 hover:text-pink-500 text-sm transition-colors duration-300"
            >
              abdalrhmanaboalela162@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>Personal portfolio©{new Date().getFullYear()}</p>
            <p>Made with Abdalrhman using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
    </footer>
  );
};

export default FooterScreen;
