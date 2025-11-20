import { useEffect, useState } from "react";
import { Home, Info, CircleDollarSign } from "lucide-react";

const navItems = [
  { id: "home", name: "Нүүр", icon: <Home size={16} /> },
  { id: "info", name: "Мэдээлэл", icon: <Info size={16} /> },
  {
    id: "invest",
    name: "Хөрөнгө оруулах",
    icon: <CircleDollarSign size={16} />,
  },
];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Observed:", entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      } else {
        console.warn("Not found:", item.id);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="
    hidden md:block
    fixed top-4 left-1/2 -translate-x-1/2 
    w-1/2
    bg-slate-900/90 backdrop-blur-lg
    shadow-lg
    rounded-2xl
    py-2
    z-50
  "
      >
        <div className="flex justify-evenly items-center">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
          cursor-pointer text-md rounded-2xl p-2
          ${
            active === item.id
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }
        `}
            >
              {item.name}
            </div>
          ))}
        </div>
      </nav>
      <nav
        className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-[90%] max-w-md
        bg-slate-900/90 backdrop-blur-xl
        shadow-lg
        rounded-3xl
        px-4 py-3
        flex justify-between
        md:hidden
        z-50
      "
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="
            flex flex-col items-center justify-center
            text-white
            transition-all
          "
          >
            <div
              className={`
              p-2 rounded-full transition-all
              ${
                active === item.id
                  ? "bg-white text-black shadow-md"
                  : "text-white/70"
              }
            `}
            >
              {item.icon}
            </div>
            <span
              className={`text-[10px] mt-1 ${
                active === item.id ? "text-white font-medium" : "text-white/60"
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
