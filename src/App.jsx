import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <>
      <div className="fixed min-h-screen -z-10 w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
      <main className=" flex flex-col items-center px-4 md:px-8 lg:px-16">
        <NavBar />
        <Profile />
        <TechSkills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
