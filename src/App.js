import "./App.css";
import Tags from "./Tags";

function App() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          <Tags tags={["boomdotdev", "task", "tags", "react"]} />
        </div>
      </div>
    </div>
  );
}

export default App;
