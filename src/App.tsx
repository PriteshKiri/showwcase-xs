import Hello from "./Hello";
import "./style/main.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Hello From CHrome extension side bar👋</h1>
        <Hello />
      </header>
    </div>
  );
}

export default App;
