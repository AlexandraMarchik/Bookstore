import React, { useState } from "react";
import styles from "./App.module.scss";

import Header from "src/pages/PagesContainer/Header";
import Home from "src/pages/Home";
import Router from "src/pages/Router";

const MOCK_CARD = {
  image: "https://itbook.store/img/books/9781491985571.png",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
  title: "Designing Across Senses",
  subtitle: "A Multimodal Approach to Product Design",
  isbn13: "9781491954249",
  price: "$27.59",
  url: "https://itbook.store/books/9781491954249",
};

const App = () => {
  const [name, setName] = useState("");
  const onChangeName = (value: string) => {
    setName(value);
  };

  return (
    <Router/>
  );
};

export default App;
