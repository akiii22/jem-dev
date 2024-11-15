import { motion } from "framer-motion";

function Contact() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="contact"
      className="flex min-h-[80vh] w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:7xl"
        >
          <span className="bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text text-transparent">
            Reach Me
          </span>
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-seumibold text-gray-500"
        >
          Have any questions or want to chat? Feel free to reach out to me!
        </motion.p>
        <motion.a
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.2 }}
          href={`mailto:${import.meta.env.VITE_GMAIL}`}
          className="text-nowrap rounded-lg border border-slate-700 bg-black px-5 py-3 text-lg font-bold text-slate-400 shadow-lg shadow-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-600"
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
