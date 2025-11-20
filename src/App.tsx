import Home from "./components/home";
import Info from "./components/info";
import NavBar from "./components/navBar";
import Contact from "./components/contact";

function App() {
  return (
    <div className="w-full h-screen flex-col bg-slate-950">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="info">
        <Info />
      </section>
      <section id="invest">
        <Contact />
      </section>
    </div>
  );
}

export default App;
