import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Pads from "./Components/Pads";
import padsData from "./DataSource/pads";
import React from "react";
import StarWar from "./Components/StarWar";
import Meme from "./Components/Meme";
import WindowTracker from "./Components/WindowTracker";

function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prevpads) =>
      prevpads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }
  const buttonElements = pads.map((pad) => (
    <Pads
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));
  return (
    <main>
      {/* <Header/>
      <Main/> */}

      {/* <div className="pad-container">
      {buttonElements}
        </div> */}

      {/* <StarWar/> */}
      {/* <Meme/> */}
      <WindowTracker />
    </main>
  );
}

export default App;
