import profile from "/public/profile.png";
import { motion } from "framer-motion";
function Profile() {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className=" flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profile}
            alt="profile"
            className="w-[300px] object-cover cursor-pointer rounded-full shadow-lg shadow-slate-500 transition-all duration-300 hover:file:-translate-y-8 hover:scale-105 hover:shadow-slate-400 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-8 text-center"
        >
          <h1 className="bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Jerome Bulosan
          </h1>
          <h3 className="bg-gradient-to-r from-slate-500 to-slate-50 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-300">
            I&apos;m a fresh graduate with a major in Web Application
            Development, skilled in HTML, CSS, JavaScript, React, Node.js, and
            more. Passionate about creating modern, responsive web applications
            and continuously expanding my technical expertise.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
