function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-[80vh] w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:7xl">
          <span className="bg-gradient-to-r from-slate-50 to-slate-500 bg-clip-text text-transparent">
            Reach Me
          </span>
        </h1>
        <p className="text-center text-lg font-seumibold text-gray-500">
          Have any questions or want to chat? Feel free to reach out to me!
        </p>
        <a
          href={`mailto:${import.meta.env.VITE_GMAIL}`}
          className="text-nowrap rounded-lg border border-slate-700 bg-black px-5 py-3 text-lg font-bold text-slate-400 shadow-lg shadow-slate-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
