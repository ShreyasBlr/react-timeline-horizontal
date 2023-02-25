import { useState } from "react";
import { NextIcon, PrevIcon } from "../assets";
import "./EventTimeline.css";

const EventTimeline = ({ items, stepSize, show }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(show);
  const [active, setActive] = useState(0);

  let data = items.slice(start, end);

  const handleNext = () => {
    if (items.indexOf(data[show - 1]) < items.length - 1) {
      setStart(start + stepSize);
      setEnd(end + stepSize);
    }
  };

  const handlePrev = () => {
    if (items.indexOf(data[0]) > 0) {
      setStart(start - stepSize);
      setEnd(end - stepSize);
    }
  };

  const handleClick = (index) => {
    setActive(index);
    console.log(items[index]);
  };

  return (
    <div className="rh-list-container">
      <button onClick={handlePrev}>
        <PrevIcon style={{ color: "#3366ff" }} />
      </button>
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
      <button onClick={handleNext}>
        <NextIcon style={{ color: "#3366ff" }} />
      </button>
    </div>
  );
};
export default EventTimeline;
