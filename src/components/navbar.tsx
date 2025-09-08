import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className={`relative font-medium text-lg lg:text-xl transition-colors duration-300 ${window.scrollY > 0 ? "text-gray-900" : "text-white"
          } hover:text-blue-600`}
        {...({} as any)}
      >
        {children}
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const resizeListener = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialIcons = ["twitter", "facebook", "instagram"];

  return (
    <MTNavbar
      fullWidth
      shadow={isScrolling}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 transition-all duration-300"
      {...({} as any)}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo with rounded white background */}
        <div
          className={`bg-white rounded-xl w-16 h-16 flex items-center justify-center transition-all duration-300 ${isScrolling ? "" : "bg-white"
            }`}
        >
          <img
            src="/logos/storelogo.png"
            alt="Store Logo"
            className="h-14 w-auto"
            {...({} as any)}
          />
        </div>


        {/* Desktop Menu */}
        <ul
          className={`ml-8 hidden items-center gap-6 lg:flex transition-colors duration-300 ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          {["Home", "Services", "Products", "Contact Us"].map((item) => (
            <NavItem key={item}>{item}</NavItem>
          ))}
        </ul>

        {/* Social Icons & Mobile Menu */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-3">
            {socialIcons.map((icon) => (
              <IconButton
                key={icon}
                variant="text"
                color={isScrolling ? "gray" : "white"}
                size="sm"
                className="hover:bg-blue-100 rounded-full transition"
                {...({} as any)}
              >
                <i className={`fa-brands fa-${icon} text-lg`} />
              </IconButton>
            ))}
          </div>

          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            onClick={handleOpen}
            className="ml-2 inline-block lg:hidden"
            {...({} as any)}
          >
            {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-900 text-lg">
            {["Home", "Services", "Products", "Contact Us"].map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            {socialIcons.map((icon) => (
              <IconButton key={icon} variant="text" color="gray" size="sm" {...({} as any)}>
                <i className={`fa-brands fa-${icon} text-lg`} {...({} as any)} />
              </IconButton>
            ))}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
