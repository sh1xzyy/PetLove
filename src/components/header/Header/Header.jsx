import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/news", label: "News" },
    { to: "/notices", label: "Notices" },
    { to: "/friends", label: "Friends" },
    { to: "/profile", label: "Profile" },
    { to: "/add-pet", label: "Add Pet" },
    { to: "/register", label: "Register" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header className="w-full bg-[--gray-100] p-4 shadow-md">
      <nav className="flex justify-center gap-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              clsx(
                "rounded-md px-4 py-2 text-[14px] font-medium transition-colors",
                isActive
                  ? "bg-[--accent-orange] text-white"
                  : "text-[--gray-900] hover:bg-[--bg-cream] hover:text-[--accent-orange]",
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
