import React, { useEffect, useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";

import "./Quote.scss";

export default function Quote() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuote(data[Math.round(Math.random() * 1500)]));
  }, []);
  //   const getQuote = () => {
  //     const datos = fetch("https://type.fit/api/quotes")
  //       .then((response) => response.json())
  //       .then((data) => data[0].text);
  //     return datos;
  //   };

  //   console.log(getQuote());

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="quoteContainer"
    >
      <p className="quote">{`"${quote.text}"`}</p>
      <p className="author">{`-${quote.author}-`}</p>
    </motion.div>
  );
}
