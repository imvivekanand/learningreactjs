import "./App.css";


let name = "Vivek Ananda";
let className = "App-header";

function App() {
  return (
    <div className="">
      <div className={className}>
      <Hello></Hello>
      {name}
      </div>
    </div>
  );
}
function Hello() {
  return (
    <div className="hello">
      <div className="App-header">Hello!</div>
    </div>
  );
}

export default App;
