import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoGithub,
  BiLogoGit,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiSupabase, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

function TechSkills() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-6 p-5 max-w-5xl"
      >
        <BiLogoHtml5 className="cursor-pointer text-[70px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoCss3 className="cursor-pointer text-[70px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoJavascript className="cursor-pointer text-[70px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoReact className="cursor-pointer text-[70px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoTypescript className="cursor-pointer text-[70px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <SiNextdotjs className="cursor-pointer text-[70px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoTailwindCss className="cursor-pointer text-[70px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoNodejs className="cursor-pointer text-[70px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoPhp className="cursor-pointer text-[70px] text-purple-700 transition-all duration-300 hover:-translate-y-5 sm:text-[90px] md:text-[100px]" />
        <BiLogoPostgresql className="cursor-pointer text-[70px] text-blue-300 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <DiMysql className="cursor-pointer text-[70px] text-orange-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <SiSupabase className="cursor-pointer text-[70px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoGithub className="cursor-pointer text-[70px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
        <BiLogoGit className="cursor-pointer text-[70px] text-orange-700 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[90px]" />
      </motion.div>
    </div>
  );
}

export default TechSkills;
