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
          <p className="md:text-[1.1rem] text-pretty md:text-center text-left text-xl text-gray-300">
            I am a Bachelor of Science in Information Technology graduate,
            majoring in Web Application Development. Skilled in HTML, CSS,
            JavaScript, React, Next.js, Node.js, and PostgreSQL, I have a strong
            passion for building modern, responsive, and user-friendly web
            applications. While I have foundational knowledge in back-end
            development, my primary focus and expertise lie in front-end
            development. I thrive in collaborative environments and am eager to
            contribute to innovative projects while continuously enhancing my
            technical skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;
