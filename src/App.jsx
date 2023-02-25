import "./App.css";
import EventTimeline from "./components/EventTimeline";

function App() {
  const items = [
    "Item one",
    "Item two",
    "Item three",
    "Item four",
    "Item five",
  ];
  const toShow = 3;
  const step = 1;

  return (
    <div className="App">
      <div className="container">
        <EventTimeline items={items} stepSize={step} show={toShow} />
      </div>
    </div>
  );
}

export default App;
