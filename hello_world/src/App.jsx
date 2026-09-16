import "./App.css";

function App() {

  function sayHello() {
    alert("Hello World!");
  }

  return (
    <div className="card">
      <h1>Hello World 👋</h1>

      <h2>James</h2>

      <p>Computer Science Student</p>

      <p>
        I'm learning Web Development and AI.
      </p>

      <p>HTML • CSS • JavaScript</p>

      <button onClick={sayHello}>
        Say Hello
      </button>
    </div>
  );
}

export default App;