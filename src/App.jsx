import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./List.css";

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

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(toShow);
  const [active, setActive] = useState(0);

  let data = items.slice(start, end);

  const handleNext = () => {
    if (items.indexOf(data[toShow - 1]) < items.length - 1) {
      setStart(start + step);
      setEnd(end + step);
    }
  };

  const handlePrev = () => {
    if (items.indexOf(data[0]) > 0) {
      setStart(start - step);
      setEnd(end - step);
    }
  };

  const handleClick = (index) => {
    setActive(index);
    console.log(items[index]);
  };

  return (
    <div className="App">
      <div className="rh-list-container">
        <button onClick={handlePrev}>Prev</button>
        <div className="list-wrapper">
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className={items.indexOf(item) === active ? "active" : ""}
                onClick={() => handleClick(items.indexOf(item))}
              >
                <div className="timeline-dot-container">
                  <span class="timeline-dot"></span>
                  <h6 className="timeline-title">{item}</h6>
                </div>
              </li>
            ))}
          </ul>
          <span className="fill-line"></span>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
