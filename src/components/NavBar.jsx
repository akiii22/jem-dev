import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const toggleOpen = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-slate-300 bg-gray/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text text-transparent opacity-80 -mx-8 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Jerome
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>TechSack</li>
        </a>
        <a
          href="#project"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href={import.meta.env.VITE_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100">
          <a
            href={import.meta.env.VITE_FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
        </li>
        <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-[#E1306C] hover:opacity-100">
          <a
            href={import.meta.env.VITE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a
            href={import.meta.env.VITE_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
      {toggle ? (
        <BiX className="block md:hidden text-4xl" onClick={toggleOpen} />
      ) : (
        <BiMenu className=" block md:hidden text-4xl" onClick={toggleOpen} />
      )}
      {toggle && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-center justify-evenly gap-10 border-l border-slate-100 bg-black/50 p-12 ${
            toggle ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>TechSack</li>
            </a>
            <a
              href="#project"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5 justify-center">
            <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a
                href={import.meta.env.VITE_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100">
              <a
                href={import.meta.env.VITE_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
            <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-[#E1306C] hover:opacity-100">
              <a
                href={import.meta.env.VITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
            <li className=" cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <a
                href={import.meta.env.VITE_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
