import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";

const App = () => {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <Hero />
      </section>

      <section className="bg-slate-900 h-screen">
        <Service />
      </section>
    </>
  );
};

export default App;
