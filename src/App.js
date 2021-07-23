import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Counter from "./components/Counter";

import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faPlus, faMinus);

function App() {
  const [counters, setCounters] = useState([0]);
  return (
    <div className="App">
      <Header />
      <hr />
      {counters.length < 3 && (
        <button
          className="btnAddCounter"
          onClick={() => {
            const tab = [...counters];
            tab.push(0);
            setCounters(tab);
          }}
        >
          Add counter
        </button>
      )}
      <div className="counters">
        {counters.map((elem, index) => {
          return (
            <Counter
              value={elem}
              key={index}
              index={index}
              counters={counters}
              setCounters={setCounters}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
